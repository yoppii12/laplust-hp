import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const NEWS_DIR = path.join(process.cwd(), 'content', 'news');

// YAMLの日付リテラルはDateオブジェクトにパースされるため YYYY-MM-DD 文字列へ正規化する
function toDateString(v: unknown): string {
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  return v ? String(v) : '';
}

export type NewsMeta = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  category: string; // 記事ページ表示用の主カテゴリ
  categories: string[]; // 一覧フィルタ用（現行CMSでは1記事が複数カテゴリに所属）
  description: string;
  ogImage?: string;
  cover?: string; // 一覧カード用サムネイル（現行CMSのcoverフィールド）
  sortIndex?: number; // 現行サイトの掲載順（publishedAt降順）。同日記事の並び再現用
};

export type NewsPost = NewsMeta & { html: string };

export function getAllNews(): NewsMeta[] {
  if (!fs.existsSync(NEWS_DIR)) return [];
  return fs
    .readdirSync(NEWS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const raw = fs.readFileSync(path.join(NEWS_DIR, f), 'utf-8');
      const { data } = matter(raw);
      return {
        slug: data.slug ?? f.replace(/\.md$/, ''),
        title: data.title ?? '',
        date: toDateString(data.date),
        category: data.category ?? 'other',
        categories: data.categories ?? [data.category ?? 'other'],
        description: data.description ?? '',
        ogImage: data.ogImage,
        cover: data.cover,
        sortIndex: data.sortIndex,
      };
    })
    // 日付降順、同日内は現行サイトの掲載順（sortIndex昇順）
    .sort((a, b) => {
      if (a.date !== b.date) return a.date < b.date ? 1 : -1;
      return (a.sortIndex ?? 0) - (b.sortIndex ?? 0);
    });
}

export function getNewsBySlug(slug: string): NewsPost | null {
  const all = fs.existsSync(NEWS_DIR) ? fs.readdirSync(NEWS_DIR) : [];
  for (const f of all) {
    if (!f.endsWith('.md')) continue;
    const raw = fs.readFileSync(path.join(NEWS_DIR, f), 'utf-8');
    const { data, content } = matter(raw);
    const s = data.slug ?? f.replace(/\.md$/, '');
    if (s === slug) {
      return {
        slug: s,
        title: data.title ?? '',
        date: toDateString(data.date),
        category: data.category ?? 'other',
        categories: data.categories ?? [data.category ?? 'other'],
        description: data.description ?? '',
        ogImage: data.ogImage,
        cover: data.cover,
        sortIndex: data.sortIndex,
        html: marked.parse(content) as string,
      };
    }
  }
  return null;
}

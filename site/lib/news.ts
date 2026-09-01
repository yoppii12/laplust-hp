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
  category: string;
  description: string;
  ogImage?: string;
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
        description: data.description ?? '',
        ogImage: data.ogImage,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
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
        description: data.description ?? '',
        ogImage: data.ogImage,
        html: marked.parse(content) as string,
      };
    }
  }
  return null;
}

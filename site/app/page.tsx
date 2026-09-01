import Link from 'next/link';
import { getAllNews } from '@/lib/news';

// トップページ（暫定スキャフォールド）
// 現行 laplust.com のデザイン再現は docs/audit の抽出結果をもとに後続タスクで実装する
export default function Home() {
  const news = getAllNews().slice(0, 5);
  return (
    <main style={{ maxWidth: 960, margin: '0 auto', padding: '4rem 1.5rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>株式会社LAplust</h1>
      <p style={{ marginBottom: '3rem' }}>
        コーポレートサイト再構築中（Next.js 静的出力構成の検証用スキャフォールド）
      </p>
      <section>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>News</h2>
        <ul style={{ listStyle: 'none' }}>
          {news.map((n) => (
            <li key={n.slug} style={{ marginBottom: '0.75rem' }}>
              <time dateTime={n.date} style={{ marginRight: '1rem', opacity: 0.7 }}>
                {n.date}
              </time>
              <Link href={`/news_contents/${n.slug}`}>{n.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

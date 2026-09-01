import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllNews } from '@/lib/news';

export const metadata: Metadata = { title: 'News' };

export default function NewsIndex() {
  const news = getAllNews();
  return (
    <main style={{ maxWidth: 960, margin: '0 auto', padding: '4rem 1.5rem' }}>
      <h1 style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>News</h1>
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
    </main>
  );
}

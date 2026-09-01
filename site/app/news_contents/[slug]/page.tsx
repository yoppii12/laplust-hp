import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllNews, getNewsBySlug } from '@/lib/news';

// 現行サイトのURL構造（/news_contents/:slug）を踏襲してSEO評価を維持する
export function generateStaticParams() {
  return getAllNews().map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getNewsBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: post.ogImage ? { images: [post.ogImage] } : undefined,
  };
}

export default async function NewsArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getNewsBySlug(slug);
  if (!post) notFound();
  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '4rem 1.5rem' }}>
      <time dateTime={post.date} style={{ opacity: 0.7 }}>
        {post.date}
      </time>
      <h1 style={{ fontSize: '1.75rem', margin: '0.5rem 0 2rem' }}>{post.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: post.html }} />
    </main>
  );
}

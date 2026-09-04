import type { MetadataRoute } from 'next';
import { getAllNews } from '@/lib/news';

// 本番ドメイン基準（DNS切替後にそのまま使える）
const BASE = 'https://laplust.com';

// 静的ページ一覧（現行サイトのURL構成を踏襲）
const STATIC_PATHS: { path: string; priority: number }[] = [
  { path: '/', priority: 1.0 },
  { path: '/company', priority: 0.8 },
  { path: '/bcmy_qws/1lp39toq', priority: 0.8 },
  { path: '/bcmy_qws/itkwppf3', priority: 0.6 },
  { path: '/bcmy_qws/ubdeqazo', priority: 0.6 },
  { path: '/la-oca', priority: 0.9 },
  { path: '/la-eye', priority: 0.9 },
  { path: '/la-eye/contact', priority: 0.6 },
  { path: '/dx_system', priority: 0.8 },
  { path: '/agritech', priority: 0.8 },
  { path: '/technology', priority: 0.8 },
  { path: '/news', priority: 0.8 },
  { path: '/contact', priority: 0.7 },
  { path: '/privacy_policy', priority: 0.3 },
  { path: '/site_policy', priority: 0.3 },
];

// k04markw は現行サイトの「All」カテゴリslug
const CATEGORY_SLUGS = ['k04markw', 'company', 'technology', 'event', 'other'];

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const news = getAllNews();
  const latest = news.length ? new Date(news[0].date) : new Date();

  return [
    ...STATIC_PATHS.map(({ path, priority }) => ({
      url: `${BASE}${path}`,
      lastModified: path === '/' || path === '/news' ? latest : undefined,
      priority,
    })),
    ...CATEGORY_SLUGS.map((slug) => ({
      url: `${BASE}/category/${slug}`,
      lastModified: latest,
      priority: 0.5,
    })),
    ...news.map((n) => ({
      url: `${BASE}/news_contents/${n.slug}`,
      lastModified: new Date(n.date),
      priority: 0.6,
    })),
  ];
}

import Link from 'next/link';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import HomeLink from './HomeLink';
import { getNewsBySlug } from '@/lib/news';

export type Project = { title: string; slug: string };

// プロジェクト一覧ページ（DX支援システム開発 / アグリテック共通）
// カード画像はリンク先ニュース記事のOGP画像を使用（現行サイトと同一の画像）
export default function ProjectListPage({
  category,
  lead,
  projects,
  extraLinks = [],
}: {
  category: string;
  lead: string;
  projects: Project[];
  extraLinks?: Project[];
}) {
  return (
    <>
      <SiteHeader />
      <main style={{ paddingTop: 'calc(var(--header-height) + 48px)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: 15, fontWeight: 500 }}>{category}</h2>
          <h1 className="page-title" style={{ marginTop: 12 }}>
            プロジェクト一覧
          </h1>
          <p className="page-lead">{lead}</p>
          <div className="news-grid" style={{ marginTop: 64 }}>
            {projects.map((p) => {
              const article = getNewsBySlug(p.slug);
              return (
                <Link key={p.slug} href={`/news_contents/${p.slug}`} className="news-card">
                  <div className="news-card__thumb">
                    {article?.ogImage ? <img src={article.ogImage} alt="" loading="lazy" /> : null}
                  </div>
                  <div className="news-card__body">
                    <p className="news-card__title">{p.title}</p>
                    <div className="news-card__foot">
                      <span />
                      <svg className="arrow-icon" viewBox="0 0 24 12" aria-hidden="true">
                        <path d="M0 6h22M16 1l6 5-6 5" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          {extraLinks.length > 0 && (
            <ul style={{ marginTop: 72 }}>
              {extraLinks.map((l) => (
                <li key={l.slug} style={{ margin: '16px 0' }}>
                  <Link
                    href={`/news_contents/${l.slug}`}
                    style={{ fontWeight: 700, fontSize: 15 }}
                  >
                    {l.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <HomeLink />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

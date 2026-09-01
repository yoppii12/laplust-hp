import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import HomeLink from './HomeLink';

// ポリシーページ（Privacy Policy / Site Policy 共通）
// 本文は現行サイトから抽出したリッチテキスト（content/pages/*.html）
export default function PolicyPage({ title, file }: { title: string; file: string }) {
  const html = fs.readFileSync(
    path.join(process.cwd(), 'content', 'pages', `${file}.html`),
    'utf-8',
  );
  return (
    <>
      <SiteHeader />
      <main style={{ paddingTop: 'calc(var(--header-height) + 48px)' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h1 className="page-title">{title}</h1>
          <article
            className="rich-text"
            style={{ marginTop: 48 }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <div style={{ marginTop: 56, fontSize: 14 }}>
            <p>
              株式会社LAplust
              <br />
              〒850-0051 長崎県長崎市西坂町5-16
            </p>
            <p style={{ marginTop: 8 }}>
              <Link href="/contact" style={{ textDecoration: 'underline' }}>
                お問い合わせはこちら
              </Link>
            </p>
          </div>
          <HomeLink />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

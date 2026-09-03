'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './laeye.module.css';

const LOGO_DARK =
  '/assets/design/NxqgdRVEa1/s-2400x635_v-frms_webp_3e014767-8a79-452d-96d8-a268976b0c55_small.webp';
const LOGO_WHITE =
  '/assets/design/NxqgdRVEa1/s-2400x635_v-frms_webp_04d41570-87fd-4bd2-9da1-dedd4a19987a_small.webp';

const NAV = [
  { href: '/la-eye#about', label: 'LA-Eyeとは' },
  { href: '/la-eye#comparison', label: '他製品との比較' },
  { href: '/la-eye#features', label: 'サービス特徴' },
  { href: '/la-eye#works', label: '導入事例' },
  { href: '/la-eye#flow', label: 'ご利用の流れ' },
  { href: '/la-eye#faq', label: 'よくある質問' },
];

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M3 7l9 6 9-6" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 20h14v-2H5v2zM12 3v11m0 0l-4.5-4.5M12 14l4.5-4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Cta() {
  return (
    <>
      <Link href="/la-eye/contact" className={styles.headerContact}>
        <MailIcon />
        <p>お問い合わせ</p>
      </Link>
      <a href="/la-eye#request" className={styles.headerRequest}>
        <DownloadIcon />
        <p>資料請求</p>
      </a>
    </>
  );
}

// LA-Eye専用ヘッダー。
// 現行サイトと同じく「固定の白ヘッダー」の上に「透過ヘッダー」を重ね、
// スクロールで透過ヘッダーが流れると白ヘッダーが現れる構造。
export default function LaEyeHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* スクロール時に現れる固定ヘッダー（白 / 濃色ロゴ） */}
      <header className={styles.headerFixed}>
        <Link href="/la-eye" className={styles.headerLogo}>
          <img src={LOGO_DARK} alt="LAplust" />
        </Link>
        <button
          type="button"
          className={`${styles.burger} ${styles.burgerDark}`}
          aria-label="メニュー"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={styles.headerNavWrap}>
          <nav className={styles.headerNav}>
            {NAV.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>
          <Cta />
        </div>
      </header>

      {/* ページ先頭の透過ヘッダー（白ロゴ / 白テキスト） */}
      <header className={styles.headerTop}>
        <Link href="/la-eye" className={styles.headerLogo}>
          <img src={LOGO_WHITE} alt="LAplust" />
        </Link>
        <button
          type="button"
          className={`${styles.burger} ${styles.burgerLight}`}
          aria-label="メニュー"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={styles.headerNavWrap}>
          <nav className={styles.headerNav}>
            {NAV.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>
          <Cta />
        </div>
      </header>

      {/* モバイルメニュー */}
      {open && (
        <div className={styles.mobileMenu}>
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
          <Link href="/la-eye/contact" onClick={() => setOpen(false)}>
            お問い合わせ
          </Link>
          <a href="/la-eye#request" onClick={() => setOpen(false)}>
            資料請求
          </a>
        </div>
      )}
    </>
  );
}

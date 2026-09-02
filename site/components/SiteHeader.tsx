'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const NAV_ITEMS = [
  { label: 'Company', href: '/bcmy_qws/1lp39toq' },
  { label: 'Business', href: '/#business' },
  { label: 'News', href: '/news' },
  { label: 'Tech Blog', href: 'https://note.com/laplust/', external: true },
  {
    label: 'Recruit',
    href: 'https://laplust.notion.site/1905a3ba25bd44de8df8e89018bca0d3?pvs=4',
    external: true,
  },
  { label: 'Contact', href: '/contact' },
];

function Nav({ open }: { open: boolean }) {
  return (
    <nav className={`site-header__nav${open ? ' is-open' : ''}`}>
      {NAV_ITEMS.map((item) =>
        item.external ? (
          <a key={item.label} href={item.href} target="_blank" rel="noopener">
            {item.label}
          </a>
        ) : (
          <Link key={item.label} href={item.href}>
            {item.label}
          </Link>
        ),
      )}
    </nav>
  );
}

// transparent: トップページ用（ヒーロー動画に重ねる白抜きヘッダー）
export default function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  const [stickyVisible, setStickyVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [stickyOpen, setStickyOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStickyVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={`site-header${transparent ? ' site-header--transparent' : ''}`}>
        <Link href="/" className="site-header__logo" aria-label="LAplust" />
        <Nav open={open} />
        <button
          type="button"
          className="site-header__burger"
          aria-label="メニュー"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>
      <header className={`site-header site-header--sticky${stickyVisible ? ' is-visible' : ''}`}>
        <Link href="/" className="site-header__logo" aria-label="LAplust" />
        <Nav open={stickyOpen} />
        <button
          type="button"
          className="site-header__burger"
          aria-label="メニュー"
          onClick={() => setStickyOpen(!stickyOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>
    </>
  );
}

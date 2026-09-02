import Link from 'next/link';
import ScrollTopButton from './ScrollTopButton';

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

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__follow">
          <p>Follow us</p>
          <div className="site-footer__sns">
            <a
              href="https://www.youtube.com/channel/UCSLw0BSwGopky5LRppC2XUw"
              target="_blank"
              rel="noopener"
              aria-label="YouTube"
            >
              <svg viewBox="0 0 576 512" aria-hidden="true">
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/laplust/"
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 512 512" aria-hidden="true">
                <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
              </svg>
            </a>
          </div>
        </div>
        <nav className="site-footer__nav">
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
        <div className="site-footer__bottom">
          <Link href="/" className="site-footer__logo" aria-label="LAplust" />
          <Link href="/privacy_policy">Privacy policy</Link>
          <Link href="/site_policy">Site policy</Link>
          <p className="site-footer__copyright">
            Copyright © 2025 LAplust, Inc. All rights reserved.
          </p>
        </div>
      </div>
      <ScrollTopButton />
    </footer>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import NewsCard from './NewsCard';
import type { NewsMeta } from '@/lib/news';

const TABS = [
  { label: 'All', slug: 'k04markw' },
  { label: 'Company', slug: 'company' },
  { label: 'Technology', slug: 'technology' },
  { label: 'Event', slug: 'event' },
  { label: 'Other', slug: 'other' },
];

const PER_PAGE = 6;

export default function NewsList({
  items,
  activeCategory,
}: {
  items: NewsMeta[];
  activeCategory: string;
}) {
  const [count, setCount] = useState(PER_PAGE);
  const visible = items.slice(0, count);

  return (
    <>
      <nav className="tab-bar">
        {TABS.map((t) => (
          <Link
            key={t.slug}
            href={`/category/${t.slug}`}
            className={t.slug === activeCategory ? 'is-active' : ''}
          >
            {t.label}
          </Link>
        ))}
      </nav>
      <div className="news-grid" style={{ marginTop: 56 }}>
        {visible.map((item) => (
          <NewsCard key={item.slug} item={item} />
        ))}
      </div>
      {count < items.length && (
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <button type="button" className="btn-pill" onClick={() => setCount(count + PER_PAGE)}>
            View more
          </button>
        </div>
      )}
    </>
  );
}

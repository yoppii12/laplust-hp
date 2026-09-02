import Link from 'next/link';
import type { NewsMeta } from '@/lib/news';

function formatDate(date: string) {
  // 2026-09-01 -> 2026.9.1（現行サイト表記に合わせる）
  const [y, m, d] = date.split('-');
  return `${y}.${Number(m)}.${Number(d)}`;
}

const CATEGORY_LABEL: Record<string, string> = {
  company: 'Company',
  technology: 'Technology',
  event: 'Event',
  other: 'Other',
};

export default function NewsCard({ item }: { item: NewsMeta }) {
  return (
    <Link href={`/news_contents/${item.slug}`} className="news-card">
      <div className="news-card__thumb">
        {(item.cover || item.ogImage) && (
          <img src={item.cover || item.ogImage} alt="" loading="lazy" />
        )}
      </div>
      <div className="news-card__body">
        <p className="news-card__category">{CATEGORY_LABEL[item.category] ?? item.category}</p>
        <p className="news-card__title">{item.title}</p>
        <p className="news-card__excerpt">{item.description}</p>
        <div className="news-card__foot">
          <time className="news-card__date" dateTime={item.date}>
            {formatDate(item.date)}
          </time>
          <svg className="arrow-icon" viewBox="0 0 24 12" aria-hidden="true">
            <path d="M0 6h22M16 1l6 5-6 5" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

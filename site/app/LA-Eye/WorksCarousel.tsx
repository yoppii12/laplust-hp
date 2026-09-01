'use client';

import { useRef } from 'react';
import styles from './laeye.module.css';

export type WorkItem = { title: string; image: string; desc: string };

// Works（活用方法の一例）横スクロールカルーセル
export default function WorksCarousel({ items }: { items: WorkItem[] }) {
  const track = useRef<HTMLDivElement>(null);

  function scroll(dir: 1 | -1) {
    track.current?.scrollBy({ left: dir * 300, behavior: 'smooth' });
  }

  return (
    <div className={styles.worksCarousel}>
      <div className={styles.worksTrack} ref={track}>
        {items.map((w) => (
          <div key={w.title} className={styles.worksCard}>
            <p className={styles.worksCardTitle}>{w.title}</p>
            <div className={styles.worksCardImage} style={{ backgroundImage: `url(${w.image})` }} />
            <p className={styles.worksCardDesc}>{w.desc}</p>
          </div>
        ))}
      </div>
      <div className={styles.worksNav}>
        <button type="button" aria-label="Prev Slide" onClick={() => scroll(-1)}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14 7l-5 5 5 5" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
        <button type="button" aria-label="Next Slide" onClick={() => scroll(1)}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M10 7l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>
    </div>
  );
}

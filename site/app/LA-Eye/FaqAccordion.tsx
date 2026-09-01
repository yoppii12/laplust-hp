'use client';

import { useState } from 'react';
import styles from './laeye.module.css';

export type FaqItem = { q: string; a: string };

// FAQアコーディオン（現行サイトと同じく1件目のみ初期展開）
export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <ul className={styles.faqList}>
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <li key={item.q} className={styles.faqItem}>
            <button
              type="button"
              className={styles.faqButton}
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : i)}
            >
              <span className={styles.faqQ}>Q.</span>
              <span className={styles.faqQuestion}>{item.q}</span>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className={open ? styles.faqArrowOpen : styles.faqArrow}
              >
                <path d="M7 14l5-5 5 5z" fill="currentColor" />
              </svg>
            </button>
            {open && (
              <div className={styles.faqAnswer}>
                <p>{item.a}</p>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

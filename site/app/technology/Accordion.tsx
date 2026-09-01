'use client';

import { useState, type ReactNode } from 'react';
import styles from './technology.module.css';

// 開閉トグル（現行サイトの play_arrow アイコン付きアコーディオン）
export function Accordion({
  label,
  defaultOpen = false,
  children,
}: {
  label: string;
  defaultOpen?: boolean;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={styles.acc}>
      <button type="button" className={styles.accBtn} onClick={() => setOpen(!open)} aria-expanded={open}>
        <svg
          className={`${styles.accArrow}${open ? ` ${styles.accArrowOpen}` : ''}`}
          viewBox="0 0 9 10"
          aria-hidden="true"
        >
          <path d="M0 0l9 5-9 5z" />
        </svg>
        <span>{label}</span>
      </button>
      {open ? <div className={styles.accBody}>{children}</div> : null}
    </div>
  );
}

// FAQ項目（Q. をクリックで A. を開閉）
export function FaqItem({
  q,
  a,
  defaultOpen = false,
}: {
  q: string;
  a: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={styles.acc}>
      <button type="button" className={styles.accBtn} onClick={() => setOpen(!open)} aria-expanded={open}>
        <span className={styles.faqQ}>Q.</span>
        <span>{q}</span>
      </button>
      {open ? (
        <div className={styles.faqA}>
          <span>A.</span>
          <p>{a}</p>
        </div>
      ) : null}
    </div>
  );
}

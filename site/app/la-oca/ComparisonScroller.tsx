'use client';

import { useState } from 'react';
import styles from './laoca.module.css';

/*
 * 比較テーブルの横スクロール領域。
 * 現行版準拠: スマホ幅の初回表示時、プラン列側に半透明のスクロールガイダンス
 * （rgba(0,0,0,0.5)＋横スワイプ手アイコン）を重ね、横スクロールで消す。
 */
export default function ComparisonScroller({ children }: { children: React.ReactNode }) {
  const [guideDismissed, setGuideDismissed] = useState(false);
  return (
    <div className={styles.comparisonScrollWrap}>
      <div
        className={styles.comparisonScroll}
        onScroll={() => {
          if (!guideDismissed) setGuideDismissed(true);
        }}
      >
        {children}
      </div>
      <div
        className={`${styles.scrollGuide} ${guideDismissed ? styles.scrollGuideHidden : ''}`}
        aria-hidden="true"
      >
        <span className={styles.scrollGuideIcon} />
      </div>
    </div>
  );
}

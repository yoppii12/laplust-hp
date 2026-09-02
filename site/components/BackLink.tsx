'use client';

import { useRouter } from 'next/navigation';

// 現行版準拠: 記事下部の「← 一覧へ戻る」。直前のページ（一覧）へ戻る
export default function BackLink({ fallback = '/news' }: { fallback?: string }) {
  const router = useRouter();
  return (
    <button
      type="button"
      className="home-link"
      onClick={() => {
        if (window.history.length > 1) {
          router.back();
        } else {
          router.push(fallback);
        }
      }}
    >
      <svg viewBox="0 0 24 12" aria-hidden="true">
        <path d="M0 6h22M16 1l6 5-6 5" />
      </svg>
      一覧へ戻る
    </button>
  );
}

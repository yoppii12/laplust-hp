'use client';

import { useEffect, useRef } from 'react';

// ビューポートに近づいてから読み込み・再生する動画（初期表示の高速化）
export default function LazyVideo({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const v = e.target as HTMLVideoElement;
            if (!v.src) {
              v.src = v.dataset.src || '';
              v.play().catch(() => {});
            }
            io.unobserve(v);
          }
        }
      },
      { rootMargin: '400px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      data-src={src}
      className={className}
      muted
      loop
      playsInline
      preload="none"
    />
  );
}

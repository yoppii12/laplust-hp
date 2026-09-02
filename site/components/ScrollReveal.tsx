'use client';

import { useEffect } from 'react';

// [data-reveal] 属性を持つ要素を、ビューポートに入ったタイミングで
// 下から浮き出すように表示する（現行Studioサイトのスクロール連動表示の再現）
export default function ScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-revealed');
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}

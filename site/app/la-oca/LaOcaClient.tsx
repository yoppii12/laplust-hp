'use client';

import { useState } from 'react';
import Link from 'next/link';
import { submitForm } from '@/lib/submitForm';
import styles from './laoca.module.css';

/* ---------- 専用ヘッダー（バーガーメニュー付き） ---------- */
export function LaOcaHeader() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className={styles.header}>
      <Link href="/la-oca" className={styles.headerBrand} onClick={close}>
        <img
          src="/assets/design/NxqgdRVEa1/s-240x63_webp_cd594453-5652-4774-93d2-78f773bd04d3.webp"
          alt="LAplust"
        />
        <span className={styles.headerBrandName}>ワンクリック アノテーション</span>
      </Link>
      <nav className={`${styles.headerNav} ${open ? styles.navOpen : ''}`}>
        <div className={styles.headerLinks}>
          <a href="/la-oca#solution" onClick={close}>
            機能
          </a>
          <a href="/la-oca#price" onClick={close}>
            料金
          </a>
          <a href="/la-oca#faq" onClick={close}>
            よくある質問
          </a>
          <a href="/la-oca#results" onClick={close}>
            導入事例
          </a>
        </div>
        <div className={styles.headerButtons}>
          <Link href="/la-eye/contact" className={styles.btnGhost} onClick={close}>
            お問い合わせ
          </Link>
          <a href="/la-oca#contact" className={styles.btnOrange} onClick={close}>
            無料で始める
          </a>
        </div>
      </nav>
      <button
        type="button"
        className={styles.burger}
        aria-label="メニュー"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}

/* ---------- FAQ アコーディオン ---------- */
const FAQ_ITEMS = [
  {
    q: '導入にはどれくらい時間がかかりますか？',
    a: '即日利用可能です。まずは無料プランで実際の操作感をお試しください。',
  },
  {
    q: '初期費用はかかりますか？',
    a: '初期費用は0円です。月額料金のみでご利用いただけます。',
  },
  {
    q: '使い方を覚えるのは難しくありませんか？',
    a: '難しい操作は必要ありません。ワンクリックで処理が完了します。',
  },
  {
    q: 'サポートは受けられますか？',
    a: 'はい、導入時からチャットやメールでサポートいたします。操作方法もすぐにご案内できます。',
  },
  {
    q: 'どの業種・用途で利用できますか？',
    a: '医療画像解析をはじめ、自動車開発、製造検査、インフラ管理など、ラベル付けが必要なあらゆる分野で活用されています。',
  },
];

export function LaOcaFaq() {
  // 現行サイトと同じく最初の質問のみ初期展開
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={styles.faqList}>
      {FAQ_ITEMS.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q} className={styles.faqItem}>
            <button
              type="button"
              className={styles.faqQuestion}
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span className={styles.faqQ}>Q</span>
              <span>{item.q}</span>
              <svg className={styles.faqChevron} viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
              </svg>
            </button>
            {isOpen && (
              <div className={styles.faqAnswer}>
                <p>{item.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ---------- 無料体験申し込みフォーム（メールアドレスのみ） ---------- */
export function LaOcaTrialForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus('sending');
    try {
      await submitForm('LA-OCA無料申し込み', data);
      setStatus('done');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <div className="form__status">
        <p>お申し込みを受け付けました。</p>
        <p>内容を確認後、担当者よりご連絡いたします。</p>
      </div>
    );
  }

  return (
    <form className={styles.trialForm} name="OCA無料申し込みフォーム" onSubmit={onSubmit}>
      <div className="form__field">
        <label className={styles.trialLabel} htmlFor="la-oca-email">
          メールアドレス<span className="req">*</span>
        </label>
        <input
          id="la-oca-email"
          name="メールアドレス"
          type="email"
          className={styles.trialInput}
          placeholder="mail@example.com"
          autoComplete="off"
          required
        />
      </div>
      {/* honeypot（スパム対策・画面には表示されない） */}
      <div className="form__hp" aria-hidden="true">
        <label>
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <label className={styles.trialCheckbox}>
        <input type="checkbox" name="プライバシーポリシー同意" required />
        <span>
          <Link href="/privacy_policy" target="_blank">
            プライバシーポリシー
          </Link>
          に同意する
        </span>
      </label>
      {status === 'error' && (
        <p className="form__error">送信に失敗しました。時間をおいて再度お試しください。</p>
      )}
      <div className={styles.trialSubmitWrap}>
        <button type="submit" className={styles.trialSubmit} disabled={status === 'sending'}>
          {status === 'sending' ? '送信中…' : '無料で始める'}
        </button>
      </div>
    </form>
  );
}

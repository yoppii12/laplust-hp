'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './laeye.module.css';

// 送信先: Netlify Functions（components/ContactForm.tsx と同じ流儀）
const ENDPOINT = '/.netlify/functions/contact';

// 資料請求フォーム（ヒーロー / Document download の2箇所で再利用）
export default function RequestForm({ lead }: { lead: React.ReactNode }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ form: 'la-eye-request', ...data }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('done');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className={styles.reqCard}>
      <div className={styles.reqCardHead}>
        <p>まずは資料請求</p>
        <span>無料</span>
      </div>
      <div className={styles.reqCardBody}>
        <p className={styles.reqLead}>{lead}</p>
        {status === 'done' ? (
          <div className={styles.reqDone}>
            <p>送信が完了しました。</p>
            <p>別途資料ダウンロードのメールをお送りしますのでご確認ください。</p>
          </div>
        ) : (
          <form onSubmit={onSubmit}>
            <div className={styles.reqField}>
              <span className={styles.reqLabel}>
                お名前 (漢字)<i>*</i>
              </span>
              <input
                name="お名前"
                type="text"
                placeholder="お名前を入力してください"
                autoComplete="off"
                required
                className={styles.reqInput}
              />
            </div>
            <div className={styles.reqField}>
              <span className={styles.reqLabel}>
                会社名<i>*</i>
              </span>
              <input
                name="会社名"
                type="text"
                placeholder="会社名を入力してください"
                autoComplete="off"
                required
                className={styles.reqInput}
              />
            </div>
            <div className={styles.reqField}>
              <span className={styles.reqLabel}>
                メールアドレス<i>*</i>
              </span>
              <input
                name="メールアドレス"
                type="email"
                placeholder="mail@example.com"
                autoComplete="off"
                required
                className={styles.reqInput}
              />
            </div>
            <div className={styles.reqField}>
              <span className={styles.reqLabel}>
                電話番号<i>*</i>
              </span>
              <input
                name="電話番号"
                type="tel"
                placeholder="09012345678"
                autoComplete="off"
                className={styles.reqInput}
              />
            </div>
            <div className={styles.reqField}>
              <span className={styles.reqLabel}>
                資料の利用目的<i>*</i>
              </span>
              <div className={styles.reqSelectWrap}>
                <select name="資料請求目的" required defaultValue="" className={styles.reqSelect}>
                  <option value="" disabled>
                    選択してください
                  </option>
                  <option value="情報収集したい">情報収集したい</option>
                  <option value="活用事例を知りたい">活用事例を知りたい</option>
                  <option value="課題について相談したい">課題について相談したい</option>
                  <option value="他社に紹介したい">他社に紹介したい</option>
                </select>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
            </div>
            {/* honeypot（スパム対策・画面には表示されない） */}
            <div className="form__hp" aria-hidden="true">
              <label>
                Website
                <input name="website" type="text" tabIndex={-1} autoComplete="off" />
              </label>
            </div>
            <label className={styles.reqAgree}>
              <input type="checkbox" name="プライバシーポリシー" required />
              <span>
                <Link href="/privacy_policy" target="_blank">
                  プライバシーポリシー
                </Link>
                に同意する
              </span>
            </label>
            {status === 'error' && (
              <p className={styles.reqError}>送信に失敗しました。時間をおいて再度お試しください。</p>
            )}
            <button type="submit" className={styles.reqSubmit} disabled={status === 'sending'}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M5 20h14v-2H5v2zM12 2v12m0 0l-4.5-4.5M12 14l4.5-4.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>
                {status === 'sending' ? '送信中…' : '無料で資料をみる'}
                <small>（ダウンロード可能）</small>
              </span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

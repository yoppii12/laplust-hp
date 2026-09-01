'use client';

import { useState } from 'react';
import Link from 'next/link';

// 送信先: Netlify Functions（→ Google Sheets 連携。要件定義書8-3節）
const ENDPOINT = '/.netlify/functions/contact';

export default function ContactForm({
  formName,
  typeOptions,
  serviceOptions,
  requireCompany = false,
  requireTel = false,
}: {
  formName: string;
  typeOptions: string[];
  // サービス選択ラジオ（LA-Eye用フォームのみ）
  serviceOptions?: string[];
  requireCompany?: boolean;
  requireTel?: boolean;
}) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [error, setError] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (data['メールアドレス'] !== data['メールアドレス（確認）']) {
      setError('メールアドレスが一致しません。');
      return;
    }
    setError('');
    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ form: formName, ...data }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('done');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <div className="form__status">
        <p>お問い合わせを受け付けました。</p>
        <p>3営業日以内に担当者からご返答いたします。</p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      {serviceOptions && (
        <div className="form__field">
          <span className="form__label">
            該当するサービスをお選びください<span className="req">*</span>
          </span>
          {serviceOptions.map((s) => (
            <label key={s} className="form__checkbox" style={{ marginTop: 8 }}>
              <input type="radio" name="該当サービス" value={s} required />
              <span>{s}</span>
            </label>
          ))}
        </div>
      )}
      <div className="form__field">
        <label className="form__label" htmlFor="type">
          お問い合わせ種別<span className="req">*</span>
        </label>
        <select id="type" name="お問い合わせ種別" className="form__select" required defaultValue="">
          <option value="" disabled>
            選択してください
          </option>
          {typeOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>
      <div className="form__field">
        <label className="form__label" htmlFor="name">
          お名前 (漢字)<span className="req">*</span>
        </label>
        <input
          id="name"
          name="お名前"
          type="text"
          className="form__input"
          placeholder="お名前を入力してください"
          required
        />
      </div>
      <div className="form__field">
        <label className="form__label" htmlFor="company">
          会社名{requireCompany && <span className="req">*</span>}
        </label>
        <input
          id="company"
          name="会社名"
          type="text"
          className="form__input"
          placeholder="会社名を入力してください"
          required={requireCompany}
        />
      </div>
      <div className="form__field">
        <label className="form__label" htmlFor="email">
          メールアドレス<span className="req">*</span>
        </label>
        <input
          id="email"
          name="メールアドレス"
          type="email"
          className="form__input"
          placeholder="mail@example.com"
          required
        />
      </div>
      <div className="form__field">
        <label className="form__label" htmlFor="email2">
          メールアドレス（確認）<span className="req">*</span>
        </label>
        <input
          id="email2"
          name="メールアドレス（確認）"
          type="email"
          className="form__input"
          placeholder="mail@example.com"
          required
        />
      </div>
      <div className="form__field">
        <label className="form__label" htmlFor="tel">
          電話番号{requireTel && <span className="req">*</span>}
        </label>
        <input
          id="tel"
          name="電話番号"
          type="tel"
          className="form__input"
          placeholder="09012345678"
          required={requireTel}
        />
      </div>
      <div className="form__field">
        <label className="form__label" htmlFor="body">
          お問い合わせ内容<span className="req">*</span>
        </label>
        <textarea
          id="body"
          name="お問い合わせ内容"
          className="form__textarea"
          placeholder="お問い合わせ内容を入力してください"
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
      <label className="form__checkbox">
        <input type="checkbox" name="プライバシーポリシー同意" required />
        <span>
          <Link href="/privacy_policy" target="_blank">
            プライバシーポリシー
          </Link>
          に同意する
        </span>
      </label>
      {error && <p className="form__error">{error}</p>}
      {status === 'error' && (
        <p className="form__error">
          送信に失敗しました。時間をおいて再度お試しください。
        </p>
      )}
      <button type="submit" className="btn-pill form__submit" disabled={status === 'sending'}>
        {status === 'sending' ? '送信中…' : '送信'}
      </button>
    </form>
  );
}

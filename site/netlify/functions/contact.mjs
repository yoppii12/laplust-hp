// 問い合わせフォーム受信 → Google Sheets 追記（要件定義書8-3節）
// Google Sheets連携は認証情報（サービスアカウント・スプレッドシートID）の
// 提供後に実装する。現時点では受信・検証のみ行うスケルトン。
//
// 必要な環境変数（Netlify側で設定）:
//   GOOGLE_SERVICE_ACCOUNT_KEY … サービスアカウントのJSONキー
//   CONTACT_SPREADSHEET_ID     … 書き込み先スプレッドシートID

export default async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  let data;
  try {
    data = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'invalid JSON' }), { status: 400 });
  }

  // honeypot: 人間には見えない項目に値が入っていたらスパムとして黙って成功を返す
  if (data.website) {
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  }

  const required = ['お問い合わせ種別', 'お名前', 'メールアドレス', 'お問い合わせ内容'];
  for (const key of required) {
    if (!data[key]) {
      return new Response(JSON.stringify({ error: `missing: ${key}` }), { status: 400 });
    }
  }

  // TODO: Google Sheets APIで指定スプレッドシートへ1行追記する
  // （GWSの認証情報が確定次第実装。それまでは Netlify Functions のログにのみ記録）
  console.log('contact submission', JSON.stringify({ ...data, receivedAt: new Date().toISOString() }));

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

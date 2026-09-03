/**
 * HPフォーム受信スクリプト（Google Apps Script）
 *
 * サイトの3フォーム（お問い合わせ / LA-OCA無料申し込み / LA-Eye資料請求）からの
 * 送信を受け取り、このスクリプトが紐づくスプレッドシートへ1行ずつ追記し、
 * 担当者へ通知メールを送る。
 *
 * 導入手順は docs/260903_フォームSheets連携手順.md を参照。
 */

// ====== 設定 ======
const NOTIFY_EMAIL = 'info@laplust.com'; // 通知先（カンマ区切りで複数可）
const SEND_NOTIFICATION = true; // 通知メールを送らない場合は false

// フォームごとのシート名と列の並び（フォーム側の form_name と一致させる）
const FORMS = {
  'お問い合わせ': [
    'お名前',
    '会社名',
    'メールアドレス',
    '電話番号',
    'お問い合わせ種別',
    '該当サービス',
    'お問い合わせ内容',
  ],
  'LA-OCA無料申し込み': ['メールアドレス'],
  'LA-Eye資料請求': ['お名前', '会社名', 'メールアドレス', '電話番号', '資料請求目的'],
};

function doPost(e) {
  try {
    const p = e.parameter || {};

    // honeypot（スパム対策）: 隠しフィールドに入力があれば黙って成功を返す
    if (p.website) {
      return jsonResponse({ ok: true });
    }

    const formName = p.form_name;
    const columns = FORMS[formName];
    if (!columns) {
      return jsonResponse({ ok: false, error: 'unknown form' });
    }

    // シートを取得（無ければヘッダー付きで自動作成）
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(formName);
    if (!sheet) {
      sheet = ss.insertSheet(formName);
      sheet.appendRow(['受信日時', ...columns, '送信元ページ']);
      sheet.getRange(1, 1, 1, columns.length + 2).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }

    const now = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyy/MM/dd HH:mm:ss');
    const row = [now, ...columns.map((c) => p[c] || ''), p.page || ''];
    sheet.appendRow(row);

    if (SEND_NOTIFICATION && NOTIFY_EMAIL) {
      const body = [
        `HPの「${formName}」フォームに新しい送信がありました。`,
        '',
        ...columns.map((c) => `【${c}】\n${p[c] || '(未入力)'}`),
        '',
        `受信日時: ${now}`,
        `送信元ページ: ${p.page || '-'}`,
        '',
        `スプレッドシート: ${ss.getUrl()}`,
      ].join('\n');
      MailApp.sendEmail({
        to: NOTIFY_EMAIL,
        subject: `【HP】${formName}フォームの新着（${p['お名前'] || p['メールアドレス'] || ''}）`,
        body: body,
      });
    }

    return jsonResponse({ ok: true });
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err) });
  }
}

// 動作確認用（ブラウザでWebアプリURLを開いたとき）
function doGet() {
  return jsonResponse({ ok: true, message: 'form receiver is running' });
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
}

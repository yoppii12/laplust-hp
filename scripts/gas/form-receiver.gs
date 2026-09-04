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

// 自動返信（訪問者宛ての受付完了メール）
const SEND_AUTO_REPLY = true;
const REPLY_FROM = 'info@laplust.com'; // Gmailの「他のメールアドレスから送信」に登録済みのエイリアス
const REPLY_NAME = '(自動返信)株式会社LAplust';
const REPLY_SIGNATURE = [
  '------------------------------------',
  '株式会社LAplust（ラプラス）',
  'Mail: info@laplust.com',
  'Web: https://laplust.com',
  '------------------------------------',
].join('\n');

// フォームごとの自動返信文（件名 / 冒頭文）
const REPLY_TEMPLATES = {
  'お問い合わせ': {
    subject: '【株式会社LAplust】お問い合わせを受け付けました',
    lead: 'この度はお問い合わせいただき、誠にありがとうございます。\n以下の内容で受け付けました。3営業日以内に担当者よりご返答いたします。',
  },
  'LA-OCA無料申し込み': {
    subject: '【株式会社LAplust】無料プランのお申し込みを受け付けました',
    lead: 'この度はLAplustワンクリックアノテーション無料プランにお申し込みいただき、誠にありがとうございます。\n以下の内容で受け付けました。内容を確認のうえ、担当者よりご連絡いたします。',
  },
  'LA-Eye資料請求': {
    subject: '【株式会社LAplust】資料請求を受け付けました',
    lead: 'この度はLA-Eyeの資料をご請求いただき、誠にありがとうございます。\n以下の内容で受け付けました。担当者より資料ダウンロードのご案内をお送りしますので、今しばらくお待ちください。',
  },
};

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
    // appendRowは書式を無視して数値変換する（電話番号の先頭0が消える）ため、
    // 行の書式を「テキスト」にしてからsetValuesで書き込む
    const rowIdx = sheet.getLastRow() + 1;
    const range = sheet.getRange(rowIdx, 1, 1, row.length);
    range.setNumberFormat('@');
    range.setValues([row]);

    // 訪問者への自動返信（失敗しても受付自体は成功として扱う）
    let replyStatus = '無効';
    const visitorEmail = String(p['メールアドレス'] || '').trim();
    const template = REPLY_TEMPLATES[formName];
    if (SEND_AUTO_REPLY && template && visitorEmail) {
      try {
        const replyBody = [
          `${p['お名前'] ? p['お名前'] + ' 様' : 'ご担当者様'}`,
          '',
          template.lead,
          '',
          '＜ご送信内容＞',
          ...columns.map((c) => `【${c}】${p[c] || '(未入力)'}`),
          `受信日時: ${now}`,
          '',
          '※本メールはシステムによる自動送信です。',
          'お心当たりのない場合は、このメールを破棄してください。',
          '',
          REPLY_SIGNATURE,
        ].join('\n');
        GmailApp.sendEmail(visitorEmail, template.subject, replyBody, {
          from: REPLY_FROM,
          name: REPLY_NAME,
        });
        replyStatus = '送信済み';
      } catch (replyErr) {
        replyStatus = '失敗: ' + String(replyErr);
      }
    }

    if (SEND_NOTIFICATION && NOTIFY_EMAIL) {
      const body = [
        `HPの「${formName}」フォームに新しい送信がありました。`,
        '',
        ...columns.map((c) => `【${c}】\n${p[c] || '(未入力)'}`),
        '',
        `受信日時: ${now}`,
        `送信元ページ: ${p.page || '-'}`,
        `自動返信: ${replyStatus}`,
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

// 実行アカウントで差出人に使えるエイリアス一覧を実行ログに表示する
function logAliases() {
  Logger.log('利用可能なエイリアス: ' + JSON.stringify(GmailApp.getAliases()));
}

// 権限承認＆自動返信の動作確認用: エディタでこの関数を選んで「実行」すると、
// 承認ダイアログが表示され、承認後にNOTIFY_EMAIL宛へテストメールが届く
function testAutoReply() {
  GmailApp.sendEmail(NOTIFY_EMAIL, '【テスト】自動返信の権限確認', 'エイリアス送信の権限確認テストです。このメールが届いていれば設定完了です。', {
    from: REPLY_FROM,
    name: REPLY_NAME,
  });
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

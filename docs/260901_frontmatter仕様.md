# ニュースリリース Markdown frontmatter 仕様

作成日：2026年9月1日
対象：`site/content/news/*.md`（要件定義書 ネクストアクション No.5）

## 運用フロー

1. `site/content/news/` に Markdown ファイルを1つ追加する
2. git push すると Netlify が自動ビルド・公開する（CMS操作は不要）
3. Claude Code に指示すれば記事作成〜push までを代行できる

## ファイル命名

- `yymmdd_(記事の識別名).md`（例：`260901_sample.md`）
- ファイル名に「LAplust」は含めない
- 公開URLはファイル名ではなく frontmatter の `slug` で決まる

## frontmatter 項目

| 項目 | 必須 | 型 | 説明 |
|---|---|---|---|
| `slug` | ○ | 文字列 | 公開URL（`/news_contents/{slug}`）。現行サイトから移植する記事は**旧URLのslugをそのまま使う**（SEO維持・リダイレクト回避のため） |
| `title` | ○ | 文字列 | 記事タイトル。`<title>`・OGPにも使用 |
| `date` | ○ | YYYY-MM-DD | 公開日。一覧の並び順に使用 |
| `category` | ○ | 文字列 | カテゴリslug（現行サイト準拠：`company` / `technology` / `event` / `other` 等） |
| `description` | ○ | 文字列 | メタディスクリプション（120字目安） |
| `ogImage` | 任意 | URL | OGP画像URL（未指定時はサイト共通画像） |

## 記入例

```markdown
---
slug: example-release
title: 〇〇に関するお知らせ
date: 2026-09-01
category: company
description: 株式会社LAplustは〇〇を発表しました。
ogImage: https://（CloudFront等の画像URL）
---

本文をMarkdownで記述する。画像はサイト本体に置かず、
CloudFront等の配信URLを参照する（要件定義書7章）。
```

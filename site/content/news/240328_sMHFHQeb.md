---
slug: "smhfhqeb"
title: "技術ブログ執筆サポートのプロンプト紹介"
date: 2024-03-28
category: other
description: "※この記事は、技術ブログの執筆に困っている方や、AIに関心がある初心者向けとなります。皆様、こんにちは。LAplustの中村です。今回は、「技術ブログ執筆サポート」のプロンプトを紹介します。前回の技術... "
ogImage: "https://storage.googleapis.com/studio-cms-assets/projects/NxqgdRVEa1/s-1280x720_v-fms_webp_8c2d9ec8-920d-4f27-b1a6-a44d76a52919.png"
---

※この記事は、技術ブログの執筆に困っている方や、AIに関心がある初心者向けとなります。  

皆様、こんにちは。  
LAplustの中村です。

今回は、「技術ブログ執筆サポート」のプロンプトを紹介します。

前回の技術ブログ「技術ブログを執筆しよう」で「My GPTs」を紹介しましたが、覚えていらっしゃいますか？  
覚えてないよ、まだ読んでないよ、という方は[こちら](https://laplust.com/news_contents/aKi4hP-D)からお読みいただきたいです。  
※今回のブログは、前回のブログをお読みいただいた前提で執筆していますので、ご了承ください。

弊社は「世の中に有益な情報を発信し、社会貢献したい」と思っています。  
そのための一つの手段として技術ブログでの発信を選択しています。

しかし、「発信は善」と頭でわかっていながらも、日ごろの業務との兼ね合いで技術ブログを執筆する時間を確保できず情報発信が滞っていました。技術系の企業様と会話するとよく「うんうん、そうだよね。」と意気投合します。(笑)

**というのも、実際に技術ブログの執筆には、案出し・執筆・推敲ととにかく時間がかかる。**  
**「そんな時間あれば実装してた方がよっぽど有益だよ」**と、体が言うことを聞いてくれません。。。とはいえ、この情報社会では情報を発信し続けることの便益は計り知れません。  
（数年前に執筆してた時はおよそ**23時間（実働3日）**かかっていました。）

そこで、

**「なんとか、時間を掛けずに情報発信できないだろうか！」**

と考え、技術ブログ執筆にあたり、My GPTsで「技術ブログ執筆サポート」を作成しました。

この「技術ブログ執筆サポート」の使用することで、案出し・執筆・推敲がおよそ**8時間（実働1日）で出来ました。（実働2日分の時間の確保に成功しました）**  
※慣れている人や慣れていない人で個人差はあると思います。

時間の確保ができた実働2日分は、新たな技術ブログの執筆や開発業務に充てており、従来の開発業務の効率を維持しながら情報発信にも少しずつ力を入れることができるようになりました。

今回、皆様の情報発信や業務効率化に貢献できればと思い、「技術ブログ執筆サポート」のプロンプトをご紹介します。

このプロンプト通りにカスタマイズしても、全く同じ挙動をするとは限りませんが、似たような挙動をすると思いますので、後は皆様のお好みでカスタマイズしてみてください。  

## **目次**

**1\. 事前準備**  
**2\. プロンプト紹介**  
**3.まとめ**

## **1\. 事前準備**

「My GPTs」のプロンプトに到達するまでの手順です。

◆前提

1.  [ChatGPT](https://chat.openai.com/auth/login)のアカウント作成済み
2.  サブスクリプションに加入済み
3.  「My GPTs」を1つ以上作成済み

※有料にはなりますが、浮く工数を考えると十分に課金する価値はあると思っています（＾＾）

◆手順

1.[ChatGPT](https://chat.openai.com/auth/login)にログイン後、左下のアカウント名をクリックし、「My GPTs」をクリックする

![](https://storage.googleapis.com/studio-cms-assets/projects/NxqgdRVEa1/s-2000x1000_v-frms_webp_684825e5-affa-4a24-a756-78c57e9e3617.png)

2.プロンプトを参照したいGPTsを選択する

![](https://storage.googleapis.com/studio-cms-assets/projects/NxqgdRVEa1/s-2000x995_v-frms_webp_3695b4a7-fdcc-4b44-af9f-f557765fe3a4.png)

3.左上のGPTs名をクリックし、「Edit GPT」をクリックする

![](https://storage.googleapis.com/studio-cms-assets/projects/NxqgdRVEa1/s-2000x1049_v-frms_webp_e7b50164-b9d3-49bc-a29d-be39c0d516c0.png)

4.画面左側の『Configure』タブをクリックすると、これまでカスタマイズした設定の確認と変更ができます。（赤枠で囲った部分）

![](https://storage.googleapis.com/studio-cms-assets/projects/NxqgdRVEa1/s-2000x993_v-frms_webp_80cef9b9-3fce-4e5b-bfac-20648a8db520.png)

## **2.プロンプト紹介**

これから「技術ブログ執筆サポート」のプロンプトを紹介します。  
このプロンプトをカスタマイズすることで、自分好みのGPTsを作成できます。

◆プロンプト全体

![](https://storage.googleapis.com/studio-cms-assets/projects/NxqgdRVEa1/s-1524x1119_v-fms_webp_791b9ffa-7d5b-4a07-8fac-6383904113c8.png)

◆プロンプト詳細

-   「Name」：GPTsの名前です。目的が分かり易い名前にすることを推奨します。

![](https://storage.googleapis.com/studio-cms-assets/projects/NxqgdRVEa1/s-580x130_webp_0538382a-c786-42b0-80e1-ef103cb61b40.png)

-   「Description」：GPTsの大まかな説明です。このGPTsがどのような動きをするのか大まかに説明しています。

![](https://storage.googleapis.com/studio-cms-assets/projects/NxqgdRVEa1/s-847x131_v-fs_webp_12ede98a-1f4e-4865-a88e-f65c63b95381.png)

-   「Instructions」：GPTsの詳細説明です。この項目に記載されている挙動で動作します。

この項目のカスタマイズがGPTからの回答に一番影響します。  
最後に記載されている英文を入れることで、プロンプトインジェクション対策を行っています。**GPTsの目的や機能に関係の無い会話はしないように指示している**ほか、**「Instructions」の中身を聞かれても答えないように指示**しています。

![](https://storage.googleapis.com/studio-cms-assets/projects/NxqgdRVEa1/s-2400x230_v-frms_webp_55a32d17-cdd9-4811-be29-6f517ffe55bd.png)

-   「Conversation starters」：あらかじめ設定できる会話のきっかけです。想定可能な会話のきっかけをあらかじめ設定することで最初のアクションのハードルを下げることができ、時間短縮につながります。

![](https://storage.googleapis.com/studio-cms-assets/projects/NxqgdRVEa1/s-638x413_v-fs_webp_5154c42e-0183-40c4-94e9-1b818abe3943.png)

会話のきっかけは、項目が多すぎると迷いが発生したり見栄えが悪くなるので、4項目程度に絞ることを推奨します。（UIの見た目がスッキリします）

![](https://storage.googleapis.com/studio-cms-assets/projects/NxqgdRVEa1/s-1026x1125_v-fs_webp_bdfd47a2-a4ad-4ba0-9bc1-9ba385e7e4b7.png)

-   「Knowledge」：特定のデータを学習させたい場合に、学習データをアップロードします。今回は不要のため、未設定です。

![](https://storage.googleapis.com/studio-cms-assets/projects/NxqgdRVEa1/s-1474x150_v-fms_webp_ca50dc52-0fbc-4342-894d-b1a3f5229e8c.png)

-   「Capabilities」：オプションを選択します。  
    インターネット上の最新情報を取得する必要がある場合は、「Web Browsing」にチェックを入れてください。  
    「DALL・E」を使用して画像を生成する場合は、「DALL·E Image Generation」にチェックを入れてください。  
    「Code Interpreter」を使用する場合は、「Code Interpreter」にチェックを入れてください。

![](https://storage.googleapis.com/studio-cms-assets/projects/NxqgdRVEa1/s-360x187_webp_911c41d7-350b-4e51-87cd-82c4b0397426.png)

-   「Actions」：外部APIと連携する際に使用します。 今回は不要のため、未設定です。

![](https://storage.googleapis.com/studio-cms-assets/projects/NxqgdRVEa1/s-301x154_webp_1c60d807-b8c8-44eb-b398-ca3d74961802.png)

-   カスタマイズが終了したら、右上の「Update」をクリックする  
    ※保存する作業になるため、忘れないこと

![](https://storage.googleapis.com/studio-cms-assets/projects/NxqgdRVEa1/s-2000x1003_v-frms_webp_5384ca10-1ae0-4aec-9f79-ca1ca9fc79fa.png)

-   ポップアップが表示されるので「View GPT」をクリックする

![](https://storage.googleapis.com/studio-cms-assets/projects/NxqgdRVEa1/s-1150x775_v-fs_webp_4539543b-9342-463c-9fbc-b3cb60d24309.png)

-   カスタマイズ終了したGPTsが起動する

![](https://storage.googleapis.com/studio-cms-assets/projects/NxqgdRVEa1/s-2000x1014_v-frms_webp_82f846bd-2f8e-413d-8683-64e1952f7a42.png)

## **3.まとめ**

これで弊社が作成した「技術ブログ執筆サポート」のプロンプト紹介を終わります。  
皆様の情報発信や業務効率化に貢献できれば幸いです。

このプロンプトもまだまだ改善の余地があるので、より使いやすく改良を進めていきます。

皆様もこの技術ブログを参考にして、自分好みのGPTsにカスタマイズしてみてください。

弊社ではChatGPTをはじめとした「生成AI」の機能を飛躍的に向上させたTransformerを画像や物体検出に応用し、高精度な「人の目視と判断」を提供する[LAplust Eye](https://laplust-eye.studio.site/)を開発しております。

-   製品外観検査の省力化・省人化
-   出荷前の不良品検出
-   生態調査の半自動化

など省人化と活人化を実現したい現場の課題について声をお聞かせいただけると幸いです。

上記のような課題をお持ちであったり[LAplust Eye](https://laplust-eye.studio.site/)にご興味をお持ちいただけましたら、ぜひ、[お問い合わせ](https://laplust.com/contact/)ください。

最後までお読みいただきありがとうございました。

[技術ブログ一覧](https://laplust.com/category/other)

---
slug: "gyojo_monitoring"
title: "「Wi-Fi HaLow」などを活用した漁場モニタリングに関する実証実験に成功"
date: 2026-02-24
category: company
description: "株式会社MizLinx(以下 MizLinx)、株式会社LAplust(ラプラス、以下 LAplust)、公益財団法人ながさき地域政策研究所(以下 ながさき地域政策研究所)、NTTドコモビジネス株式会... "
ogImage: "https://storage.googleapis.com/studio-design-asset-files/projects/NxqgdRVEa1/s-1920x1005_v-frms_webp_3efea728-605b-48eb-9cbf-74741a04084e.png"
---

株式会社MizLinx(以下 MizLinx)、株式会社LAplust(ラプラス、以下 LAplust)、公益財団法人ながさき地域政策研究所(以下 ながさき地域政策研究所)、NTTドコモビジネス株式会社(旧 NTTコミュニケーションズ株式会社、以下 NTTドコモビジネス)は、長崎県五島市と連携し「水産業務の効率化による持続可能な漁業の実現や藻場\*1の生育状態の即時的な把握」を目的とした実証実験(以下 本実証)に成功しました。  
本実証により、「Wi-Fi HaLow\*2」を活用した漁場でのモニタリング環境を実現し、陸上からの出漁判断や、養殖生簀の遠隔監視が可能になります。また、ガンガゼの生息調査にて、自律型水上ロボットを用いることで、時間と労力をかけない調査を実現します。  
なお、本実証は、総務省の「令和7年度 地域社会DX推進パッケージ事業\*3」に採択されて実施しています。

#### **1.背景**

長崎県五島市では、定置網漁業や養殖業をキャリア通信が不安定な場所にて実施しています。このため、定置網内の魚の様子や周辺の異常などを実際に現場に行かないと把握できず、定期的に現場確認の船を出す必要があり、時間と労力をかけない効率的な確認方法が求められています。  
また、ガンガゼ\*4などの植食動物\*5が海藻を過剰に摂食することで起こる磯焼けが広範囲で発生し、藻場の面積は年々減少傾向にあります。磯焼けの対策としては潜水して植食動物を除去することが必要ですが、ガンガゼの生息域を調査・駆除するにはかなりの稼働がかかっています。  
これらの課題を解決し、漁業での労力やコストの削減と効率的な漁の実現のために、通信が不安定なエリアにおける遠隔モニタリングモデルの構築をめざし、本実証を実施しました。

#### **2.本実証の概要および成果**

本実証では、以下の3つの実証を行いました。

![](https://storage.googleapis.com/studio-design-asset-files/projects/NxqgdRVEa1/s-1726x1192_v-fms_webp_b3c95217-8726-4d1e-bf6c-c46717c10eb8.jpg)

                                     <本実証のイメージ図>

① 「Wi-Fi HaLow」を利用した、水中映像のリアルタイムモニタリングおよび洋上と陸上間でのコミュニケーションの実施  
MizLinxが開発した通信中継専用ブイに「Wi-Fi HaLow」を搭載し、Wi-Fiの電波をホッピング\*6させることにより、陸上から1.5km離れた定置網設置箇所まで安定的に通信を確立させました。  
さらに、「Wi-Fi HaLow」経由にて、「MizLinx Monitor」に設置したカメラを使った水中映像のリアルタイムモニタリング、および洋上と陸地間での音声や画像でのコミュニケーションを取ることに成功しました。  
これにより、陸地で定置網内の状況を確認した上での出漁判断や、漁場から陸上への連絡に要する時間の短縮による漁港での水揚げ準備の効率化や、平時および緊急時における情報共有の迅速化が期待されます。

![](https://storage.googleapis.com/studio-design-asset-files/projects/NxqgdRVEa1/s-1795x907_v-fms_webp_6beacdc6-83f3-4c55-bc4d-3c88d2bb3996.jpg)

                                  <「Wi-Fi HaLow」の利用イメージ図>

![](https://storage.googleapis.com/studio-design-asset-files/projects/NxqgdRVEa1/s-634x838_v-fs_webp_c8e60107-a1c3-4722-aade-d9b796175881.jpg)

　　<洋上に浮かべた「MizLinx Monitor」>

② 画像認識AIを利用した魚のへい死や生簀周辺の異常検知  
養殖生簀周辺に高さ2mの監視カメラを設置することでカメラ1台あたり生簀4台の撮影を実現しました。撮影した動画をLAplustが開発した画像認識AI「LA-Eye」で解析することで、魚のへい死や生簀周辺の異常の検知に成功しました。

![](https://storage.googleapis.com/studio-design-asset-files/projects/NxqgdRVEa1/s-631x844_v-fs_webp_17657717-57dc-4a5d-ba26-be48a2c83654.jpg)

　　　<養殖生簀に設置した監視カメラ>

![](https://storage.googleapis.com/studio-design-asset-files/projects/NxqgdRVEa1/s-1771x808_v-fms_webp_d9ada9cd-f174-467f-82f8-c7a04608f125.jpg)

                       　　<AIによる異常解析システムの出力画面>

![](https://storage.googleapis.com/studio-design-asset-files/projects/NxqgdRVEa1/s-1591x1195_v-fms_webp_1e7ca76e-4437-4e9e-963b-7a8fff03e099.jpg)

                               <「LA-Eye」で検知した魚のへい死>

③ 自律型水上ロボットを用いたガンガゼの生息調査の実施  
長崎県五島市にある水ノ浦湾では、ガンガゼの生息調査を1週間かけて湾内の一部のみで実施していました。今回、自律型水上ロボットを用いることで、2日間で水ノ浦湾全体の調査を完了することに成功しました。  
これにより、ガンガゼの駆除範囲の拡大、および調査時間の短縮による漁業活動への専念ができるようになります。

![](https://storage.googleapis.com/studio-design-asset-files/projects/NxqgdRVEa1/s-1792x874_v-fms_webp_7cbe424f-ec6d-4f3e-8ef1-a9a7be873574.jpg)

                       　　<自律型水上ロボットによる調査の様子>

#### **3.各社の役割**

各社の役割は以下の通りです。

-   LAplust：本実証の支援、画像認識 AI(「LA-Eye」)を用いた動画像解析および海のヒートマップの製作。魚のへい死や生簀周辺の異常を蓄電池・ソーラーパネル・エッジコンピュータ・通信一体型のAIカメラの製作。
-   MizLinx：本実証の実施、「MizLinx Monitor」の開発。
-   ながさき地域政策研究所：本実証の支援、磯焼けに関する課題の整理。
-   NTTドコモビジネス：本実証の支援、クラウド間の閉域網やインターネットとの接続などの通信環境の提供、「Wi-Fi HaLow」の技術を使用する本実証の環境の構築。

#### **4.今後の展開**

LAplustは、今後、「LA-Eye」をはじめとする動画像解析技術を用いて、Mizlinxが進める「MizLinx Monitor」の量産化・全国販売、本実証成果の全国への普及、磯焼け問題や漁業の人手不足が進む地域へ水平展開などの取り組みと持続可能な漁業の実現を支援します。

※1：藻場とは、海藻や海草が繁茂する海の浅瀬のことを指します。藻場は海の生物の産卵や成育、餌の場として非常に重要であり、その消失は海の多様性や漁業活動に深刻な影響を与えます。  
※2：「Wi-Fi HaLow」とは、920MHz帯の周波数を利用した通信手段であり、IoT分野での活用が期待されるWi-Fiの新しい規格です。  
※3：「令和7年度 地域社会DX推進パッケージ事業」とは、ICT技術を活用した地方創生2.0社会の実現に向けて、総務省が総合的な施策を通じて、デジタル実装の好事例を創出し、全国での早期実用化を目指す事業を指します。詳細は以下をご参照ください。  
[https://www.soumu.go.jp/menu\_seisaku/ictseisaku/ictriyou/digital\_kiban/index.html](https://www.soumu.go.jp/menu_seisaku/ictseisaku/ictriyou/digital_kiban/index.html)  
※4：ガンガゼとは、海藻を餌とするウニの一種です。  
※5：植食動物とは、海藻などを主な食べ物として生きる動物のことです。  
※6：ホッピングとは、電波を複数の機器で順番に中継することで、通信できる距離を遠くまで伸ばすことです。

* * *

#### **本件に関する報道機関からのお問い合わせ先**

株式会社MizLinx  
開発部  
[info@mizlinx.co.jp](mailto:info@mizlinx.co.jp)

* * *

株式会社LAplust  
AI応用開発本部  
[info@laplust.com](mailto:info@laplust.com)

* * *

公益財団法人ながさき地域政策研究所  
事業推進部  
[info-think-nagasaki@think-nagasaki.or.jp](mailto:info-think-nagasaki@think-nagasaki.or.jp)

* * *

NTTドコモビジネス株式会社  
経営企画部　広報室  
[pr-cp@ntt.com](mailto:pr-cp@ntt.com)

**本件の掲載媒体**

日本農業新聞  
[https://www.agrinews.co.jp/news/prtimes/363233](https://www.agrinews.co.jp/news/prtimes/363233)

日本経済新聞社  
[https://www.nikkei.com/compass/content/PRTKDB000000008\_000115537/preview](https://www.nikkei.com/compass/content/PRTKDB000000008_000115537/preview)

NTTドコモビジネス株式会社  
[https://www.ntt.com/about-us/area-info/article/20260218.html](https://www.ntt.com/about-us/area-info/article/20260218.html)

Infoseekニュース  
[https://news.infoseek.co.jp/article/prtimes\_000000008\_000115537/](https://news.infoseek.co.jp/article/prtimes_000000008_000115537/)

ライブドアニュース  
[https://news.livedoor.com/pr\_article/detail/30609930/](https://news.livedoor.com/pr_article/detail/30609930/)

クラウド Watch  
[https://cloud.watch.impress.co.jp/docs/news/2086950.html](https://cloud.watch.impress.co.jp/docs/news/2086950.html)

BUSINESS NETWORK  
[https://businessnetwork.jp/article/33133/](https://businessnetwork.jp/article/33133/)

NEWSCAST  
[https://newscast.jp/smart/news/9060968](https://newscast.jp/smart/news/9060968)

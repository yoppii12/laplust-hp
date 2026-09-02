---
slug: "forecast_ai"
title: "短期変動予測AI"
date: 2025-10-31
category: other
categories: []
sortIndex: 27
cover: "https://storage.googleapis.com/studio-cms-assets/projects/NxqgdRVEa1/s-1280x720_b4e1ec17-08cb-43c3-b34b-a9154632256e.webp"
description: "概要AIを用いた投資商品の開発を行いたいというご要望にお応えするため、LAplustで保有するAIアルゴリズム(機械学習基盤LA++ ラプラ)を金融分野へと応用*した事例です。高度な数学的手法を用いて... "
ogImage: "https://storage.googleapis.com/studio-cms-assets/projects/NxqgdRVEa1/s-1280x720_b4e1ec17-08cb-43c3-b34b-a9154632256e.webp"
---

### 概要

AIを用いた投資商品の開発を行いたいというご要望にお応えするため、_LAplustで保有するAIアルゴリズム(機械学習基盤LA++ ラプラ)を金融分野へと応用_\*した事例です。

高度な数学的手法を用いてさまざまな市場を分析したり、さまざまな金融商品や投資戦略を分析したりすることをクオンツ投資といいます。世界のクオンツ運用の規模は、近年増加の一途をたどっているといわれています。世界のヘッジファンドをはじめとして、大手証券会社や国内外の大手銀行ではすでに活用されています。ある試算によると、クオンツを活用した投資運用はすでに米国市場の売買高の6割を占めており、機械的な売買が人間を差し置いて市場を席捲しているといわれています。

### 対象領域

**外国為替(複数通貨ペアに対応)**

### 開発例

**相場変動の短期予測API及び取引を自動化するためのソフトウェアをニーズに基づき開発（MT5という取引プラットフォームにて稼働）し納品しました。**

外国為替相場の時系列データをAIにより学習することで市場変動の短期予測を行う予測モデルの提供を行いました。

AIに与える学習目標は下記の2通りとしました。どのような目標を与えるかによって出力されるモデルはことなります。

**目標①：資産運用において利益を出すように取引できる**

**目標②：為替変動が上がるか、下がるかを精度良く予測できる**

AIのモデルには深層学習（1次元畳み込みニューラルネットワーク）をベースとしています。

### 短期変動予測におけるAIの特徴

開発を進める中で下記のことがわかりました。

-   心理的要因に一切影響をうけることなくあらゆる角度から可能性を探り、各局面における最善策をAIが絞りこむ
-   常に最新の情報をベースに自己学習を続け、過去・現在・未来を分析・予測する
-   実際の取引において高いパフォーマンスを発揮し市場環境の変化にも強い

**⇒現在から将来に渡り、最善策を模索しながら応用問題にも対応していくことができます。**

### 短期変動予測におけるAIの優位性

開発を進める中で下記のことがわかりました。

-   **試行回数**：ハイパーパラメータ\*を調整しながら数千通りの予測モデルを生成し高速で試行し、バックテストによる検証を行い、選抜するサイクルを繰り返し、人手によるのロジック構築の何万倍もの速さでモデルの構築・検証・選抜を行うことができました。
-   **客観的評価**：心理的要因に影響を受けず、与えれた目標(相場の上昇下降を先読みする/利益を上げる)に対してAIが淡々と予測モデルを構築します。膨大な過去データのパターン分析を組み合わせることで人が気づかないような市場の機微な変化も捉え相場の値動きを予想します。
-   **自己学習**：常に最新の情報をベースに自己学習を続け、市場の変化に対応していきます。

**ご参考**

**AIを用いた外国為替の短期変動予測モデルのイメージ**

![ヒトの脳の学習の仕組みをプログラムで表したイメージ図](https://storage.googleapis.com/studio-cms-assets/projects/NxqgdRVEa1/s-958x540_9b32c94b-7f68-4235-b634-352b4375d093.webp)

![ヒトが学習するときの情報処理の流れを示す図](https://storage.googleapis.com/studio-cms-assets/projects/NxqgdRVEa1/s-954x539_97517658-53dc-4bbe-a609-ff5692714180.webp)

![ヒトとAIの学習プロセスの共通点を比較した図](https://storage.googleapis.com/studio-cms-assets/projects/NxqgdRVEa1/s-954x536_811a1680-f5ad-4cf1-86ed-ca9e9e0fe55f.webp)

![AIが為替取引の学習から実運用まで進む流れを示したグラフ](https://storage.googleapis.com/studio-cms-assets/projects/NxqgdRVEa1/s-956x537_120672ba-1e27-40da-a3f2-48f20dbc53db.webp)

![AIが為替データを収集して学習に使用する過程のイメージ](https://storage.googleapis.com/studio-cms-assets/projects/NxqgdRVEa1/s-951x532_8e61ff5d-f10e-4827-a041-64baaaa67ba5.webp)

![集めたデータを学習用に整理しデータセット化する工程の図](https://storage.googleapis.com/studio-cms-assets/projects/NxqgdRVEa1/s-953x535_d96afff1-a612-414e-9e3b-634bad150b26.webp)

![AIが為替取引データを用いて学習する様子を表した図](https://storage.googleapis.com/studio-cms-assets/projects/NxqgdRVEa1/s-949x528_9865b7e9-25b5-48e7-9a9a-ee12358b1657.webp)

![学習したAIが為替データをもとに取引を実行する仕組みの図](https://storage.googleapis.com/studio-cms-assets/projects/NxqgdRVEa1/s-953x532_66a5fa13-d8f7-4ffd-aaf1-cd5672a68752.webp)

お問合せは[コチラ](https://laplust.com/contact/)

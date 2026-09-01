---
slug: "Akashio"
title: "長崎県五島市の実海水データをもとに有害赤潮プランクトン検出の機械学習を実施ー長崎モデルの実現を目指すー"
date: 2026-07-31
category: company
description: "株式会社LAplust（ラプラス）*1（本社：長崎県長崎市、代表取締役社長 田中 宏樹、以下、LAplust）は長崎県五島の実海水データをもとに赤潮プランクトン検出の機械学習を実施したことをお知らせし... "
ogImage: "https://storage.googleapis.com/studio-design-asset-files/projects/NxqgdRVEa1/s-870x453_v-fs_webp_4f8116ca-bd53-4bbc-a6ba-ed8f5de7a493.png"
---

株式会社LAplust（ラプラス）\*1（本社：長崎県長崎市、代表取締役社長 田中 宏樹、以下、LAplust）は長崎県五島の実海水データをもとに赤潮プランクトン検出の機械学習を実施したことをお知らせします。本取組は、長崎を代表する産業の一つである養殖業の持続可能性を後押しする一助となるべく、養殖事業者が「赤潮被害の不安から解放され、養殖事業者が安心して経営に集中できる環境をつくる」ことを目的としています。この取り組みを通して養殖事業者が「自分の生簀を、自分で守れる」という価値の実現を目指します。

検証について

目的  
・今回の機械学習の目的は、実際の海域で採取された海水サンプル（五島市水産業普及指導センターより提供）を教師データとして活用し、長崎県で被害が確認されている有害プランクトン5種（シャットネラ・アンティーカ、コクロディニウム属、シャットネラ・マリーナ、ヘテロシグマ・アカシオ、カレニア・ミキモトイ）を対象とした物体検出AIモデルの精度を確認すること。

背景  
・長崎県は海面漁業生産量で全国第2位を誇る有数の水産県である一方、近年は赤潮被害が深刻化しており、2023年には82万匹・約16億円、2024年には57万匹・約11億円の養殖魚被害が発生するなど、2年連続で過去最大級の被害を記録している。

![](https://storage.googleapis.com/studio-design-asset-files/projects/NxqgdRVEa1/s-807x411_v-fs_webp_277843cb-f3af-4c69-9200-e47347f1da34.png)

・現場では、検鏡作業の属人性（専門職員でなければ正確な種判別・計数が難しい）、監視体制の人的リソースの限界、報告・共有の手作業依存、海域ごとの環境条件の違いによる広域対応の難しさといった複数の課題が指摘されており、専門知識がなくても迅速・正確に赤潮リスクを把握できる仕組みが求められている。

![](https://storage.googleapis.com/studio-design-asset-files/projects/NxqgdRVEa1/s-793x381_v-fs_webp_208e8803-5522-43ed-af74-de0bb4eae513.png)

・LAplustは、これらの課題に対し、フロー式専用顕微鏡「LA-Scope」と実海水に対応した独自AIを組み合わせたソリューションの開発を進めている。本開発に関しては県内の複数の水産業関連機関から期待の声を寄せていただいている。

実証に用いたデータ  
五島市水産業普及指導センターより提供いただいた海水サンプルをもとに、以下の通りデータセットを構築した。  
・サンプル提供元：五島市水産業普及指導センター  
・撮像、アノテーション画像枚数：501枚

実証に用いたツール  
LA-Eye（エルエーアイ）\*2で構築した精密画像解析AIによる物体検出。

検証結果  
検証に用いるサンプル画像を約500枚程度用意し検証した。LA-Eyeを用いてサンプル画像に映ったプランクトン等を検出するための「有害種プランクトン検出AIモデル」を構築し人の目でも見落とす可能性があるプランクトン等を含む複数の画像に対して、適切に物体検出が行えるか検証した。

![](https://storage.googleapis.com/studio-design-asset-files/projects/NxqgdRVEa1/s-700x355_v-fs_webp_ec79c5df-4443-4aee-bf08-843cf4f7c936.png)

　　　　　　　サンプル画像に対してプランクトン等の物体検出を検証

![](https://storage.googleapis.com/studio-design-asset-files/projects/NxqgdRVEa1/s-520x358_webp_0dc9e0ab-f6ad-4b28-9619-dab5fb28471c.png)

　　　　　　　　学習時のLA-Eyeの画面（順調に学習が進捗している）

まとめと今後  
mAP(平均適合率)等の指標を評価し、実運用に向けての課題抽出が出来た。一部誤検出・未検出も確認されたため、実用化を目指し、改善に向けた具体的な方策を立て対応を進める見通し。LAplustが創業以来培ってきたAI技術を活用し「長崎モデル」の実現を目指しています。

![](https://storage.googleapis.com/studio-design-asset-files/projects/NxqgdRVEa1/s-822x333_v-fs_webp_f9facf63-58e5-4b08-a824-e64d98708c7d.png)

\*1  
株式会社LAplust(ラプラス)  
[https://laplust.com/](https://laplust.com/)[  
](https://laplust.com/)LAplustは製造業/農業分野に対して生産現場を根底から支えるAIを開発します。  
LAplustのミッションは「真の知能を実装し、社会活動を根底から支える」ことです。10年以上の動画像に特化したAIの開発経験とノウハウ、最新の画像AI関連の研究論文から学び得た本質的かつ実用的なAIアルゴリズムの目利きと利活用、複数のAIを組み合わせ維持/運用/更新をシームレスに実現する内製技術基盤(CTI:Core Tech Interface)を活用することで開発コスト・期間を最小化しお客様に最善の価値を「継続的に」提供します。

![](https://storage.googleapis.com/studio-design-asset-files/projects/NxqgdRVEa1/s-495x145_webp_a4355c06-b5c1-4a50-a58b-a0027a4a962a.jpg)

\*2  
LA-Eye(エルエーアイ)　([概要はコチラ](https://laplust.notion.site/LA-Eye-259c08e5f34c80a6affbf5e959f0367a))  
画像解析AI構築ソフトウェアLA-Eye(エルエーアイ, 2023年9月リリース)は利用者の目的に合わせた画像解析AIを構築できます。お客様の課題に合わせた操作画面のカスタマイズやお客様ブランド（ODM開発）での提供も可能です。画像解析AIの構築・現場導入において必要な業務の手間を大きく引き下げ、検証から運用までのトータルコストと時間を最小化します。

![](https://storage.googleapis.com/studio-design-asset-files/projects/NxqgdRVEa1/s-966x283_v-fs_webp_56b3829b-996a-434f-a6e0-e0808a7e69d6.jpg)

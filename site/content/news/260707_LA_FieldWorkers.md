---
slug: "la_fieldworkers"
title: "AI画像解析プラットフォーム「LA-Eye」を活用したマダニ種判別に関する研究論文が「長崎県生物学会誌」に掲載"
date: 2026-07-07
category: company
categories: [company]
sortIndex: 5
cover: "/assets/design/NxqgdRVEa1/s-1920x1005_v-frms_webp_c0121a4c-0923-4b9a-815e-47d4c3bc0556.png"
description: "株式会社LAplust（以下、LAplust）が開発・提供するAI画像解析プラットフォーム「LA-Eye」を活用した研究成果が、「長崎県生物学会誌 No.98（2026年発行）」に掲載されましたことを... "
ogImage: "/assets/design/NxqgdRVEa1/s-1920x1005_v-frms_webp_c0121a4c-0923-4b9a-815e-47d4c3bc0556.png"
---

株式会社LAplust（以下、LAplust）が開発・提供するAI画像解析プラットフォーム「LA-Eye」を活用した研究成果が、「長崎県生物学会誌 No.98（2026年発行）」に掲載されましたことをお知らせいたします。

本研究は、株式会社FieldWorkers（以下、FieldWorkers）が主導し、LAplustおよびカンボジア・パスツール研究所（Institut Pasteur du Cambodge）との連携により実施されたものです。

### 研究の概要

本研究では、長崎県および佐賀県で採集された本邦産マダニ（Acari: Ixodidae）を対象に、AI画像識別技術を用いた種判別の適用可能性を検証しました。日本産マダニ種に特化したAI識別ツールの開発・評価を行った研究としては、本論文が初の報告となります。

-   対象データセット：3属10種、2,614枚の画像
-   データ拡張処理により41,824枚（21クラス）まで拡張
-   拡張データセットで学習したモデルのうち、全ステージ・性別を対象としたモデルが最高水準（Weighted F1スコア 0.997）の精度を達成

本研究では、独自に構築した拡張データセットと、LA-Eye標準搭載の拡張機能によるデータセットとの比較検証を行い、種判別精度の向上を確認しました。また、未学習種（Out-of-distribution）に対するロバスト性についても評価が行われ、今後のモデル改良に向けた重要な知見が得られています。

※本研究は概念実証（Proof of Concept）段階の取り組みであり、著者らは論文中で「データ拡張処理を訓練・検証・テストデータへの分割前に行ったため、評価指標に一定の過大評価が含まれる可能性がある」ことを今後の検証課題として明記しています。今回得られたスコアは、この点を踏まえてさらなる検証を重ねていく性質のものです。

### 研究の意義

マダニは、日本紅斑熱・重症熱性血小板減少症候群（SFTS）・ライム病など、複数の媒介性疾患を引き起こす衛生動物学上重要な種です。正確な種同定は、これら疾病の予防・制御やベクターサーベイランスにおいて不可欠な基盤情報となります。

本研究は、AI画像解析技術が医療昆虫学分野における種判別支援ツールとして活用できる可能性を示すとともに、今後のユーザーインターフェース改善やデータセット拡充を通じて、マダニ媒介性疾患のリアルタイムな予防・制御に貢献することが期待されます。

### 体制について

本研究はFieldWorkers代表取締役CEO 星友矩氏を中心に、LAplust代表取締役CEO 田中宏樹、同社COO 原崎芳加が参画し、両社の医療昆虫学とAI開発の知見を融合する形で進められました。また、カンボジア・パスツール研究所のMatilin LE BEUX氏、Sébastien BOYER氏にもご協力いただいております。

LAplustは、LA-Eyeプラットフォームの提供を通じて本研究を技術面から支援し、FieldWorkersが有する医療昆虫学分野の専門知見と、LAplustのAI画像解析技術を組み合わせることで、社会的意義の大きい研究成果の創出に寄与できたことを大変嬉しく思っております。

なお、本研究にあたりましては、長崎県より一部研究資金のご支援をいただきました。この場を借りて厚く御礼申し上げます。

### 論文情報

星友矩・原崎芳加・田中宏樹・上北凌雲・Matilin LE BEUX・Sébastien BOYER・石垣えりな（2026） 「AI画像識別による長崎県産および佐賀県産の本邦マダニ（Acari: Ixodidae）の種判別：マダニ自動同定を目指して」 長崎県生物学会誌 No.98, pp.12-20.

* * *

LAplustは今後も、AI技術を通じて社会課題の解決に取り組む企業・研究機関の皆様のパートナーとして、技術提供と共同研究を推進してまいります。

* * *

### Summary (English)

A study using LAplust's AI image-analysis platform, LA-Eye, has been published in the Transactions of the Nagasaki Biological Society (No. 98, 2026). Led by FIELDWORKERS Co., Ltd. in collaboration with LAplust Corporation and the Institut Pasteur du Cambodge, the research evaluated AI-based species identification of Japanese hard ticks (Ixodidae) collected in Nagasaki and Saga Prefectures. Using a dataset of 2,614 images across 10 species, the augmented model covering all life stages and sexes achieved a weighted F1 score of 0.997. As the authors note, this is a proof-of-concept study, and since data augmentation was applied before the train/test split, the reported performance may be subject to some overestimation—an issue to be addressed in future work. The findings point to the potential of AI-assisted identification tools to support tick-borne disease surveillance and the training of medical entomologists.

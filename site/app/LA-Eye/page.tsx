import type { Metadata } from 'next';
import Link from 'next/link';
import LaEyeHeader from './LaEyeHeader';
import RequestForm from './RequestForm';
import FaqAccordion from './FaqAccordion';
import WorksCarousel from './WorksCarousel';
import styles from './laeye.module.css';

export const metadata: Metadata = {
  title: { absolute: 'LA-Eye/不良品判定' },
  description:
    'LA-Eye（エルエーアイ）とエッジコンピュータを連動。位置ずれしても、反射しても正しく判定。不良品の排出まで自動化し省人化もサポート。',
};

const ASSET = 'https://storage.googleapis.com/studio-design-asset-files/projects/NxqgdRVEa1';
const CMS = 'https://storage.googleapis.com/studio-cms-assets/projects/NxqgdRVEa1';

// 導入企業ロゴ（現行サイトはCMS由来のカルーセル）
const LOGOS = [
  `${CMS}/s-618x96_v-fs_webp_c3399d94-13a7-4666-a751-6df40c7304f2_small.webp`,
  `${CMS}/s-545x139_webp_a46592b5-c52f-4dec-bbf8-996be5284fca.webp`,
  `${CMS}/s-550x60_webp_14604eba-a108-4e68-b6d9-28072fed8fdb.webp`,
  `${CMS}/s-652x105_v-fs_webp_970bff2e-5c1a-4fad-8927-ac44fc982add_small.webp`,
  `${CMS}/s-455x105_webp_b44524c8-4081-4c41-be38-941b3bb2114d.webp`,
  `${CMS}/s-630x80_v-fs_webp_a949f8dc-efa9-4050-ab55-aad94d484175_small.webp`,
];

// 比較表（△= 一般的なビジョンセンサーの注意 / ×= 不可）
const COMPARISON = [
  {
    item: '判定方式',
    icon: 'triangle',
    generic: 'OK品との差分でNGを検出',
    laeye: '不良の特徴（キズ・汚れ・欠けなど）を直接学習',
  },
  {
    item: '整列の必要性',
    icon: 'cross',
    generic: '位置や向きのズレに弱い',
    laeye: '整列不要で向きや位置の違いに強い',
  },
  {
    item: '照明条件の影響',
    icon: 'cross',
    generic: '光の加減で誤判定が出やすい',
    laeye: '照明の影響を受けにくく昼でも夜でも誤判定なし',
  },
  {
    item: '装置構成',
    icon: 'triangle',
    generic: 'カメラ・照明・整列機構などが必要',
    laeye: 'カメラ＋AI解析だけで後付け設置も簡単',
  },
  {
    item: 'センサ選択',
    icon: 'cross',
    generic: '専用カメラが前提',
    laeye: '見たいものに合わせてWebカメラ／顕微鏡／レントゲンなど選択',
  },
  {
    item: '多品種対応',
    icon: 'triangle',
    generic: '機器設定や照明の調整に時間がかかる',
    laeye: '一度設定してしまえば柔軟に対応',
  },
] as const;

const ICONS = {
  triangle: `${ASSET}/s-256x256_webp_f91d2c53-7ee5-4dac-9e76-c1745b559182.webp`,
  cross: `${ASSET}/s-256x256_webp_23fc46e0-ba5a-4902-86e1-5eed9d3a9ef4.webp`,
};

const WORRIES = [
  {
    icon: `${ASSET}/s-128x128_webp_b47ec8b7-78a6-468b-8e41-2057a5aa8d5b.webp`,
    title: '微細なズレで誤判定が発生する',
    desc: '部品の向きや検査位置が少しでもズレるとOK品でもNG判定を受ける',
  },
  {
    icon: `${ASSET}/s-128x128_webp_97a2a594-42e4-47a8-90de-82c594ab7753.webp`,
    title: '光や水滴による検出精度の低下',
    desc: '光の当たり具合や水滴がついてると判定精度が落ちる',
  },
  {
    icon: `${ASSET}/s-256x256_webp_f0753f09-8742-4587-adba-fb28aaed2165.webp`,
    title: '品番ごとの設定変更が負担に',
    desc: '品番が変わるたびに照明や機器の再設定が必要',
  },
];

const FEATURES = [
  {
    no: 'Feature 01',
    title: '対象物の"特徴"に注目',
    desc: 'キズ・汚れ・欠け、または形の特徴を覚えし、人と同じように大まかな特徴を捉えて検出することが可能。定まった形だけでなく不定形な特徴も正確に検出。',
    image: `${ASSET}/s-1404x992_v-fms_webp_349efe5d-7291-47b5-8271-7231fbf91265_small.webp`,
    reverse: false,
  },
  {
    no: 'Feature 02',
    title: '少数データで高精度な検査',
    desc: '独自アルゴリズムにより、不良画像30～50枚程度の少数データで高精度AIを実現。必要に応じてデータを追加し、再学習も可能。',
    image: `${ASSET}/s-1404x992_v-fms_webp_2ac58df5-eb70-4890-961b-2383aa20d540_small.webp`,
    reverse: true,
  },
  {
    no: 'Feature 03',
    title: '専用レンズや専用カメラは不要',
    desc: '見たいモノに適した計測手法を選べる。既設のカメラ・顕微鏡・ファイバースコープ・X線写真etc.',
    image: `${ASSET}/s-530x364_webp_e70adeb6-6e37-44e3-9538-95da3567e4f9.webp`,
    reverse: false,
  },
];

const OTHER_FEATURES = [
  'ご要件に合わせて追加機能をセミカスタム可能。トレーサビリティの強化等にも対応。',
  '0.01～0.1秒程度と高速な検査が可能',
  'OK/NG判定はもちろん、数百通りの複雑な判別も可能',
];

const WORKS = [
  {
    title: 'レーザー検査との組み合わせ',
    image: `${ASSET}/s-587x391_webp_54f0343b-e9cb-4b77-820b-e58a24796d01.png`,
    desc: 'ウェーハ表面検査を目視から自動化へ',
  },
  {
    title: '巻きテープの欠点自動排出',
    image: `${ASSET}/s-1302x750_v-fms_webp_27af8d61-fd35-4519-b5e2-6d0bf3929d6b_small.webp`,
    desc: '誤検出が多発する検査の改善により省人化',
  },
  {
    title: 'ミニトマトの仕分け作業の省人化',
    image: `${ASSET}/s-528x316_webp_33d2837b-1c5d-4524-81a3-6cc1e0218fd4.webp`,
    desc: '1ラインあたりに必要な作業者を5名から3名に省人化',
  },
  {
    title: '製造作業の時間計測/実績収集',
    image: `${ASSET}/s-528x316_webp_bd34ecdc-42df-493b-b466-0dc0cbd661f3.webp`,
    desc: '現状把握に必要な設備と人の作業状況ごとの時間計測を自動化',
  },
  {
    title: '生息個体数のカウント自動化',
    image: `${ASSET}/s-528x316_webp_2ba52945-c50b-4943-aff4-f4ab6466b2b5.webp`,
    desc: '人手では限界があるカウント作業を自動化',
  },
  {
    title: '金属光沢/水滴による誤検出低減',
    image: `${ASSET}/s-913x727_v-fs_webp_cf702747-997f-4e82-bfc3-8e673d5f3e3a_small.webp`,
    desc: '従来のビジョンセンサでできなかった課題を克服',
  },
  {
    title: '砥石の交換時期を同定',
    image: `${ASSET}/s-587x391_webp_3184c52f-a877-4199-8297-a889d4248564.png`,
    desc: 'ランニングコストを大幅に低減',
  },
];

const FLOW = [
  { step: '1', title: 'ヒアリング', desc: 'お客様の現状と課題を丁寧にヒアリングさせていただきます。' },
  {
    step: '2',
    title: 'ご提案/お見積',
    desc: 'お客様の課題に対してどのようなアプローチが最適かご提案させていただきます。',
  },
  { step: '3', title: '適用検討', desc: '提案するアプローチが実現可能か確かめるためにお試し利用を行います。' },
  { step: '4', title: 'ご利用開始', desc: '課題解決に向けて自社専用のAIを構築しデータ解析が可能になります。' },
  { step: '5', title: '導入レクチャー', desc: '経験豊富な担当者が導入時の使い方などのレクチャーを行います。' },
];

const FAQ = [
  {
    q: 'お試しプランはありますか？',
    a: 'はい、ございます。「このツールで本当に課題解決できるか心配」、「うまくツールが扱えるかわからない」といったご要望にお応えしお試しプランをご用意しております。また、事前のヒアリングで専門の担当者が実現可能性を踏まえてお伝えすることも可能です。',
  },
  {
    q: 'サービスの価格はどのようになっていますか？',
    a: 'サービスの価格はソフトウェア本体の初回導入費用とライセンス費用をご提供料金とさせていただいております。具体的な価格については、お問い合わせください。無料の資料ご請求で参考価格をご提示させていただいております。',
  },
  {
    q: '注文から納品までに要する期間はどれくらいですか？',
    a: '１，２週間でお客様のお手元でご利用いただけるようご提供いたします。',
  },
  {
    q: 'サポートはありますか？',
    a: '納品後も問題や不具合、または機能改善のご要望があれば課題解決に向けた支援を行います。',
  },
  {
    q: '支払い方法はどのようになりますか？',
    a: '納品後ご請求書をお送りしますので、指定のお振込み先へご入金いただきます。',
  },
];

const RECOMMENDS = [
  'これまでビジョンセンサーを導入してみたが期待した結果がまだ得られていない方',
  '現在導入済みのビジョンセンサーでなぜうまくいかないのかを知りたい方',
  '専門的な知識や人材はいないが省人化を実現したい方',
];

const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.4445363863256!2d129.8695812762518!3d32.75393718516408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x351553e897919e91%3A0xae9f507a6b354b25!2z44CSODUwLTAwNTEg6ZW35bSO55yM6ZW35bSO5biC6KW_5Z2C55S677yV4oiS77yR77yW!5e0!3m2!1sja!2sjp!4v1737593371714!5m2!1sja!2sjp';

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 20h14v-2H5v2zM12 3v11m0 0l-4.5-4.5M12 14l4.5-4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 12.5l5 5L20 6.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function LaEyePage() {
  return (
    <main className={styles.page}>
      <LaEyeHeader />

      {/* ヒーロー */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <p className={styles.heroBadge}>ズレても、反射しても、正しく判定</p>
            <h1 className={styles.heroTitle}>熟練の“目”をAIに</h1>
            <p className={styles.heroRuby}>
              <span>エルエー</span>
              <span>・</span>
              <span>アイ</span>
            </p>
            <p className={styles.heroName}>LA-Eye/不良判別</p>
            <p className={styles.heroDesc}>
              誰でも使えるAI画像解析で、検査や判別をかんたんに。
              <br />
              工場の検査を標準化・省人化します。
            </p>
            <img
              className={styles.heroProduct}
              src={`${ASSET}/s-2167x1523_v-frms_webp_f35e9dd7-ffdd-489b-9fde-bc7b951bb4ab_small.webp`}
              alt="LA-Eye"
            />
          </div>
          <div className={styles.heroForm}>
            <RequestForm
              lead={
                <>
                  入力完了後、別途資料ダウンロードの
                  <br />
                  メールをお送りします。
                </>
              }
            />
          </div>
        </div>
      </section>

      {/* 導入企業ロゴ */}
      <section className={styles.logos}>
        <div className={styles.logosTrack}>
          {[...LOGOS, ...LOGOS].map((src, i) => (
            <img key={i} src={src} alt="" aria-hidden={i >= LOGOS.length} />
          ))}
        </div>
      </section>

      {/* LA-Eyeとは */}
      <section id="about" className={styles.about}>
        <p className={styles.aboutName}>
          <span className={styles.aboutEnWrap}>
            <span className={styles.aboutRuby}>
              <span>エルエー</span>
              <span>・</span>
              <span>アイ</span>
            </span>
            <span className={styles.aboutEn}>LA-Eye</span>
          </span>
          <span className={styles.aboutWa}>は</span>
        </p>
        <h2 className={styles.aboutHeadline}>
          “現場の揺らぎ”を前提に設計された画像検査AI"<code>です。</code>
        </h2>
        <p className={styles.aboutSub}>製品の整列/位置合わせや照明の整備は不要です。</p>
        <video
          className={styles.aboutVideo}
          src={`${ASSET}/s-1920x1080_49ec0a8f-0a65-4643-b21d-f6378d99683e.mp4#t=0.01`}
          autoPlay
          muted
          controls
          playsInline
        />

        {/*
          現行サイトのDOMに存在するが全ブレークポイントで display:none の旧コンテンツ。
          忠実な再現のため hidden で保持している。
        */}
        <div hidden aria-hidden="true">
          <div>
            <p>LAplust Eye</p>
            <p>詳しく見る</p>
          </div>
          <p>LAplust Eyeが提供する専用AI構築ツール</p>
          <p>
            <span>LA-Eye（エルエー・アイ）</span>
            <span>は、</span>
          </p>
          <p>
            目視判断を行うために必要な機能を手軽に導入でき
            <br />
            自社専用の画像解析AIを構築できます
          </p>
          <p>見分ける</p>
          <p>数える</p>
          <p>測る</p>
          <p>LA-Eye</p>
          <img src={`${ASSET}/s-800x760_v-fs_webp_fdf9caaf-49cb-40aa-a71f-aca7b538e960.png`} alt="LA-Eye" />
        </div>
      </section>

      {/* Comparison 比較表 */}
      <section id="comparison" className={styles.comparison}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitleEn}>Comparison</h2>
          <p className={styles.sectionTitleJa}>LA-Eyeと他製品の比較</p>
          <div className={styles.compScroll}>
            <div className={styles.compTable}>
              <div className={styles.compHeadRow}>
                <div className={styles.compHeadItem}>
                  <span className={styles.srOnly}>比較項目</span>
                </div>
                <div className={styles.compHeadGeneric}>一般的なビジョンセンサー</div>
                <div className={styles.compHeadLaeye}>LA-Eye</div>
              </div>
              {COMPARISON.map((row, i) => (
                <div key={row.item} className={styles.compRow}>
                  <div className={styles.compItem}>{row.item}</div>
                  <div className={`${styles.compGeneric} ${i % 2 === 1 ? styles.compGenericAlt : ''}`}>
                    <img src={ICONS[row.icon]} alt={row.icon === 'triangle' ? '△' : '×'} />
                    <p>{row.generic}</p>
                  </div>
                  <div className={styles.compLaeye}>
                    <span className={styles.compDouble} aria-label="◎">
                      <span />
                    </span>
                    <p>{row.laeye}</p>
                  </div>
                </div>
              ))}
              <div className={styles.compLaeyeFrame} aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* こんな悩みはありませんか？ */}
      <section className={styles.worries}>
        <h2 className={styles.worriesTitle}>こんな悩みはありませんか？</h2>
        <div className={styles.worriesGrid}>
          {WORRIES.map((w) => (
            <div key={w.title} className={styles.worriesItem}>
              <img src={w.icon} alt="" />
              <p className={styles.worriesItemTitle}>{w.title}</p>
              <p className={styles.worriesItemDesc}>{w.desc}</p>
            </div>
          ))}
        </div>
        <div className={styles.worriesNotch} aria-hidden="true" />
      </section>

      {/* Features */}
      <section id="features" className={styles.features}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitleEn}>Features</h2>
          <p className={styles.sectionTitleJa}>LA-Eyeの特長</p>
          <div className={styles.featureList}>
            {FEATURES.map((f) => (
              <div key={f.no} className={`${styles.featureCard} ${f.reverse ? styles.featureCardReverse : ''}`}>
                <img className={styles.featureImage} src={f.image} alt={f.title} />
                <div className={styles.featureText}>
                  <p className={styles.featureNo}>{f.no}</p>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureDesc}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/*
            現行サイトのDOMに存在するが全ブレークポイントで display:none の旧Featuresセット。
            忠実な再現のため hidden で保持している。
          */}
          <div hidden aria-hidden="true">
            <p>Features</p>
            <p>LA-Eyeの特長</p>
            <div>
              <p>LAplust Eye</p>
              <p>詳しく見る</p>
            </div>
            <div>
              <p>Feature 01</p>
              <p>“最短2週間”で予算を抑えた検証/導入</p>
              <p>物体検出エンジンを1から実装する場合と比較して1/10ほどのコストで検証・導入することができ事業や検証を力強くサポート。</p>
            </div>
            <div>
              <p>Feature 02</p>
              <p>高い検出精度の実現</p>
              <p>独自のアルゴリズムにより圧倒的な高精度の学習モデルを構築可能。お客様は特別な開発や実装なし。</p>
            </div>
            <div>
              <p>Feature 03</p>
              <p>少量データでも実用的</p>
              <p>大量のデータが準備できなくともOK。今手元にある数十枚のデータ活用でも人でも見つけにくい対象を検出し実用可能。</p>
            </div>
          </div>

          {/* その他の機能・特徴 */}
          <h3 className={styles.otherTitle}>その他の機能・特徴</h3>
          <div className={styles.otherGrid}>
            {OTHER_FEATURES.map((t) => (
              <div key={t} className={styles.otherCard}>
                <span className={styles.otherCheck}>
                  <CheckIcon />
                </span>
                <p>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 資料DL訴求バンド */}
      <section className={styles.ctaBand}>
        <p className={styles.ctaLead}>なぜ『できなかった』が『できる』に変わるのか、</p>
        <p className={styles.ctaTitle}>その特徴と理由をまとめた資料がこちら</p>
        <a href="/LA-Eye#request" className={styles.ctaButton}>
          <DownloadIcon />
          <p>サービス資料をダウンロードする</p>
        </a>
        <Link href="/LA-Eye/contact" className={styles.ctaContact}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M3 7l9 6 9-6" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
          <p>お問い合わせはこちら</p>
        </Link>
      </section>

      {/* Works 活用方法の一例 */}
      <section id="works" className={styles.works}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitleEn}>Works</h2>
          <p className={styles.sectionTitleJa}>活用方法の一例</p>
        </div>
        <WorksCarousel items={WORKS} />
        <div className={styles.worksMore}>
          <a href="https://laplust.notion.site/la-eye-example" target="_blank" rel="noopener">
            <p>事例を詳しくみる</p>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M14 5h5v5M19 5l-8 8M9 5H5v14h14v-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* Flow ご利用の流れ */}
      <section id="flow" className={styles.flow}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitleEn}>Flow</h2>
          <p className={styles.sectionTitleJa}>ご利用の流れ</p>
          <div className={styles.flowList}>
            {FLOW.map((f, i) => (
              <div key={f.step}>
                <div className={styles.flowCard}>
                  <div className={styles.flowStep}>
                    <p>STEP</p>
                    <p className={styles.flowNum}>{f.step}</p>
                  </div>
                  <div className={styles.flowBody}>
                    <h3>{f.title}</h3>
                    <p>{f.desc}</p>
                  </div>
                </div>
                {i < FLOW.length - 1 && (
                  <img
                    className={styles.flowArrow}
                    src={`${ASSET}/s-554x194_webp_bb0e00f3-cdb1-4697-a530-8cc9645581a6.webp`}
                    alt=""
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className={styles.faq}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitleEn}>FAQ</h2>
          <p className={styles.sectionTitleJa}>よくあるご質問</p>
          <FaqAccordion items={FAQ} />
        </div>
      </section>

      {/* Document download 資料請求 */}
      <section id="request" className={styles.download}>
        <h2 className={`${styles.sectionTitleEn} ${styles.downloadTitleEn}`}>Document downlord</h2>
        <p className={styles.downloadTitleJa}>資料ダウンロード</p>
        <div className={styles.downloadInner}>
          <div className={styles.downloadCard}>
            <p className={styles.downloadLead}>
              LA-Eyeのサービス資料を無料でダウンロードいただけます。
              <br />
              外観検査による省人化における
              <br />
              <code>「できなかった」を「できる」に</code>変えるためにぜひご確認ください。
            </p>
            <img
              src={`${ASSET}/s-1024x576_v-fs_webp_7074ee59-de98-4865-8532-03d48975bc08_small.webp`}
              alt="LA-Eye サービス資料"
            />
            <p className={styles.downloadRecTitle}>こんな方におすすめです</p>
            <ul className={styles.downloadRecList}>
              {RECOMMENDS.map((r) => (
                <li key={r}>
                  <span className={styles.downloadDone}>
                    <CheckIcon />
                  </span>
                  <p>{r}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.downloadForm}>
            <RequestForm lead="下記フォームへ必要事項をご記入の上送信ください" />
          </div>
        </div>
      </section>

      {/* 会社情報 */}
      <section className={styles.company}>
        <div className={styles.companyInner}>
          <div className={styles.companyInfo}>
            <h2>会社情報</h2>
            <div>
              <p>株式会社LAplust（ラプラス / LAplust Inc.）</p>
              <p>
                〒850-0051
                <br />
                長崎県長崎市西坂町5-16
              </p>
            </div>
            <Link href="/" className={styles.companyLink}>
              <p>詳しくはこちら</p>
              <img src="https://storage.googleapis.com/studio-design-asset-files/projects/d7Wl5jmDOV/s-48x54_webp_6bae1fe3-6326-4f0a-bf45-dffe170650dd.webp" alt="" />
            </Link>
          </div>
          <div className={styles.companyMap}>
            <iframe
              src={MAP_SRC}
              title="株式会社LAplust 所在地"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* 上へ戻る */}
      <div className={styles.toTop}>
        <a href="/LA-Eye" aria-label="ページ上部へ戻る">
          <span />
          <span />
        </a>
      </div>

      {/* LA-Eye専用フッター */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerFollow}>
            <p>Follow Us</p>
            <a
              href="https://www.youtube.com/channel/UCSLw0BSwGopky5LRppC2XUw"
              target="_blank"
              rel="noopener"
              aria-label="YouTube"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23 7.6a3 3 0 0 0-2.1-2.2C19 5 12 5 12 5s-7 0-8.9.5A3 3 0 0 0 1 7.6 31 31 0 0 0 .6 12 31 31 0 0 0 1 16.4a3 3 0 0 0 2.1 2.1C5 19 12 19 12 19s7 0 8.9-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23.4 12 31 31 0 0 0 23 7.6zM9.8 15.3V8.7l6 3.3z" />
              </svg>
            </a>
            <a href="https://www.facebook.com/laplust/" target="_blank" rel="noopener" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4h-3V12h3V9.4c0-3 1.8-4.7 4.6-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.3l-.5 3.5h-2.8v8.4A12 12 0 0 0 24 12z" />
              </svg>
            </a>
          </div>
          <div className={styles.footerDivider} />
          <nav className={styles.footerNav}>
            <a href="/LA-Eye#solution">機能</a>
            <a href="/LA-Eye#price">料金</a>
            <a href="/LA-Eye#faq">よくある質問</a>
            <a href="/LA-Eye#results">導入事例</a>
            <a href="/LA-Eye#contact">お問い合わせ</a>
          </nav>
          <div className={styles.footerDivider} />
          <div className={styles.footerBottom}>
            <img
              src={`${ASSET}/s-2400x634_v-frms_webp_36d998a3-e883-419e-aa30-f697d086ba12_small.webp`}
              alt="LAplust"
            />
            <Link href="/privacy_policy">Privacy Policy</Link>
            <Link href="/site_policy">Site Policy</Link>
          </div>
          <p className={styles.footerCopyright}>© 2025 Laplust Corp. All rights reserved. LA-Eye.</p>
        </div>
      </footer>
    </main>
  );
}

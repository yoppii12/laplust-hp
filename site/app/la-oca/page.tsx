import type { Metadata } from 'next';
import Link from 'next/link';
import { Open_Sans, Lato } from 'next/font/google';
import { LaOcaHeader, LaOcaFaq, LaOcaTrialForm } from './LaOcaClient';
import styles from './laoca.module.css';

// 現行LPの実測フォント（Open Sans / Lato）。このページ配下のみで使用する
const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-oca-en',
  display: 'swap',
});

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-oca-lato',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    absolute: '工数９９％減「LAplustワンクリックアノテーション」by LAplust',
  },
  description:
    '特許出願済みの独自技術で画像アノテーション工数を99％削減。画像アノテーションに特化したクラウドツール「LAplustワンクリックアノテーション」。初期費用ゼロ、簡単操作ですぐに始められます。',
};

const ASSET = 'https://storage.googleapis.com/studio-design-asset-files/projects';

/* ---------- 小さなSVGアイコン ---------- */
function ArrowRightIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </svg>
  );
}

function PlayDownIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 18 4 6h16z" />
    </svg>
  );
}

function TurnDownIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 5h10v9h3l-4.5 6L8 14h3V8H4z" />
    </svg>
  );
}

function TurnUpIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 19h10v-9h3l-4.5-6L8 10h3v6H4z" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
    </svg>
  );
}

/* ---------- セクション見出し（背面に英字ラベル） ---------- */
function SectionHead({
  label,
  title,
  lead,
}: {
  label: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
}) {
  return (
    <div className={styles.sectionHead}>
      <p className={styles.sectionLabel} aria-hidden="true">
        {label}
      </p>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {lead && <p className={styles.sectionLead}>{lead}</p>}
    </div>
  );
}

/* ---------- モバイル専用 LA-Eye プロモブロック（現行サイトのモバイル変形） ---------- */
function LaEyePromo() {
  return (
    <div className={styles.laEyePromo}>
      <div className={styles.laEyeCard}>
        <p className={styles.laEyeCardName}>LAplust Eye</p>
        <p className={styles.laEyeCardMore}>詳しく見る</p>
      </div>
      <p className={styles.laEyeLead}>
        LAplust Eyeが提供する専用AI構築ツール<strong>LA-Eye（エルエー・アイ）</strong>は、
        <br />
        目視判断を行うために必要な機能を手軽に導入でき
        <br />
        自社専用の画像解析AIを構築できます
      </p>
      <div className={styles.laEyeFeatures}>
        <div className={styles.laEyeFeature}>
          <div className={styles.laEyeFeatureImg}>LA-Eye</div>
          <p>見分ける</p>
        </div>
        <div className={styles.laEyeFeature}>
          <div className={styles.laEyeFeatureImg}>LA-Eye</div>
          <p>数える</p>
        </div>
        <div className={styles.laEyeFeature}>
          <div className={styles.laEyeFeatureImg}>LA-Eye</div>
          <p>測る</p>
        </div>
      </div>
    </div>
  );
}

/* ---------- 比較表（現行実測: 列単位のカード構成・◎○はCSS円） ---------- */
type CompMark = 'double' | 'single' | '✕' | '△' | 'ー';
type CompCell = {
  mark: CompMark;
  main?: React.ReactNode;
  note?: string;
  small?: boolean; // 説明系の長文セル（実測15px）
};

const COMP_LABELS = ['作業時間', 'システムコスト', '使いやすさ', '品質', '工数'];

const COMP_LAPLUST: CompCell[] = [
  {
    mark: 'double',
    main: (
      <>
        <em>1</em>秒<em>/</em>件
      </>
    ),
  },
  {
    mark: 'single',
    main: (
      <>
        <em>9,980</em>円
      </>
    ),
    note: '（クラウド型で安価）',
  },
  {
    mark: 'double',
    main: (
      <>
        Webで登録するだけで
        <br />
        利用開始
      </>
    ),
  },
  { mark: 'double', main: '一律高品質' },
  {
    mark: 'double',
    main: (
      <>
        <em>99%</em>削減
      </>
    ),
  },
];

const COMP_MANUAL: CompCell[] = [
  { mark: '△', main: '100秒/件' },
  { mark: 'double', main: '0円', note: '※人件費が別途発生' },
  {
    mark: '✕',
    main: (
      <>
        細かなすり合わせや
        <br />
        要件定義が必須
      </>
    ),
    small: true,
  },
  { mark: '△', main: '作業者により変動', small: true },
  { mark: 'ー' },
];

const COMP_OUTSOURCE: CompCell[] = [
  { mark: '✕', main: '20‐30日', note: '（ダブルチェック含む）' },
  { mark: '✕', main: '1,500,000円', note: '（専用環境必要）' },
  {
    mark: '△',
    main: (
      <>
        要見積もり、専門環境の
        <br />
        準備に1‐2ヶ月
      </>
    ),
    small: true,
  },
  { mark: 'single', main: '上がるが限定的', small: true },
  { mark: '△', main: '下がるがダブルチェック必須', small: true },
];

function Mark({ mark }: { mark: CompMark }) {
  if (mark === 'double') return <span className={styles.markDouble} role="img" aria-label="二重丸" />;
  if (mark === 'single') return <span className={styles.markSingle} role="img" aria-label="丸" />;
  if (mark === 'ー') return <span className={styles.markDash}>ー</span>;
  return <span className={styles.markText}>{mark}</span>;
}

function CompCellView({ cell }: { cell: CompCell }) {
  return (
    <div className={styles.compCell}>
      <Mark mark={cell.mark} />
      {cell.main && (
        <p className={cell.small ? styles.compMainSmall : styles.compMain}>{cell.main}</p>
      )}
      {cell.note && <p className={styles.compNote}>{cell.note}</p>}
    </div>
  );
}

/* ---------- 導入事例（デスクトップ表示カード） ---------- */
const RESULT_CARDS = [
  {
    title: 'スタッフごとの品質ムラ',
    img: `${ASSET}/65qmDGwvOV/s-900x591_v-fs_webp_75f4007a-8d40-4736-a012-f671ed4be3ff_small.webp`,
    badges: [
      { text: '時間短縮：97.2％', dir: 'down' },
      { text: '品質向上：88％', dir: 'up' },
    ],
    effect:
      'スタッフごとにばらつきがあった診断基準も統一され、画像修正や再確認の手間が激減。診療フローの停滞が解消され、スムーズな運用が可能になりました。',
  },
  {
    title: '作業時間の増加と納期遅延',
    img: `${ASSET}/65qmDGwvOV/s-900x599_v-fs_webp_309b82bf-08f0-4e59-ac81-cab6f284f2b9_small.webp`,
    badges: [
      { text: '時間短縮：98.7％', dir: 'down' },
      { text: 'コスト削減：80%', dir: 'down' },
    ],
    effect:
      '作業時間の短縮と人員削減により、アノテーションにかかるコストを従来比80％削減。浮いたリソースを他の業務に充てることで、全体の業務効率が向上しました。',
  },
  {
    title: '人手作業による高コストと負担増',
    img: `${ASSET}/65qmDGwvOV/s-901x602_v-fs_webp_f252e70a-1e4c-4651-8a62-c6677f5ac337_small.webp`,
    badges: [
      { text: '時間短縮：97％', dir: 'down' },
      { text: 'コスト削減：90%', dir: 'down' },
    ],
    effect:
      'ワンクリックアノテーションを導入したことで、作業時間は従来の約30分の1に短縮、外注コストも90％削減できました。さらにラベル付けの精度が統一されたことで、社内の業務効率やパフォーマンスが大幅に向上しました',
  },
];

/* ---------- 導入事例（モバイル詳細版：現行サイトのモバイル変形） ---------- */
const RESULT_DETAILS = [
  {
    category: '医療・ヘルスケア',
    company: '株式会社A',
    time: '97.2％',
    cost: '80%',
    problem:
      '現場では、大量のデータに対して手作業でアノテーションを行っており、1件あたりの作業に時間がかかっていました。その結果、プロジェクト全体の納期が遅れがちで、品質のバラつきや人件費の増加も課題となっていました。',
    effect:
      '作業時間の短縮と人員削減により、アノテーションにかかるコストを従来比80％削減。浮いたリソースを他の業務に充てることで、全体の業務効率が向上しました。',
  },
  {
    category: '製造・工業',
    company: '株式会社B',
    time: '98.7％',
    cost: '75%',
    problem:
      'アノテーション作業を行うスタッフごとに基準のばらつきがあり、品質のムラや再提出が頻発しており、プロジェクト全体の進行が遅れることが課題でした。',
    effect:
      'ワンクリックアノテーションを導入した結果、社内スタッフのみで即日対応が可能となり、短納期案件の受注率が2倍に増加しました。また、外注費を大幅に削減できたことで、全体の利益率も向上しました。',
  },
  {
    category: '研究・開発',
    company: '株式会社C',
    time: '97％',
    cost: '90%',
    problem:
      '従来、膨大な画像データに対して人の手でラベル付けや確認作業を行っており、1件あたりの処理に非常に多くの時間がかかっておりました。そのため、繁忙期には残業や外注が増え、コストと工数の両面で大きな負担となっていました。',
    effect:
      'ワンクリックアノテーションを導入したことで、作業時間は従来の約30分の1に短縮されました。外注コストも90％削減でき、さらにラベル付けの精度が統一されたことで、社内の業務効率やパフォーマンスが大幅に向上しました。',
  },
];

/* ---------- 利用者の声 ---------- */
const TESTIMONIALS = [
  {
    tags: ['医療・ヘルスケア', '医療分野の画像解析'],
    title: 'アノテーションがワンクリックで完了',
    body: (
      <p>
        これまで手作業で時間と手間がかかっていた画像アノテーションが、
        <code>ワンクリックで驚くほど簡単になりました</code>
        。診断までのリードタイムが大幅に短縮され、スタッフの負担軽減にもつながっています。患者様への対応時間が増え、診療の質も向上しました。操作も直感的で、導入後すぐに全員が使いこなせています。
      </p>
    ),
  },
  {
    tags: ['農業・一次産業', '作物生育モニタリング'],
    title: 'スムーズに導入、現場でも即定着',
    body: (
      <p>
        最初は導入に不安もありましたが、想像以上にスムーズに導入でき、
        <code>現場からも「もっと早く使いたかった」という声が上がっています</code>
        。サポート体制も整っていたので、迷うことなく現場に定着しました。
      </p>
    ),
  },
  {
    tags: ['製造・生産', '品質検査'],
    title: '外注不要で、データ整備が社内完結',
    body: (
      <p>
        従来は外注していたアノテーション作業を、ワンクリック操作で自社完結できるようになりました。アノテーションに費やしていた作業時間が大幅に短縮され、データ整備にかかる時間とコストが削減。
        <code>品質検査の正確性も向上しました</code>
        。現場スタッフも直感的に操作でき、スムーズに活用されています。
      </p>
    ),
  },
  {
    tags: ['物流・運輸', 'ピッキング・仕分け'],
    title: '単純作業から解放され、生産性が向上',
    body: (
      <>
        <p>
          これまで人手に頼っていた単純作業を効率化でき、
          <code>スタッフはより付加価値の高い業務に集中</code>
          できるようになりました。
        </p>
        <p>
          現場からも「もっと早く導入すればよかった」との声があり、作業スピードや正確性が大きく向上しています。
        </p>
      </>
    ),
  },
];

export default function LaOcaPage() {
  return (
    <div className={`${styles.page} ${openSans.variable} ${lato.variable}`} id="top">
      <LaOcaHeader />
      <main>
        {/* ============ ヒーロー ============ */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
              <div className={styles.heroText}>
                <p className={styles.heroSub}>特許出願済みの独自技術で</p>
                <p className={styles.heroTitle}>
                  画像アノテーション
                  <br />
                  工数を
                  <strong>
                    <em>99</em>
                    <span className={styles.heroPct}>％</span>削減
                  </strong>
                </p>
                <div className={styles.heroBadges}>
                  <img
                    src={`${ASSET}/NxqgdRVEa1/s-300x300_webp_18b75fe3-ad8c-45fa-8b0f-4b43f82c2cf2.webp`}
                    alt="工数削減"
                  />
                  <img
                    src={`${ASSET}/NxqgdRVEa1/s-300x300_webp_44c120e4-0356-4835-84af-a5b8a94bff72.webp`}
                    alt="AI精度向上"
                  />
                  <img
                    src={`${ASSET}/NxqgdRVEa1/s-300x300_webp_df103650-2f89-4901-91fd-7d5489722379.webp`}
                    alt="使いやすい・即日利用"
                  />
                </div>
                <a href="/la-oca#contact" className={styles.heroCta}>
                  <p>今すぐ無料で始める</p>
                  <ArrowRightIcon />
                </a>
              </div>
              <div className={styles.heroVideos}>
                <div className={styles.heroVideoBox}>
                  <video
                    src={`${ASSET}/NxqgdRVEa1/s-1920x1080_3d503b34-7a9b-464f-b179-638993782156.mp4#t=0.01`}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                  <p className={styles.videoLabel}>Before</p>
                </div>
                <div className={styles.heroVideoBox}>
                  <video
                    src={`${ASSET}/NxqgdRVEa1/s-1920x1080_deec6234-8bcd-410f-ae08-32ac8ca8af9d.mp4#t=0.01`}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                  <p className={styles.videoLabel}>After</p>
                </div>
              </div>
          </div>
        </section>

        {/* ============ 紹介動画（LA-Eye） ============ */}
        <section id="about" className={styles.aboutVideoWrap}>
          <div className={styles.container}>
            <video
              className={styles.mainVideo}
              src={`${ASSET}/NxqgdRVEa1/s-1920x1080_170574dd-7d9a-42c5-b72e-abd60b427eac.mp4#t=0.01`}
              autoPlay
              muted
              controls
              playsInline
            />
            <LaEyePromo />
          </div>
        </section>

        {/* ============ PROBLEM ============ */}
        <section className={styles.problem}>
          <div className={styles.container}>
            <SectionHead
              label="PROBLEM"
              title={
                <>
                  画像アノテーションにおける
                  <br />
                  課題と導入効果
                </>
              }
            />
            <div className={styles.problemCards}>
              <div className={styles.problemCard}>
                <div className={styles.problemIconCircle}>
                  <img
                    src={`${ASSET}/NxqgdRVEa1/s-64x64_webp_2c7e804e-e286-466e-9648-a92fddce8ad2.webp`}
                    alt=""
                  />
                </div>
                <h3>多大な工数</h3>
                <p>
                  AI開発の90％以上が教師データ作成に費やされ、1点のアノテーションに約100秒もかかってしまいます
                </p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIconCircle}>
                  <img
                    src={`${ASSET}/NxqgdRVEa1/s-64x64_webp_ee28a452-4d97-46dc-b6dd-bde2abde4aa2.webp`}
                    alt=""
                  />
                </div>
                <h3>品質のばらつき</h3>
                <p>
                  手作業によるアノテーションは作業者によって品質にばらつきが生じ、AIの精度向上の妨げとなります
                </p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIconCircle}>
                  <img
                    src={`${ASSET}/NxqgdRVEa1/s-64x64_webp_b26235f4-fc7b-45fe-8a21-6f9e41f4fc26.webp`}
                    alt=""
                  />
                </div>
                <h3>専門人材の不足</h3>
                <p>アノテーション作業は単純作業に見えて慣れや専門性を要する作業です</p>
              </div>
            </div>

            <div className={styles.downArrows} aria-hidden="true">
              <PlayDownIcon />
              <PlayDownIcon />
              <PlayDownIcon />
            </div>

            <div className={styles.effectCard}>
              <div className={styles.effectImg}>
                <img
                  src={`${ASSET}/NxqgdRVEa1/s-1142x839_v-fs_webp_f5487dae-5b23-49b6-bdb0-6cc56672eb91_small.webp`}
                  alt="一般的にかかる工数100秒/1データがワンクリックアノテーションで1秒/1データ、99%削減"
                />
              </div>
              <div className={styles.effectBody}>
                <h3>作業時間を劇的に短縮</h3>
                <p>
                  従来100秒以上かかっていたアノテーションが、<code>ワンクリックで1秒</code>で完了。
                </p>
                <p>
                  処理枚数が大幅に増え、追加の残業やシフト調整も不要になり、チームの生産性が向上します。
                </p>
              </div>
            </div>

            <div className={`${styles.effectCard} ${styles.reverse}`}>
              <div className={styles.effectImg}>
                <img
                  src={`${ASSET}/NxqgdRVEa1/s-1327x814_v-fms_webp_ce449e4c-5456-466f-a616-6716e625bf88_small.webp`}
                  alt="高品質データはデータ量1/3で実用精度に到達するグラフ"
                />
              </div>
              <div className={styles.effectBody}>
                <h3>データ量1/3で、安定した実用精度を実現</h3>
                <p>作業者のスキル差で品質がばらつく課題を解消。</p>
                <p>
                  誰が作業しても同一基準で処理でき、高品質なデータを安定して生成できるため、
                  <code>AIモデルの精度が大きく向上</code>します。
                </p>
              </div>
            </div>

            <div className={styles.effectCard}>
              <div className={styles.effectImg}>
                <img
                  src={`${ASSET}/NxqgdRVEa1/s-1142x842_v-fs_webp_d47dba1e-3818-401f-8071-1da640284423_small.webp`}
                  alt="一般的にかかる外注費150万円/月が3,980円/月〜、99%以上削減"
                />
              </div>
              <div className={styles.effectBody}>
                <h3>人件費・外注費コストを大幅に削減</h3>
                <p>
                  自動化により、熟練スタッフや外注への依存を減らし、人件費や外注費といった
                  <code>コストを大幅削減。</code>
                  これまで固定的にかかっていたコストを抑えることで、運用の負担が軽減され、経営面でも安定。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ SOLUTION ============ */}
        <section id="solution" className={styles.solution}>
          <div className={styles.container}>
            <div className={styles.solutionInner}>
              <div className={styles.solutionImg}>
                <img
                  src={`${ASSET}/NxqgdRVEa1/s-2172x1159_v-frms_webp_4c7fe469-2226-434d-83fd-ef06df870bc2_middle.webp`}
                  alt="クリックするだけ！ワンクリックアノテーションの操作画面"
                />
              </div>
              <div className={styles.solutionBody}>
                <SectionHead label="SOLUTION" title="ワンクリックアノテーションで解決" />
                <p>
                  ”クリックするだけ”でアノテーションを完了させましょう。画像アノテーションに特化したクラウドツールのため、難しい操作や高額な初期コストは一切不要です。
                </p>
                <a href="/la-oca#contact" className={styles.solutionCta}>
                  <p>今すぐワンクリックを体験する</p>
                  <ArrowRightIcon />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============ CTAバンド1 ============ */}
        <section className={styles.ctaBand}>
          <div className={styles.container}>
            <div className={styles.ctaBandInner}>
              <h2 className={styles.ctaBandTitle}>初期費用ゼロ、簡単操作ですぐに始められます</h2>
              <p className={styles.ctaBandLead}>
                はじめての方も安心。まずは無料でお試しいただけます。
              </p>
              <div className={styles.ctaBandButtons}>
                <Link href="/la-eye/contact" className={styles.ctaWhite}>
                  お問い合わせ
                </Link>
                <a href="/la-oca#contact" className={styles.ctaOrange}>
                  無料で試す
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============ COMPARISON ============ */}
        <section id="comparison" className={styles.comparison}>
          <div className={styles.container}>
            <SectionHead
              label="COMPARISON"
              title="他社との比較"
              lead={
                <>
                  今までの常識を覆す、圧倒的な効率化。
                  <br />
                  まずは従来手法との違いをチェックしてみてください。
                </>
              }
            />
            <div className={styles.comparisonScroll}>
              <div className={styles.comparisonTable}>
                {/* 行ラベル列 */}
                <div className={styles.compLabelCol}>
                  {COMP_LABELS.map((label) => (
                    <div className={styles.compLabelCell} key={label}>
                      {label}
                    </div>
                  ))}
                </div>
                {/* ワンクリックアノテーション列 */}
                <div className={`${styles.compCol} ${styles.compColLap}`}>
                  <div className={`${styles.compColHead} ${styles.compColHeadLap}`}>
                    <img
                      src={`${ASSET}/NxqgdRVEa1/s-2400x634_v-frms_webp_36d998a3-e883-419e-aa30-f697d086ba12_small.webp`}
                      alt="LAplust"
                    />
                    <p>ワンクリックアノテーション</p>
                  </div>
                  {COMP_LAPLUST.map((cell, i) => (
                    <CompCellView cell={cell} key={i} />
                  ))}
                </div>
                {/* 手作業列 */}
                <div className={styles.compCol}>
                  <div className={styles.compColHead}>
                    <img
                      src={`${ASSET}/NxqgdRVEa1/s-64x64_webp_8d1be9fb-5e6a-4b4e-a4ca-c0c762fc549f.webp`}
                      alt=""
                    />
                    <p>手作業</p>
                  </div>
                  {COMP_MANUAL.map((cell, i) => (
                    <CompCellView cell={cell} key={i} />
                  ))}
                </div>
                {/* 外注列 */}
                <div className={styles.compCol}>
                  <div className={styles.compColHead}>
                    <img
                      src={`${ASSET}/NxqgdRVEa1/s-64x64_webp_717e80cb-4519-4d0f-904b-748b97dadd71.webp`}
                      alt=""
                    />
                    <p>外注</p>
                  </div>
                  {COMP_OUTSOURCE.map((cell, i) => (
                    <CompCellView cell={cell} key={i} />
                  ))}
                </div>
              </div>
            </div>
            <p className={styles.swipeHint}>スワイプできます</p>
          </div>
        </section>

        {/* ============ 利用者インタビュー ============ */}
        <section id="about-1" className={styles.interview}>
          <div className={styles.container}>
            <h2 className={styles.interviewTitle}>利用者インタビュー</h2>
            <video
              className={styles.mainVideo}
              src={`${ASSET}/NxqgdRVEa1/s-1920x1080_3e7deceb-7930-49cc-a27d-182bfb90043b.mp4#t=0.01`}
              autoPlay
              muted
              controls
              playsInline
            />
            <LaEyePromo />
          </div>
        </section>

        {/* ============ PRICE ============ */}
        <section id="price" className={styles.price}>
          <div className={styles.container}>
            <SectionHead
              label="PRICE"
              title="料金プラン"
              lead="プランを選択して、あなたに最適なソリューションを見つけてください。"
            />
            <div className={styles.priceGrid}>
              {/* 無料プラン */}
              <div className={`${styles.planCard} ${styles.planCardFeatured}`}>
                <p className={styles.planBadge}>まずはお試し</p>
                <h3 className={styles.planName}>無料プラン</h3>
                <p className={styles.planPrice}>
                  <span className={styles.planYen}>￥</span>
                  <span className={styles.planNum}>0</span>
                </p>
                <p className={styles.planPriceNote}>月額</p>
                <div className={styles.planFeatures}>
                  {['ワンクリックアノテーション', '基本的な機能', '100データ出力', 'COCO JSON'].map(
                    (f) => (
                      <p className={styles.planFeature} key={f}>
                        <CheckIcon />
                        {f}
                      </p>
                    ),
                  )}
                </div>
                <div className={styles.planButton}>
                  <a href="/la-oca#contact" className={styles.planBtnOrange}>
                    今すぐ始める
                  </a>
                </div>
              </div>

              {/* スタータープラン */}
              <div className={styles.planCard}>
                <h3 className={styles.planName}>スタータープラン</h3>
                <p className={styles.planPrice}>
                  <span className={styles.planYen}>￥</span>
                  <span className={styles.planNum}>3,980</span>
                  <span className={styles.planSlash}>/</span>
                  <span className={styles.planMonth}>月</span>
                </p>
                <p className={styles.planPriceNote}>税込</p>
                <div className={styles.planFeatures}>
                  {[
                    'ワンクリックアノテーション',
                    '基本的な機能',
                    '1500データ出力',
                    'COCO JSON',
                    '商用ライセンス',
                  ].map((f) => (
                    <p className={styles.planFeature} key={f}>
                      <CheckIcon />
                      {f}
                    </p>
                  ))}
                </div>
                <div className={styles.planButton}>
                  <Link href="/la-eye/contact" className={styles.planBtnDark}>
                    お申し込み
                  </Link>
                </div>
              </div>

              {/* ビジネスプラン */}
              <div className={styles.planCard}>
                <h3 className={styles.planName}>ビジネスプラン</h3>
                <p className={styles.planPrice}>
                  <span className={styles.planYen}>￥</span>
                  <span className={styles.planNum}>9,980</span>
                  <span className={styles.planSlash}>/</span>
                  <span className={styles.planMonth}>月</span>
                </p>
                <p className={styles.planPriceNote}>税込</p>
                <div className={styles.planFeatures}>
                  {[
                    'ワンクリックアノテーション',
                    '高度な機能',
                    '5000データ出力',
                    'COCO JSON',
                    '商用ライセンス',
                    'データ管理',
                    'オンラインサポート',
                    '導入支援',
                  ].map((f) => (
                    <p className={styles.planFeature} key={f}>
                      <CheckIcon />
                      {f}
                    </p>
                  ))}
                </div>
                <div className={styles.planButton}>
                  <Link href="/la-eye/contact" className={styles.planBtnDark}>
                    お申し込み
                  </Link>
                </div>
              </div>

              {/* エンタープライズプラン */}
              <div className={styles.planCard}>
                <h3 className={styles.planName}>エンタープライズプラン</h3>
                <p className={styles.planPriceCustom}>カスタム</p>
                <p className={styles.planPriceNote}>お問い合わせ</p>
                <div className={styles.planFeatures}>
                  {[
                    'カスタム機能',
                    '無制限データ出力',
                    'オンプレミス対応',
                    '導入支援/専用サポート',
                    'SLA保証/セキュリティ強化',
                  ].map((f) => (
                    <p className={styles.planFeature} key={f}>
                      <CheckIcon />
                      {f}
                    </p>
                  ))}
                </div>
                <div className={styles.planButton}>
                  <Link href="/la-eye/contact" className={styles.planBtnDark}>
                    お問い合わせ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section id="faq" className={styles.faq}>
          <div className={styles.container}>
            <div className={styles.faqBox}>
              <SectionHead
                label="FAQ"
                title="よくある質問"
                lead="お客様から寄せられるご質問とその回答をご紹介します。"
              />
              <LaOcaFaq />
            </div>
          </div>
        </section>

        {/* ============ CTAバンド2（現行は全幅・角丸なし） ============ */}
        <section className={styles.ctaBand} style={{ padding: 0 }}>
          <div className={styles.ctaBandInner} style={{ borderRadius: 0, maxWidth: 'none' }}>
            <h2 className={styles.ctaBandTitle}>今すぐワンクリックアノテーションを体験</h2>
            <p className={styles.ctaBandLead}>面倒な手続きゼロ。たった5分で始められます。</p>
            <div className={styles.ctaBandButtons}>
              <Link href="/la-eye/contact" className={styles.ctaWhite}>
                お問い合わせ
              </Link>
              <a href="/la-oca#contact" className={styles.ctaOrange}>
                無料で試す
              </a>
            </div>
          </div>
        </section>

        {/* ============ RESULTS ============ */}
        <section id="results" className={styles.results}>
          <div className={styles.container}>
            <SectionHead
              label="RESULTS"
              title="導入事例"
              lead={
                <>
                  導入企業の声と具体的な成果をご紹介します。
                  <br />
                  実際の活用事例から、導入後の効果をご確認ください。
                </>
              }
            />
            <div className={styles.resultsGrid}>
              {RESULT_CARDS.map((card) => (
                <div className={styles.resultCard} key={card.title}>
                  <div className={styles.resultCardTop}>
                    <span className={styles.resultTag}>課題</span>
                    <h3>{card.title}</h3>
                  </div>
                  <div className={styles.resultImgWrap}>
                    <img src={card.img} alt="" />
                    <div className={styles.resultBadges}>
                      {card.badges.map((b) => (
                        <span className={styles.resultBadge} key={b.text}>
                          {b.text}
                          {b.dir === 'down' ? <TurnDownIcon /> : <TurnUpIcon />}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className={styles.resultCardBody}>
                    <p className={styles.resultEffectLabel}>導入後の効果</p>
                    <p>{card.effect}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* モバイル詳細版（現行サイトのモバイル変形） */}
            <div className={styles.resultsDetail}>
              {RESULT_DETAILS.map((d) => (
                <div className={styles.resultDetailCard} key={d.company + d.category}>
                  <div className={styles.resultDetailTags}>
                    <span className={styles.resultDetailCat}>{d.category}</span>
                    <span className={styles.resultDetailCompany}>{d.company}</span>
                  </div>
                  <dl className={styles.resultDetailNums}>
                    <div>
                      <dt>時間短縮率</dt>
                      <dd>{d.time}</dd>
                    </div>
                    <div>
                      <dt>コスト削減率</dt>
                      <dd>{d.cost}</dd>
                    </div>
                  </dl>
                  <div className={styles.resultDetailBlock}>
                    <h4>課題</h4>
                    <p>{d.problem}</p>
                  </div>
                  <div className={styles.resultDetailBlock}>
                    <h4>導入後の効果</h4>
                    <p>{d.effect}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ TESTIMONIALS ============ */}
        <section className={styles.testimonials}>
          <div className={styles.container}>
            <SectionHead
              label="TESTIMONIALS"
              title="利用者の声"
              lead="お客様から寄せられた喜びの声をご紹介します。"
            />
            <div className={styles.testimonialGrid}>
              {TESTIMONIALS.map((t) => (
                <div className={styles.testimonialCard} key={t.title}>
                  <div className={styles.testimonialTags}>
                    {t.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className={styles.testimonialHead}>
                    <span className={styles.testimonialAvatar}>
                      <UserIcon />
                    </span>
                    <p className={styles.testimonialBubble}>{t.title}</p>
                  </div>
                  <div className={styles.testimonialBody}>{t.body}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ FREE TRIAL（フォーム） ============ */}
        <section id="contact" className={styles.trial}>
          <div className={styles.container}>
            <div className={styles.trialBox}>
              <SectionHead
                label="FREE TRIAL"
                title="まずは無料で体験"
                lead={
                  <>
                    以下のフォームに必要事項をご入力のうえ、無料プランのお試しにお申し込みください。
                    <br />
                    お申し込み内容を確認後、担当者よりご連絡いたします。
                  </>
                }
              />
              <LaOcaTrialForm />
            </div>
          </div>
        </section>

        {/* ============ 会社情報 ============ */}
        <section className={styles.company}>
          <div className={styles.companyContainer}>
            <div className={styles.companyInner}>
              <div className={styles.companyInfo}>
                <h2 className={styles.companyTitle}>会社情報</h2>
                <p className={styles.companyName}>株式会社LAplust（ラプラス / LAplust Inc.）</p>
                <p className={styles.companyAddress}>
                  〒850-0051
                  <br />
                  長崎県長崎市西坂町5-16
                </p>
                <Link href="/" className={styles.companyMore}>
                  詳しくはこちら
                  <svg viewBox="0 0 22 12" aria-hidden="true">
                    <path d="M0 6h20M15 1l5 5-5 5" />
                  </svg>
                </Link>
              </div>
              <div className={styles.companyMap}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.4445363863256!2d129.8695812762518!3d32.75393718516408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x351553e897919e91%3A0xae9f507a6b354b25!2z44CSODUwLTAwNTEg6ZW35bSO55yM6ZW35bSO5biC6KW_5Z2C55S677yV4oiS77yR77yW!5e0!3m2!1sja!2sjp!4v1737593371714!5m2!1sja!2sjp"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title="株式会社LAplust 所在地"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ============ 専用フッター ============ */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerFollow}>
            <p>Follow Us</p>
            <div className={styles.footerSns}>
              <a
                href="https://www.youtube.com/channel/UCSLw0BSwGopky5LRppC2XUw"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/laplust/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.03 4.39 11.03 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
                </svg>
              </a>
            </div>
          </div>
          <nav className={styles.footerNav}>
            <a href="/la-oca#solution">機能</a>
            <a href="/la-oca#price">料金</a>
            <a href="/la-oca#faq">よくある質問</a>
            <a href="/la-oca#results">導入事例</a>
            <a href="/la-oca#contact">お問い合わせ</a>
          </nav>
          <div className={styles.footerBottom}>
            <div className={styles.footerLogo} role="img" aria-label="LAplust" />
            <Link href="/privacy_policy" target="_blank">
              Privacy Policy
            </Link>
            <Link href="/site_policy" target="_blank">
              Site Policy
            </Link>
          </div>
          <p className={styles.footerCopyright}>© 2025 Laplust Corp. All rights reserved. LA-OCA.</p>
        </div>
      </footer>
    </div>
  );
}

import Link from 'next/link';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import styles from './company.module.css';

const GCS = 'https://storage.googleapis.com/studio-design-asset-files/projects/NxqgdRVEa1';

const MEMBERS = [
  {
    role: '代表取締役 CEO',
    name: '田中 宏樹',
    photo: `${GCS}/s-464x464_webp_33980486-69dc-43cd-8acf-810adbca05ee.webp`,
    bio: '高専にて電気電子工学を専攻しカオス理論を研究。 電波塔などの無線設備の保守・工事に従事。その傍、かねてより関心を寄せていた機械学習を独学で勉強。 独自の機械学習ライブラリを開発し、LAplustを創設。',
  },
  {
    role: '取締役 COO / Co-Founder',
    name: '原崎 芳加',
    photo: `${GCS}/s-464x464_webp_3b0b9cb6-e180-4ba3-8384-4a04236ff530.webp`,
    bio: '学生時代は水中ロボットへの組込開発に没頭し モノ作りのおもしろさと可能性を知る。横河電機株式会社にて、産業向けIoTを提供する新会社の立ち上げを行い、製造現場に入り込みIoTサービスの新規事業開発を実施。',
  },
  {
    role: '取締役 CTO / Co-Founder',
    name: '井手 雄太',
    photo: `${GCS}/s-464x464_webp_9c573c59-47ea-493a-8c44-d0a985eab009.webp`,
    bio: '高専にて電気電子工学を専攻後、造船所にて貿易貨物船の電気設計を担当。 心機一転、退職を決意し、単身でフィリピンおよびオーストラリアに移住。 語学と多民族国家の文化・価値観を吸収し、「世界視」を携えCEO田中、COO原崎と共に(株)LAplustを設立',
  },
  {
    role: '取締役CPO',
    name: '田中 真人',
    photo: `${GCS}/s-464x464_webp_7b330dd9-9470-43f7-a524-b41f990a443c.webp`,
    bio: '幼少期からものづくりが好きで、高専にて電子制御工学を専攻し、その後、大学へ編入し機械工学やロボット工学なども学ぶ。現在は、重工メーカーにてドローンやAUVの研究開発に従事する傍ら、LAplustにて組み込み・制御系を担当。',
  },
  {
    role: '取締役CPMO',
    name: '中村 匡希',
    photo: `${GCS}/s-464x464_webp_187053a3-da3c-4c63-b3db-acc198ac3e33.webp`,
    bio: '高専にて電気電子工学を専攻後、県内電機メーカーに就職し新製品の試作組立/工程設計を担当。2024年2月、LAplustに加入。プロジェクト管理を担当。',
  },
];

// tabs: /company 内アンカー or /bcmY_qWs/* ページ間リンク（現行サイトのURL構造を踏襲）
const TAB_SETS = {
  company: [
    { label: '経営方針', href: '/company#management', key: 'management' },
    { label: '会社情報', href: '/company#information', key: 'information' },
    { label: 'メンバー', href: '/company#member', key: 'member' },
  ],
  bcm: [
    { label: '経営方針', href: '/bcmY_qWs/1Lp39Toq/#management', key: '1Lp39Toq' },
    { label: '会社情報', href: '/bcmY_qWs/iTkWpPF3/#information', key: 'iTkWpPF3' },
    { label: 'メンバー', href: '/bcmY_qWs/ubDEqaZo/#member', key: 'ubDEqaZo' },
  ],
} as const;

export default function CompanyContent({
  tabSet,
  activeKey,
}: {
  tabSet: keyof typeof TAB_SETS;
  activeKey: string;
}) {
  const tabs = TAB_SETS[tabSet];
  return (
    <>
      <SiteHeader />
      <main style={{ paddingTop: 'calc(var(--header-height) + 48px)' }}>
        <h1 className="page-title">Company</h1>
        <nav className={styles.tabBar}>
          {tabs.map((t) => (
            <Link key={t.key} href={t.href} className={t.key === activeKey ? styles.isActive : ''}>
              {t.label}
            </Link>
          ))}
        </nav>

        <div className={styles.band}>
          <div className="container">
            {/* 経営方針 */}
            <article className={styles.article} id="management">
              <h2 className={styles.articleTitle}>経営方針</h2>
              <span className={styles.label}>Our Mission</span>
              <p className={styles.mission}>
                真の知能を実装し、
                <br />
                社会活動を根底から支える
              </p>
              <span className={styles.label}>Our Vision</span>
              <p className={styles.text}>
                AIを活用した動画像解析サービスを普及浸透させるうえで重要な汎用的なMLOpsの基盤を整備・アップデートします。世界中で加速度的に進むAIの数多の研究成果から市場に求められている本当に有益な情報を目利きし、人の活動を豊かにしていくために複数のAIを継続的に提供します。我々はAIプロダクトを本当の意味で社会実装するために技術的な課題を解決し、課題やニーズを持つ方々とともに協創を推進します。
              </p>
              <span className={styles.label}>Our Value</span>
              <p className={styles.text}>
                開発コスト・期間を最小化しお客様に最善の価値を「継続的に」提供する
              </p>
              <span className={styles.label}>Our Philosophy</span>
              <h3 className={styles.philosophyTitle}>自他共栄</h3>
              <p className={styles.philosophyText}>
                自分もほかの人たちも一緒に豊かになって、栄えていこう。分かち合える豊かさこそ、真の豊かさであり、大きな繁栄に繋がるものと考えています。そういう想いを胸に、私たちは地元や社会の方々のお役に立てるようなサービスを提供していきます。
              </p>
              <h3 className={styles.philosophyTitle}>正々堂々</h3>
              <p className={styles.philosophyText}>
                月並みな言葉かもしれませんが、「嘘をつかない」「背伸びをしない」「ありのままで居る」ということです。「虚偽」はリスクを伴う上に、とてもエネルギーを使います。一方、「真実」はいかなる事象に直面しようとも崩れることはありません。
                正々堂々、嘘のないありのままの自分たちでいることこそ最大のパフォーマンスを発揮できるものと確信しています。
              </p>
              <h3 className={styles.philosophyTitle}>多様性</h3>
              <p className={styles.philosophyText}>
                似たもの同士が集まると、とても心地がいいかもしれません。しかし、自分と違う価値観や考え方にこそ、成長・進化のヒントがあると考えています。そして、多様な知識やスキルが集結したとき、より難解な問題、より大きな課題の解決ができるはずです。人種、信仰、経歴など問わず、平和の為の多様性を私たちは尊重し、私たちと違ったアイデアを持つ仲間が加わることを心より楽しみにしています。
              </p>
            </article>

            {/* 会社概要 */}
            <article className={styles.article} id="information">
              <h2 className={styles.articleTitle}>会社概要</h2>
              <dl style={{ marginTop: 24 }}>
                <div className={styles.infoRow}>
                  <dt>会社名</dt>
                  <dd>株式会社LAplust（ラプラス / LAplust Inc.）</dd>
                </div>
                <div className={styles.infoRow}>
                  <dt>設立年月日</dt>
                  <dd>2019年 4月 8日</dd>
                </div>
                <div className={styles.infoRow}>
                  <dt>代表者</dt>
                  <dd>代表取締役社長 CEO 田中 宏樹</dd>
                </div>
                <div className={styles.infoRow}>
                  <dt>本社所在地</dt>
                  <dd>
                    〒850-0051 長崎県長崎市西坂町5-16　（
                    <a href="https://maps.app.goo.gl/vfLo4fYu5weojpm48" target="_blank" rel="noopener">
                      Google Map
                    </a>
                    ）
                  </dd>
                </div>
                <div className={styles.infoRow}>
                  <dt>事業内容</dt>
                  <dd>
                    動画/画像解析AIを活用したシステムの研究および開発
                    <br />
                    AIを活用したデータ分析APIの研究および開発
                    <br />
                    DX推進システムの開発
                  </dd>
                </div>
              </dl>
            </article>

            {/* メンバー */}
            <article className={styles.article} id="member">
              <h2 className={styles.articleTitle}>メンバー</h2>
              <ul>
                {MEMBERS.map((m) => (
                  <li key={m.name} className={styles.member}>
                    <img className={styles.memberPhoto} src={m.photo} alt={m.name} loading="lazy" />
                    <div>
                      <p className={styles.memberRole}>{m.role}</p>
                      <h3 className={styles.memberName}>{m.name}</h3>
                      <p className={styles.memberBio}>{m.bio}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

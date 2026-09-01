import type { Metadata } from 'next';
import { Poppins, Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const notoSansJp = Noto_Sans_JP({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-noto',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://laplust.com'),
  title: {
    default: '株式会社LAplust（ラプラス）｜真の知能を実装し、人の活動を根底から支える',
    template: '%s｜株式会社LAplust（ラプラス）',
  },
  description:
    '株式会社LAplust（ラプラス）は、動画や画像解析に特化した機械学習/深層学習技術の研究開発を行い、実践知を蓄積し、課題解決するためのプロダクトを社会実装しています。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // フォント変数は:rootで参照するため<html>側に付与する（bodyだと--font-en解決時に未定義になる）
    <html lang="ja" className={`${poppins.variable} ${notoSansJp.variable}`}>
      <body>{children}</body>
    </html>
  );
}

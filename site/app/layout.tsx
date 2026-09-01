import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '株式会社LAplust',
    template: '%s | 株式会社LAplust',
  },
  description:
    'AI・ドローン等の先端技術を活用したソリューションを提供する株式会社LAplustのコーポレートサイトです。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}

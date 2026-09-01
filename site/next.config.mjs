/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静的出力（要件定義書2章：SSR/ISRに依存しない）
  output: 'export',
  trailingSlash: false,
  images: {
    // 静的出力では next/image の最適化サーバーが使えないため無効化
    unoptimized: true,
  },
};

export default nextConfig;

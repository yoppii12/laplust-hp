import type { Metadata } from 'next';
import ProjectListPage from '@/components/ProjectListPage';

export const metadata: Metadata = { title: 'アグリテック プロジェクト一覧' };

export default function AgritechPage() {
  return (
    <ProjectListPage
      category="アグリテック"
      lead="現場の声とテクノロジーをつなぐ、実践型アグリテックプロジェクトを紹介します。"
      projects={[
        { title: 'スーパー農家 トミさん/AgriGPT', slug: 'agrigpt' },
        { title: '【利用者数No1】病害虫診断AIアグリアイ', slug: 'agri_ai_pest_diagnosis' },
        { title: '【導入実績No1】庭先直売所の売上向上サービス', slug: 'direct_sales_growth' },
        { title: '受粉ドローン', slug: 'pollination_drone' },
      ]}
    />
  );
}

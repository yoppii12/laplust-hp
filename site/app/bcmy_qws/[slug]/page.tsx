import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CompanyContent from '@/components/CompanyContent';

// 現行サイト（Studio CMS）のCompanyページ群のURLをそのまま踏襲する
const SLUGS = ['1lp39toq', 'itkwppf3', 'ubdeqazo'];

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export const metadata: Metadata = { title: 'Company' };

export default async function BcmPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!SLUGS.includes(slug)) notFound();
  return <CompanyContent tabSet="bcm" activeKey={slug} />;
}

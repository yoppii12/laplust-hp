import type { Metadata } from 'next';
import CompanyContent from '@/components/CompanyContent';

export const metadata: Metadata = { title: 'Company' };

export default function CompanyPage() {
  return <CompanyContent tabSet="company" activeKey="management" />;
}

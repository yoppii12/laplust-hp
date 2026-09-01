import type { Metadata } from 'next';
import PolicyPage from '@/components/PolicyPage';

export const metadata: Metadata = { title: 'Site Policy' };

export default function SitePolicyPage() {
  return <PolicyPage title="Site Policy" file="site_policy" />;
}

import type { Metadata } from 'next';
import PortfolioGrid from '../../components/PortfolioGrid';
import { siteMeta } from '../../data/site';

export const metadata: Metadata = {
  title: 'Portofolio',
  description: `Preview hasil kerja ${siteMeta.name} untuk website, aplikasi, dan IoT.`,
};

export default function PortfolioPage() {
  return <PortfolioGrid hideCta />;
}

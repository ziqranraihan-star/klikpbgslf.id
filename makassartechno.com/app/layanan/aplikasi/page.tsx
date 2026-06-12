import type { Metadata } from 'next';
import ServiceDetail from '../../../components/ServiceDetail';
import { services, siteMeta } from '../../../data/site';

const service = services.find((item) => item.slug === 'aplikasi');

export const metadata: Metadata = {
  title: service ? `${service.title}` : 'Layanan Aplikasi',
  description: service?.description ?? siteMeta.description,
};

export default function AppServicePage() {
  return <ServiceDetail slug="aplikasi" />;
}

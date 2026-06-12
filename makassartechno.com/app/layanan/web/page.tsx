import type { Metadata } from 'next';
import ServiceDetail from '../../../components/ServiceDetail';
import { services, siteMeta } from '../../../data/site';

const service = services.find((item) => item.slug === 'web');

export const metadata: Metadata = {
  title: service ? `${service.title}` : 'Layanan Web',
  description: service?.description ?? siteMeta.description,
};

export default function WebServicePage() {
  return <ServiceDetail slug="web" />;
}

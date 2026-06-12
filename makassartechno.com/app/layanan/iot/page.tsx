import type { Metadata } from 'next';
import ServiceDetail from '../../../components/ServiceDetail';
import { services, siteMeta } from '../../../data/site';

const service = services.find((item) => item.slug === 'iot');

export const metadata: Metadata = {
  title: service ? `${service.title}` : 'Layanan IoT',
  description: service?.description ?? siteMeta.description,
};

export default function IoTServicePage() {
  return <ServiceDetail slug="iot" />;
}

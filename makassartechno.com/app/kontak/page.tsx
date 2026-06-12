import type { Metadata } from 'next';
import ContactSection from '../../components/ContactSection';
import { siteMeta } from '../../data/site';

export const metadata: Metadata = {
  title: 'Kontak',
  description: `Hubungi ${siteMeta.name} untuk konsultasi web, aplikasi, dan IoT.`,
};

export default function ContactPage() {
  return <ContactSection />;
}

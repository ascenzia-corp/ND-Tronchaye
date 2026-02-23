import { useEffect } from 'react';
import Hero from '@/components/Hero';
import WelcomeSection from '@/components/WelcomeSection';
import ScheduleSection from '@/components/ScheduleSection';
import SacramentsSection from '@/components/SacramentsSection';
import EventsCalendar from '@/components/EventsCalendar';
import Gallery from '@/components/Gallery';
import ContactSection from '@/components/ContactSection';
import QuoteSection from '@/components/QuoteSection';

export default function Index() {
  useEffect(() => {
    document.title = 'Sanctuaire Notre Dame de la Tronchaye | Rochefort en Terre';
  }, []);

  return (
    <>
      <Hero />
      <WelcomeSection />
      <ScheduleSection />
      <SacramentsSection />
      <EventsCalendar />
      <Gallery />
      <ContactSection />
      <QuoteSection />
    </>
  );
}

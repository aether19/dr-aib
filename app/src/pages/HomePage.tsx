import HeroSection from '../sections/home/HeroSection';
import MarqueeStrip from '../sections/home/MarqueeStrip';
import BiographieSection from '../sections/home/BiographieSection';
import StatsSection from '../sections/home/StatsSection';
import InterventionsGridSection from '../sections/home/InterventionsGridSection';
import PhilosophieSection from '../sections/home/PhilosophieSection';
import TemoignagesSection from '../sections/home/TemoignagesSection';
import CTAContactSection from '../sections/home/CTAContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeStrip />
      <BiographieSection />
      <StatsSection />
      <InterventionsGridSection />
      <PhilosophieSection />
      <TemoignagesSection />
      <CTAContactSection />
    </>
  );
}

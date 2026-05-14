import SEO from '../components/SEO';
import HeroSection from '../sections/home/HeroSection';
import MarqueeStrip from '../sections/home/MarqueeStrip';
import BiographieSection from '../sections/home/BiographieSection';
import StatsSection from '../sections/home/StatsSection';
import InterventionsGridSection from '../sections/home/InterventionsGridSection';
import PhilosophieSection from '../sections/home/PhilosophieSection';
import TemoignagesSection from '../sections/home/TemoignagesSection';
import CTAContactSection from '../sections/home/CTAContactSection';

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Dr. Aib Amar — Chirurgien Plasticien à Alger",
    "url": "https://www.chirurgieesthetique-dz.com/",
    "description": "Chirurgien plasticien à Alger. 13 ans à Paris VIII, membre SOFCPRE.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.chirurgieesthetique-dz.com/" }]
    }
  };

  return (
    <>
      <SEO
        title="Chirurgien Plasticien à Alger"
        description="Dr. Aib Amar, chirurgien plasticien à Alger. 13 ans d'expertise à Paris VIII, membre SOFCPRE. Rhinoplastie, lifting, liposuccion, prothèse mammaire. Prenez rendez-vous à Kouba, Alger."
        canonical="/"
        jsonLd={jsonLd}
      />
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

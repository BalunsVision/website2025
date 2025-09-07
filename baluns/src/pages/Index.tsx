
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeatureTeasers from '@/components/FeatureTeasers';
import ClientLogos from '@/components/ClientLogos';
import QuickStats from '@/components/QuickStats';
import CompanyMission from '@/components/CompanyMission';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <QuickStats />
      <ClientLogos />
      <FeatureTeasers />
      <CompanyMission />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;

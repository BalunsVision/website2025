
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SolutionCategories from '@/components/SolutionCategories';
import SolutionDetails from '@/components/SolutionDetails';

const Solutions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div>
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6 pt-6 sm:pt-8 md:pt-10 lg:pt-10 pb-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 sm:mb-6">Solutions</h1>
        </div>
        <SolutionCategories />
        <SolutionDetails />
      </div>
      <Footer />
    </div>
  );
};

export default Solutions;

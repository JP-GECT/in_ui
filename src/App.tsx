import Header from './components/Header';
import Hero from './components/Hero';
import LifeInsuranceSection from './components/LifeInsuranceSection';
import PlansSection from './components/PlansSection';
import SupportButton from './components/SupportButton';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <LifeInsuranceSection />
      <PlansSection />
      <SupportButton />
      <Footer />
    </div>
  );
}

export default App;

import { useAuth } from '../context/AuthContext';
import Header from './Header';
import Hero from './Hero';
import LifeInsuranceSection from './LifeInsuranceSection';
import PlansSection from './PlansSection';
import SupportButton from './SupportButton';
import Footer from './Footer';

export default function Dashboard() {
  const { username } = useAuth();
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {username && <Hero username={username} />}
      <LifeInsuranceSection />
      <PlansSection />
      <SupportButton />
      <Footer />
    </div>
  );
}

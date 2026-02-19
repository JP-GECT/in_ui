import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Shield, Calendar, HandCoins, CircleDollarSign } from 'lucide-react';

interface PolicyRecommendation {
  policy_id: string;
  reason: string;
  source: string;
}

interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  tagline: string;
  image: string;
  benefits: { icon: React.ReactNode; label: string }[];
  disclaimer: string;
}

const IMAGES = [
  'https://images.pexels.com/photos/2253879/pexels-photo-2253879.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600',
];

const defaultBenefits = [
  { icon: <Shield className="w-8 h-8" />, label: 'Personalized recommendation' },
  { icon: <Calendar className="w-8 h-8" />, label: 'Based on your profile' },
  { icon: <HandCoins className="w-8 h-8" />, label: 'Relevant to current events' },
  { icon: <CircleDollarSign className="w-8 h-8" />, label: 'Tailored coverage options' },
];

function formatPolicyId(policyId: string): string {
  return policyId
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

interface User {
  user_id?: string;
  id?: string;
  [key: string]: unknown;
}

interface HeroProps {
  username: string;
}

export default function Hero({ username }: HeroProps) {
  const [user, setUser] = useState<User | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState<CarouselSlide[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const userRes = await fetch(`${API_BASE_URL}/user/${username}`);
      const userData = await userRes.json();
      const fetchedUser = userData.user ?? userData;
      setUser(fetchedUser);

      const userId = fetchedUser?.user_id ?? fetchedUser?.id;
      const res = await fetch(`${API_BASE_URL}/recommend-policy/${username}`, { method: 'POST' });
      const data = await res.json();
      const parsed: PolicyRecommendation[] = JSON.parse(data.recommendation.content);
      const recommendationSlides: CarouselSlide[] = parsed.map((rec, i) => ({
        id: i + 1,
        title: formatPolicyId(rec.policy_id),
        subtitle: rec.reason,
        tagline: rec.source,
        image: IMAGES[i % IMAGES.length],
        benefits: defaultBenefits,
        disclaimer: 'Recommendation based on your profile and current events. Terms apply.',
      }));
      setSlides(recommendationSlides);
      setLoading(false);
    };
    fetchData();
  }, [username]);

  useEffect(() => {
    if (slides.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  if (loading) {
    return (
      <section className="bg-gradient-to-r from-blue-100 to-blue-50 min-h-[400px] flex items-center justify-center">
        <p className="text-gray-600">Loading recommendations...</p>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-r from-blue-100 to-blue-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-yellow-400 rounded-full w-64 h-64 absolute -top-8 -left-8 opacity-30"></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="relative rounded-lg shadow-xl w-full h-96 object-cover transition-opacity duration-500"
            />
            <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-sm text-gray-600">Month 1</div>
              <div className="text-xs text-gray-500">(Premium paid)</div>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="bg-gray-200 w-12 h-12 rounded text-xs flex items-center justify-center">
                    <span className="text-gray-600">2026</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              {slide.title}{' '}
              <span className="bg-blue-600 text-white px-4 py-2 inline-block">
                {slide.tagline}
              </span>
            </h1>
            <p className="text-2xl text-blue-600 font-semibold mb-8">
              {slide.subtitle}
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {slide.benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-3">
                    {benefit.icon}
                  </div>
                  <p className="text-sm font-semibold text-gray-700">{benefit.label}</p>
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-500 mt-6">
              {slide.disclaimer}
            </p>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-blue-600 rounded-full p-3 shadow-lg transition z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-blue-600 rounded-full p-3 shadow-lg transition z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition ${
                index === currentSlide ? 'bg-blue-600 w-8' : 'bg-gray-400 w-2'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

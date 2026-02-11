import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Shield, Calendar, HandCoins, CircleDollarSign } from 'lucide-react';

interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  tagline: string;
  image: string;
  benefits: { icon: React.ReactNode; label: string }[];
  disclaimer: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    title: 'Choose Your Income',
    subtitle: 'With ABC Smart Monthly Income Plan',
    tagline: '#LiveLifeOnYourTerms',
    image: 'https://images.pexels.com/photos/2253879/pexels-photo-2253879.jpeg?auto=compress&cs=tinysrgb&w=600',
    benefits: [
      { icon: <Shield className="w-8 h-8" />, label: 'Life cover' },
      { icon: <Calendar className="w-8 h-8" />, label: 'Income starts from next policy month / year' },
      { icon: <HandCoins className="w-8 h-8" />, label: 'Flexible monthly or annual payouts' },
      { icon: <CircleDollarSign className="w-8 h-8" />, label: 'Return of Total Premiums Paid* at Maturity' },
    ],
    disclaimer: '*Total Premiums Paid means total of all the Premiums received, excluding any extra Premium, any Rider Premium and taxes | T&C Apply.',
  },
  {
    id: 2,
    title: 'Secure Your Future',
    subtitle: 'With ABC Term Protection Plan',
    tagline: '#FamilyFirst',
    image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
    benefits: [
      { icon: <Shield className="w-8 h-8" />, label: 'Comprehensive life coverage' },
      { icon: <Calendar className="w-8 h-8" />, label: 'Coverage up to age 99' },
      { icon: <HandCoins className="w-8 h-8" />, label: 'Affordable premium options' },
      { icon: <CircleDollarSign className="w-8 h-8" />, label: 'Instant claim settlement' },
    ],
    disclaimer: 'Subject to terms and conditions. Policy benefits depend on claims approval.',
  },
  {
    id: 3,
    title: 'Build Your Wealth',
    subtitle: 'With ABC Investment Growth Plan',
    tagline: '#GrowYourMoney',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600',
    benefits: [
      { icon: <Shield className="w-8 h-8" />, label: 'Investment-linked insurance' },
      { icon: <Calendar className="w-8 h-8" />, label: 'Flexible fund choices' },
      { icon: <HandCoins className="w-8 h-8" />, label: 'Tax-efficient growth' },
      { icon: <CircleDollarSign className="w-8 h-8" />, label: 'Life protection included' },
    ],
    disclaimer: 'Investment returns subject to market performance. Policy terms apply.',
  },
  {
    id: 4,
    title: 'Plan Your Retirement',
    subtitle: 'With ABC Retirement Savings Plan',
    tagline: '#RetireInStyle',
    image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
    benefits: [
      { icon: <Shield className="w-8 h-8" />, label: 'Guaranteed income post-retirement' },
      { icon: <Calendar className="w-8 h-8" />, label: 'Lifetime pension options' },
      { icon: <HandCoins className="w-8 h-8" />, label: 'Flexible payout choices' },
      { icon: <CircleDollarSign className="w-8 h-8" />, label: 'Tax benefits on contributions' },
    ],
    disclaimer: 'Retirement benefits and pension terms as per policy document.',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

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

import { useState } from 'react';

const tabs = ['TOP SELLING', 'TERM', 'SAVINGS', 'RETIREMENT', 'GROUP'];

const plans = {
  'TOP SELLING': [
    {
      title: 'ABC Bharat Parivar Vikas Yojana',
      subtitle: 'ABC Bharat Parivar Vikas Yojana',
      benefits: [
        'Monthly premium of as low as INR 1000 to avail product benefits',
        'Waiver of Premium in case of unfortunate death',
        'Get a maturity benefit of at least 101% of the total premiums paid',
      ],
    },
    {
      title: 'A Smart Step Towards Growing Your Savings Over Time!',
      subtitle: 'ABC Signature Guaranteed Income Plan',
      benefits: [
        'Guaranteed Returns through Interim and Lump sum payouts',
        'Multiple Payout options e.g. Early Income, Deferred Income or Lump Sum',
        'Multiple payment options',
      ],
    },
    {
      title: 'Flexibility to manage your money',
      subtitle: 'ABC Signature Investment Plan',
      benefits: [
        'Freedom to align the investment horizon to the planned financial needs by choice of the premium paying terms',
        'Flexibility to manage your money',
        'Transparency of your investments',
      ],
    },
  ],
};

export default function PlansSection() {
  const [activeTab, setActiveTab] = useState('TOP SELLING');

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-700 text-center mb-12">
          Discover our Best Insurance Plans
        </h2>

        <div className="flex flex-wrap justify-center gap-8 mb-12 border-b-2 border-gray-300">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-4 font-semibold text-lg transition ${
                activeTab === tab
                  ? 'text-gray-800 border-b-4 border-gray-800'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans[activeTab as keyof typeof plans]?.map((plan, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-blue-50 p-6 text-center">
                <h3 className="text-blue-600 font-semibold text-lg mb-2">{plan.title}</h3>
              </div>

              <div className="bg-blue-600 text-white p-4 text-center">
                <h4 className="font-semibold text-lg italic">{plan.subtitle}</h4>
              </div>

              <div className="p-6">
                <h5 className="font-bold text-lg text-gray-800 mb-4">Key Benefits</h5>
                <ul className="space-y-3">
                  {plan.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span className="text-gray-700 text-sm leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

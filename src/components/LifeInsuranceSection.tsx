export default function LifeInsuranceSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center mb-12">
          <div className="h-1 w-24 bg-blue-600"></div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-700 mx-8">Life Insurance</h2>
          <div className="h-1 w-24 bg-blue-600"></div>
        </div>

        <div className="flex justify-center gap-4 mb-16">
          <button className="bg-blue-600 text-white font-semibold px-8 py-3 rounded shadow-lg hover:bg-blue-700 transition">
            New Customer
          </button>
          <button className="bg-white text-gray-700 font-semibold px-8 py-3 rounded border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition">
            Existing Customer
          </button>
        </div>

        <div className="flex items-center justify-center mb-12">
          <div className="h-1 w-32 bg-gray-400"></div>
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-600 mx-8 text-center">
            Let's Find You The Most Suitable Life Insurance Plan
          </h3>
          <div className="h-1 w-32 bg-gray-400"></div>
        </div>
      </div>
    </section>
  );
}

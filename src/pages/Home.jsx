import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // Data untuk info grid
  const infoGridItems = [
    {
      title: "🚀 AI for the Future",
      description: "We develop AI solutions that empower businesses to grow faster and more efficiently.",
    },
    {
      title: "📚 AI in Education",
      description: "Our AI initiatives help educate the public on the rapid advancements in technology.",
    },
    {
      title: "🌍 Proudly Representing Our Nation",
      description: "We are proud to be the first AI company from our country competing globally.",
    },
  ];

  // Data untuk pricing packages
  // GANTI detail paket (nama, harga, fitur, link WhatsApp) sesuai kebutuhan
  const pricingPackages = [
    {
      name: "Basic",
      price: "$99/month",
      features: [
        "Access to core AI features",
        "Standard support",
        "Up to 5 users",
      ],
      whatsappLink: "https://wa.me/+1234567890?text=Saya%20tertarik%20dengan%20paket%20Basic",
    },
    {
      name: "Pro",
      price: "$199/month",
      features: [
        "All Basic features",
        "Advanced AI analytics",
        "Priority support",
        "Up to 20 users",
      ],
      whatsappLink: "https://wa.me/+1234567890?text=Saya%20tertarik%20dengan%20paket%20Pro",
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "All Pro features",
        "Custom AI solutions",
        "Dedicated account manager",
        "Unlimited users",
      ],
      whatsappLink: "https://wa.me/+1234567890?text=Saya%20tertarik%20dengan%20paket%20Enterprise",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative z-10 pt-32 pb-12">
        <div className="container mx-auto px-4 text-center">
          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Orion <br />
            <span className="text-gray-400">Artificial Intelligence</span>
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            Orion is a leading AI company committed to building innovative technology solutions that not only transform
            businesses but also prioritize education, ensuring a broader impact on society and the digital future.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            <button className="glass px-8 py-4 text-white font-semibold hover:bg-gray-100 hover:text-black transition">
              Explore Our Innovations
            </button>
            <button
              className="glass px-8 py-4 text-white font-semibold hover:bg-gray-100 hover:text-black transition"
              onClick={() => navigate("/chatbot")}
            >
              Try Our First AI Chat
            </button>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {infoGridItems.map((item, index) => (
              <div key={index} className="glass p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Pricing Section */}
          <div className="mt-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Pricing Plans</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {pricingPackages.map((pkg, index) => (
                <div key={index} className="glass p-6 rounded-lg text-left">
                  <h3 className="text-2xl font-semibold mb-3">{pkg.name}</h3>
                  <p className="text-3xl font-bold text-white mb-4">{pkg.price}</p>
                  <ul className="text-gray-400 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="mb-2">• {feature}</li>
                    ))}
                  </ul>
                  <a
                    href={pkg.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass px-6 py-3 text-white font-semibold hover:bg-gray-100 hover:text-black transition inline-block"
                  >
                    Contact Us on WhatsApp
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

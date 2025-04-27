import React from "react";
import { motion } from "framer-motion";
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
  // GANTI detail paket (nama, harga, fitur, whatsappLink) sesuai kebutuhan
  const pricingPackages = [
    {
      name: "Starter",
      price: "$49/month",
      description: "Perfect for small businesses looking to kickstart their AI journey.",
      features: [
        "Core AI tools",
        "Email support",
        "Up to 3 users",
        "Basic analytics",
      ],
      whatsappLink: "https://wa.me/+1234567890?text=Saya%20tertarik%20dengan%20paket%20Starter%20untuk%20Orion%20AI%20Services",
    },
    {
      name: "Professional",
      price: "$149/month",
      description: "Ideal for growing teams ready to scale with advanced AI solutions.",
      features: [
        "All Starter features",
        "Advanced AI analytics",
        "Priority support",
        "Up to 10 users",
        "Custom integrations",
      ],
      isBestValue: true, // Badge "Best Value"
      whatsappLink: "https://wa.me/+1234567890?text=Saya%20tertarik%20dengan%20paket%20Professional%20untuk%20Orion%20AI%20Services",
    },
  ];

  // Animasi untuk fade-in dari bawah
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

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
          <motion.div
            className="mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Choose Your Plan</h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Start transforming your business with Orion AI Services. Pick a plan that fits your needs and let’s get started!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pricingPackages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative glass p-6 rounded-lg text-left bg-white/10 backdrop-blur-md hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 ${
                    pkg.isBestValue ? "border-2 border-blue-600" : ""
                  }`}
                >
                  {pkg.isBestValue && (
                    <span className="absolute top-0 right-0 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                      Best Value
                    </span>
                  )}
                  <h3 className="text-2xl font-semibold text-white mb-3">{pkg.name}</h3>
                  <p className="text-3xl font-bold text-blue-400 mb-4">{pkg.price}</p>
                  <p className="text-gray-300 mb-4">{pkg.description}</p>
                  <ul className="text-gray-400 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="mb-2 flex items-center">
                        <svg
                          className="w-5 h-5 text-blue-400 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={pkg.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Pesan Sekarang
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;

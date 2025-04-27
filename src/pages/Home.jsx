import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [activePackage, setActivePackage] = useState("Starter");

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
      whatsappLink: "https://wa.me/+1234567890?text=Saya%20tertarik%20dengan%20paket%20Professional%20untuk%20Orion%20AI%20Services",
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large organizations with unique needs.",
      features: [
        "All Professional features",
        "Custom AI solutions",
        "Dedicated support",
        "Unlimited users",
      ],
      whatsappLink: "https://wa.me/+1234567890?text=Saya%20tertarik%20dengan%20paket%20Enterprise%20untuk%20Orion%20AI%20Services",
    },
  ];

  // Animasi untuk fade-in dari bawah (section)
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Animasi untuk kartu
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // Paket aktif
  const activePkg = pricingPackages.find((pkg) => pkg.name === activePackage);

  // Fungsi untuk scroll ke section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
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
            <button
              onClick={() => scrollToSection("pricing")}
              className="glass px-8 py-4 text-white font-semibold rounded-tl-[20px] rounded-br-[20px] hover:bg-gray-100 hover:text-black transition"
            >
              Pesan Sekarang
            </button>
            <button
              onClick={() => navigate("/form")}
              className="glass px-8 py-4 text-white font-semibold rounded-tl-[20px] rounded-br-[20px] hover:bg-gray-100 hover:text-black transition"
            >
              Pesan Sekarang
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
            id="pricing"
            className="mt-16"
            initial="hidden"
 anaphylwhileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Choose Your Plan</h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Start transforming your business with Orion AI Services. Pick a plan that fits your needs and let’s get started!
            </p>
            <motion.div
              key={activePackage}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="max-w-md mx-auto"
            >
              <div className="p-6 rounded-lg text-left bg-gray-800 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300">
                <h3 className="text-2xl font-semibold text-white mb-3">{activePkg.name}</h3>
                <p className="text-3xl font-bold text-blue-400 mb-4">{activePkg.price}</p>
                <p className="text-gray-300 mb-4">{activePkg.description}</p>
                <ul className="text-gray-400 mb-6">
                  {activePkg.features.map((feature, idx) => (
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
                  href={activePkg.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-tl-[20px] rounded-br-[20px] hover:bg-blue-700 transition-colors duration-200 mb-4"
                >
                  Pesan Sekarang
                </a>
                {activePackage === "Starter" && (
                  <div className="flex gap-4">
                    <button
                      onClick={() => setActivePackage("Professional")}
                      className="px-4 py-2 bg-gray-600 text-white text-sm font-semibold rounded-lg hover:bg-gray-500 transition-colors duration-200"
                    >
                      Lihat Professional
                    </button>
                    <button
                      onClick={() => setActivePackage("Enterprise")}
                      className="px-4 py-2 bg-gray-600 text-white text-sm font-semibold rounded-lg hover:bg-gray-500 transition-colors duration-200"
                    >
                      Lihat Enterprise
                    </button>
                  </div>
                )}
                {activePackage !== "Starter" && (
                  <button
                    onClick={() => setActivePackage("Starter")}
                    className="px-4 py-2 bg-gray-600 text-white text-sm font-semibold rounded-lg hover:bg-gray-500 transition-colors duration-200"
                  >
                    Kembali ke Starter
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;

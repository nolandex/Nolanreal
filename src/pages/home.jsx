import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // Image URLs for the rotating images
  const rotatingImages = [
    "https://source.unsplash.com/random/300x200?tech,1",
    "https://source.unsplash.com/random/300x200?tech,2",
    "https://source.unsplash.com/random/300x200?tech,3",
    "https://source.unsplash.com/random/300x200?tech,4",
    "https://source.unsplash.com/random/300x200?tech,5",
  ];

  // Data untuk info grid
  const infoGridItems = [
    {
      title: " Launch Your Online Business Effortlessly",
      description: "NolanDex offers websites, popo, social media, and automation for startups. Fast, affordable, no tech skills needed. Go digital now!",
    },
    {
      title: "vro NolanDex bbbc",
      description: "Sell NolanDex's website, chatbot, and automation services as a reseller. Zero costs, high commissions. Start earning today!",
    },
    {
      title: " Simplify Digital Success with NolanDex",
      description: "NolanDex provides websites, popo, social media, and automation for small businesses. Easy, affordable, plus reseller opportunities. Succeed online!"
    },
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative z-10 pt-32 pb-12">
        <div className="container mx-auto px-4 text-center">
          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            We Create <br />
            <span className="text-gray-400">You Launch and Earn</span>
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            NolanDex is a digital setup service that helps aspiring entrepreneurs and small businesses establish a complete online presence — from websites and popo to social media content and automation. We also offer a zero-capital reseller program, empowering anyone to earn by promoting our services.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            <button className="glass px-8 py-4 text-white font-semibold hover:bg-gray-100 hover:text-black transition">
              Get Started
            </button>
            <button 
              className="glass px-8 py-4 text-white font-semibold hover:bg-gray-100 hover:text-black transition"
              onClick={() => window.open("https://wa.me/6285156779923", "_blank")}
            >
              Try Our First AI
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

          {/* Rotating Images Section */}
          <div className="mt-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Work</h2>

            <button 
              className="glass px-8 py-4 text-black font-semibold hover:bg-gray-100 hover:text-black transition mb-8"
              onClick={() => navigate("/form")}
            >
              Buy Now
            </button>

            {/* Rotating Images Gallery */}
            <div className="flex flex-wrap justify-center gap-4">
              {rotatingImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="glass p-2 rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  animate={{
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                >
                  <img 
                    src={image} 
                    alt={`Our work ${index + 1}`} 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

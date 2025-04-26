import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate(); // Inisialisasi useNavigate

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

  // Gambar untuk carousel
  const images = [
    "/images/slider1.jpg",
    "/images/slider2.jpg",
    "/images/slider3.jpg",
    "/images/slider4.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left mb-16">
            {infoGridItems.map((item, index) => (
              <div key={index} className="glass p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Carousel Section */}
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-lg">
              <motion.img
                key={images[currentIndex]}
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full object-cover h-64"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between absolute top-1/2 left-0 right-0 transform -translate-y-1/2 px-4">
              <button onClick={prevSlide} className="bg-white/50 hover:bg-white text-black p-2 rounded-full">
                ‹
              </button>
              <button onClick={nextSlide} className="bg-white/50 hover:bg-white text-black p-2 rounded-full">
                ›
              </button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Home;

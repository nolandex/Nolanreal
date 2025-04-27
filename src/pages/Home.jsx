import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import images from GitHub repository (replace with your actual image paths)
import Image1 from "./assets/carousel/ai-tech1.jpg";
import Image2 from "./assets/carousel/ai-tech2.jpg";
import Image3 from "./assets/carousel/ai-tech3.jpg";
import Image4 from "./assets/carousel/ai-tech4.jpg";
import Image5 from "./assets/carousel/ai-tech5.jpg";

const Home = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

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

  // Image data from local repository
  const carouselImages = [
    { src: Image1, alt: "AI Technology Showcase 1" },
    { src: Image2, alt: "AI Technology Showcase 2" },
    { src: Image3, alt: "AI Technology Showcase 3" },
    { src: Image4, alt: "AI Technology Showcase 4" },
    { src: Image5, alt: "AI Technology Showcase 5" }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  return (
    <>
      <section id="home" className="min-h-screen flex items-center relative z-10 pt-32 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Orion <br />
            <span className="text-gray-400">Artificial Intelligence</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            Orion is a leading AI company committed to building innovative technology solutions that not only transform
            businesses but also prioritize education, ensuring a broader impact on society and the digital future.
          </p>

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

          {/* Image Carousel */}
          <div className="relative w-full max-w-4xl mx-auto mb-12 overflow-hidden rounded-lg shadow-xl">
            <div className="flex transition-transform duration-300 ease-in-out"
                 style={{ transform: `translateX(-${currentImage * 100}%)` }}>
              {carouselImages.map((img, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img 
                    src={img.src} 
                    alt={img.alt}
                    className="w-full h-64 md:h-96 object-cover"
                  />
                </div>
              ))}
            </div>
            
            {/* Navigation Buttons */}
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition"
              aria-label="Previous image"
            >
              &lt;
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition"
              aria-label="Next image"
            >
              &gt;
            </button>
            
            {/* Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition ${currentImage === index ? 'bg-white' : 'bg-gray-500'}`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
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
        </div>
      </section>
    </>
  );
};

export default Home;

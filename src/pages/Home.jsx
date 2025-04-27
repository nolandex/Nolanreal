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

  // Data untuk swivel images (placeholder URLs, replace with your own)
  const swivelImages = [
    {
      src: "https://via.placeholder.com/300x300?text=Image+1",
      alt: "AI Innovation 1",
    },
    {
      src: "https://via.placeholder.com/300x300?text=Image+2",
      alt: "AI Innovation 2",
    },
    {
      src: "https://via.placeholder.com/300x300?text=Image+3",
      alt: "AI Innovation 3",
    },
    {
      src: "https://via.placeholder.com/300x300?text=Image+4",
      alt: "AI Innovation 4",
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

          {/* Swivel Images Section */}
          <div className="mt-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Innovations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {swivelImages.map((image, index) => (
                <div key={index} className="swivel-image-container">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="swivel-image w-full h-auto rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inline CSS for Swivel Effect */}
      <style jsx>{`
        .swivel-image-container {
          perspective: 1000px;
        }

        .swivel-image {
          transition: transform 0.5s ease;
        }

        .swivel-image:hover {
          transform: rotateY(15deg) rotateX(15deg);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </>
  );
};

export default Home;

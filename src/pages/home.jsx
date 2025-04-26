import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const roles = [
    { role: "Web Developer", emoji: "🖥️" },
    { role: "UI/UX Designer", emoji: "💻" },
    { role: "Chatbot Specialist", emoji: "🤖" },
    { role: "Database Administrator", emoji: "🗄️" },
    { role: "DevOps Engineer", emoji: "⚙️" },
    { role: "Project Management", emoji: "📋" },
  ];

  const infoGridItems = [
    {
      title: "Launch Your Online Business Effortlessly",
      description: "NolanDex offers websites, chatbots, social media, and automation for startups. Fast, affordable, no tech skills needed. Go digital now!",
    },
    {
      title: "Become a NolanDex Reseller",
      description: "Sell NolanDex's website, chatbot, and automation services as a reseller. Zero costs, high commissions. Start earning today!",
    },
    {
      title: "Simplify Digital Success with NolanDex",
      description: "NolanDex provides websites, chatbots, social media, and automation for small businesses. Easy, affordable, plus reseller opportunities. Succeed online!",
    },
  ];

  return (
    <>
      <section id="home" className="min-h-screen flex items-center relative z-10 pt-32 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            We Create <br />
            <span className="text-gray-400">You Launch and Earn</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            NolanDex is a digital setup service that helps aspiring entrepreneurs and small businesses establish a complete online presence — from websites and chatbots to social media content and automation. We also offer a zero-capital reseller program, empowering anyone to earn by promoting our services.
          </p>

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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {infoGridItems.map((item, index) => (
              <div key={index} className="glass p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Join Our Team</h2>

            <button 
              className="glass px-8 py-4 text-black font-semibold hover:bg-gray-100 hover:text-black transition mb-8"
              onClick={() => navigate("/form")}
            >
              Buy Now
            </button>

            {/* Marquee Section */}
            <div className="w-full overflow-hidden py-4 relative">
              <motion.div
                className="flex w-max"
                animate={{
                  x: ["0%", "-50%"],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {[...roles, ...roles, ...roles, ...roles].map((job, index) => (
                  <div 
                    key={`${job.role}-${index}`}
                    className="glass p-6 rounded-lg min-w-[250px] mx-6 flex-shrink-0"
                  >
                    <h3 className="text-xl font-semibold mb-3">
                      {job.emoji} {job.role}
                    </h3>
                    <p className="text-gray-400">Grow faster with NolanDex.</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

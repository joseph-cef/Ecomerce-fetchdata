import { useEffect, useState } from "react";

const Hero = () => {
  const ads = [
    "/ads/ads1.jpg",
    "/ads/ads2.jpg",
    "/ads/ads3.jpg",
    "/ads/ads4.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ads.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [ads.length]);

  return (
    <section className="w-full">
      {/* Hero Text Section */}
      <div className="relative bg-gradient-to-r from-blue-700 to-blue-400 text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto z-10 relative">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-md">
            Welcome to <span className="text-yellow-300">YOUCEF Shop</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 text-white/90">
            High-quality products, unbeatable prices, and a seamless experience.
          </p>
          <button className="bg-yellow-300 hover:bg-yellow-400 text-blue-800 px-6 py-3 rounded-full font-semibold transition duration-300 shadow-lg">
            Shop Now
          </button>
        </div>

        {/* Optional Background Decoration */}
        <div className="absolute inset-0 bg-[url('/ads/ads1.png')] bg-cover bg-center opacity-10 blur-sm"></div>
      </div>

      {/* Ad Slider Section */}
      <div className="relative overflow-hidden bg-white">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {ads.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Ad ${index + 1}`}
              className="w-full h-[300px] md:h-[450px] object-cover flex-shrink-0"
            />
          ))}
        </div>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {ads.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-blue-600 scale-110" : "bg-gray-300"
              } transition-all duration-300`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

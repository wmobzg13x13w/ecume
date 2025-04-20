import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OurSelection = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const destinations = [
    {
      title: "Cheneni",
      subtitle: "Coté du Dahar au sud de la Tunisie",
      image: "/explore1.jpg", // Remplacer par l'image réelle de Cheneni
    },
    {
      title: "Douiret",
      subtitle: "Coté du Dahar au sud de la Tunisie",
      image: "/explore2.jpg", // Remplacer par l'image réelle de Douiret
    },
    {
      title: "Toujen",
      subtitle: "Coté du Dahar au sud de la Tunisie",
      image: "/explore3.jpg", // Remplacer par l'image réelle de Toujen
    },
  ];

  return (
    <section className='py-20 px-4 bg-gray-50'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12' data-aos='fade-up'>
          <p className='text-lg text-gray-600 mb-2'>Notre sélection</p>
          <h2 className='text-4xl font-bold mb-4'>
            Destinations à recommander
          </h2>
          <div className='w-24 h-1 bg-yellow mx-auto mt-2'></div>
        </div>

        <div
          className='flex flex-col md:flex-row gap-8'
          data-aos='fade-up'
          data-aos-delay='100'>
          {/* Tabs navigation - vertical on left side */}
          <div className='md:w-1/3'>
            <div className='flex flex-col space-y-6'>
              {destinations.map((destination, index) => (
                <div
                  key={index}
                  className={`flex items-center cursor-pointer transition-all duration-300 p-4 border-l-4 ${
                    activeTab === index
                      ? "border-yellow bg-white shadow-md"
                      : "border-transparent hover:border-gray-300"
                  }`}
                  onClick={() => setActiveTab(index)}>
                  <div className='ml-2'>
                    <h3
                      className={`text-xl font-semibold ${
                        activeTab === index ? "text-yellow" : "text-gray-700"
                      }`}>
                      {destination.title}
                    </h3>
                    <p
                      className={`text-sm ${
                        activeTab === index ? "text-gray-700" : "text-gray-500"
                      }`}>
                      {destination.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image display - on right side */}
          <div className='md:w-2/3'>
            <div className='relative h-[500px] overflow-hidden rounded-lg shadow-xl'>
              {destinations.map((destination, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    activeTab === index ? "opacity-100" : "opacity-0"
                  }`}>
                  <img
                    src={destination.image}
                    alt={destination.title}
                    className='w-full h-full object-cover'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSelection;

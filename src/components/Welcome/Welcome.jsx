import React, { useEffect } from "react";
import img4 from "/bienvenue.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Welcome = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);
  return (
    <section className='container mx-auto px-4 py-16'>
      <div className='flex flex-col md:flex-row items-center gap-8'>
        <div
          className='w-full md:w-1/2 flex flex-col items-center'
          data-aos='fade-right'>
          <img
            src={img4}
            alt='Welcome'
            className=' object-contain h-screen rounded-lg shadow-lg'
          />
        </div>
        <div
          className='w-full md:w-1/2 space-y-6'
          data-aos='fade-left'
          data-aos-delay='200'>
          <h2 className='text-5xl font-bold text-black'>Bienvenue à ECUME</h2>
          <p className='text-lg text-gray-700 leading-relaxed font-semibold'>
            Notre vision est d'être à l'avant-garde de la transformation
            numérique du patrimoine culturel, contribuant ainsi à préserver,
            célébrer et transmettre la diversité culturelle de manière
            accessible, éducative et passionnante pour les générations à venir.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;

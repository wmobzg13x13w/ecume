import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className='py-20 px-4 bg-cream'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6' data-aos='fade-right'>
            <h2 className='text-4xl font-bold mb-4'>À propos ECUME</h2>
            <div className='w-24 h-1 bg-yellow'></div>
            <p className='text-gray-700 text-lg'>
              En tant que concepteurs d’espace et de mémoire,{" "}
              <span className='text-yellow'>ECUME CULTURE DIGITALE LAB</span>{" "}
              vous invite à vous connecter au passé et à explorer l'avenir,
              redécouvrant ainsi le patrimoine matériel et immatériel avec une
              approche novatrice, immersive et numérique. Rejoignez-nous dans
              cette passionnante aventure où l'union entre le passé et le futur
              donne naissance à des créations culturelles uniques.
            </p>
            <button className='bg-yellow px-6 py-3 text-black font-semibold hover:bg-black hover:text-white duration-300'>
              Voir plus
            </button>
          </div>
          <div className='relative' data-aos='fade-left'>
            <img
              src='/founders.jpg'
              alt='À propos ECUME'
              className='w-full h-screen object-cover rounded-lg shadow-xl'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

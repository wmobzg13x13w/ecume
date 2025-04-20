import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Newsletter = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className='py-20 px-4 bg-yellow'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6' data-aos='fade-right'>
            <h2 className='text-4xl font-bold mb-4'>
              Inscrivez-vous à notre newsletter!
            </h2>
            <div className='w-24 h-1 bg-yellow'></div>
            <p className='text-gray-700 text-lg'>
              Soyez le premier à découvrir nos événements et les actualités de
              Ecume
            </p>
            <form className='space-y-4'>
              <input
                type='email'
                placeholder='Votre adresse email'
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow'
                required
              />
              <button
                type='submit'
                className='w-full bg-white px-6 py-3 text-black font-semibold hover:bg-black hover:text-white duration-300 rounded-lg'>
                S'abonner
              </button>
            </form>
          </div>
          <div className='relative' data-aos='fade-left'>
            <img
              src='/explore4.jpg'
              alt='Newsletter ECUME'
              className='w-full h-[600px] object-cover rounded-lg shadow-xl'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

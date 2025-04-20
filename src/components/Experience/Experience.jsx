import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className=' bg-black relative overflow-hidden'>
      {/* Darker overlay for the entire section */}
      <div className='absolute inset-0 bg-black/60  pointer-events-none'></div>

      <div className='max-w-7xl mx-auto px-4 relative z-10'>
        <div className='flex flex-col items-center justify-center'>
          {/* Centered Video container */}
          <div className='w-full max-w-md mx-auto relative' data-aos='fade-up'>
            <div className='aspect-[9/16] relative overflow-hidden shadow-2xl'>
              <video
                className='w-full h-full object-cover'
                autoPlay
                loop
                muted
                playsInline>
                <source src='/Video-2.mp4' type='video/mp4' />
                Votre navigateur ne supporte pas la lecture vidéo.
              </video>
            </div>
          </div>
          {/* Overlay on top of the video */}
          <div className='absolute inset-0 w-full bg-black/60 flex flex-col items-center justify-center text-center p-6'>
            {/* Text content - positioned over the video */}
            <div className='text-white' data-aos='fade-up' data-aos-delay='100'>
              <p className='text-base md:text-2xl mb-6'>
                REJOIGNEZ-NOUS DANS NOTRE AVENTURE DÈS MAINTENANT !
              </p>
              <h2 className='text-3xl md:text-7xl font-bold mb-4 leading-tight'>
                Expériences, parcours, ateliers et bien plus encore.
              </h2>

              {/* Button */}
              <div data-aos='fade-up' data-aos-delay='200'>
                <button className='bg-yellow px-6 py-3 text-black font-semibold hover:bg-black hover:text-white duration-300'>
                  Devenir membre
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

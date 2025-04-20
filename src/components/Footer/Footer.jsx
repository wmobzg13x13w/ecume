import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <footer className='bg-white text-black py-16 px-4'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
          {/* Menu Section */}
          <div className='space-y-6' data-aos='fade-up'>
            <h3 className='text-2xl font-bold mb-4'>Menu</h3>
            <div className='w-16 h-1 bg-yellow'></div>
            <ul className='space-y-3'>
              <li>
                <a href='#' className='hover:text-yellow transition-colors'>
                  Accueil
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-yellow transition-colors'>
                  À propos
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-yellow transition-colors'>
                  Actualités
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-yellow transition-colors'>
                  Événements
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className='space-y-6' data-aos='fade-up' data-aos-delay='100'>
            <h3 className='text-2xl font-bold mb-4'>Suivez-nous</h3>
            <div className='w-16 h-1 bg-yellow'></div>
            <ul className='space-y-3'>
              <li>
                <a href='#' className='hover:text-yellow transition-colors'>
                  Facebook
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-yellow transition-colors'>
                  Instagram
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-yellow transition-colors'>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-yellow transition-colors'>
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className='space-y-6' data-aos='fade-up' data-aos-delay='200'>
            <h3 className='text-2xl font-bold mb-4'>Contact</h3>
            <div className='w-16 h-1 bg-yellow'></div>
            <ul className='space-y-3'>
              <li>contact@ecume.tn</li>
              <li>+216 99 084 410</li>
              <li>Tunis, Tunisie</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div
          className='text-center mt-12 pt-8 border-t border-gray-700'
          data-aos='fade-up'
          data-aos-delay='300'>
          <p>&copy; {new Date().getFullYear()} ECUME. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

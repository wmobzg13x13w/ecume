import React, { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import CartSlider from "../CartSlider/CartSlider";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useCart();
  const navigate = useNavigate();

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (isHomePage) {
        const heroSection = document.querySelector(".h-screen");
        if (heroSection) {
          const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
          setIsScrolled(window.scrollY >= heroBottom - 96); // 96px is navbar height (h-24)
        }
      }
    };

    if (isHomePage) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setIsScrolled(true); // Always show solid background on other pages
    }
  }, [isHomePage]);

  return (
    <nav
      className={` w-full  transition-colors duration-300 ${
        isScrolled ? "bg-white " : "bg-transparent z-50 fixed"
      }`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-24'>
          <div className='flex items-center gap-8'>
            <img src='/logo.png' alt='Ecume Logo' className='h-16' />
            {/* Desktop menu */}
            <ul className='space-x-8 hidden md:flex '>
              <li>
                <a
                  href='#home'
                  className='text-black hover:text-yellow transition-colors font-extrabold'
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector("#home");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}>
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href='#about'
                  className='text-black hover:text-yellow transition-colors font-extrabold'
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector("#about");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}>
                  À propos
                </a>
              </li>
              <li>
                <a
                  href='#news'
                  className='text-black hover:text-yellow transition-colors font-extrabold'
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector("#news");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}>
                  Actualités
                </a>
              </li>
              <li>
                <a
                  href='#events'
                  className='text-black hover:text-yellow transition-colors font-extrabold'
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector("#events");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}>
                  Événements
                </a>
              </li>
              <li>
                <a
                  href='#blog'
                  className='text-black hover:text-yellow transition-colors font-extrabold'
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector("#blog");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}>
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-black hover:text-yellow focus:outline-none'>
              <svg
                className='h-6 w-6'
                stroke='currentColor'
                fill='none'
                viewBox='0 0 24 24'>
                {isOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Cart and Member buttons */}
          <div className='hidden md:flex items-center space-x-4'>
            <button
              onClick={() => setIsCartOpen(true)}
              className='relative p-2 text-black hover:text-yellow transition-colors'>
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                />
              </svg>
              {cart.items.length > 0 && (
                <span className='absolute -top-1 -right-1 bg-yellow text-black w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold'>
                  {cart.items.length}
                </span>
              )}
            </button>
            <button
              onClick={() => navigate("/contact")}
              className='bg-yellow px-6 py-3 text-black font-semibold hover:bg-black hover:text-white duration-300'>
              Devenir membre
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden bg-white shadow-lg rounded-lg mt-2 py-2`}>
          <div className='flex flex-col gap-4 px-4'>
            <a
              href='#home'
              className='text-black font-medium py-2 hover:text-yellow transition-colors duration-300'
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector("#home");
                element?.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
              }}>
              Accueil
            </a>
            <a
              href='#about'
              className='text-black font-medium py-2 hover:text-yellow transition-colors duration-300'
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector("#about");
                element?.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
              }}>
              À propos
            </a>
            <a
              href='#news'
              className='text-black font-medium py-2 hover:text-yellow transition-colors duration-300'
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector("#news");
                element?.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
              }}>
              Actualités
            </a>
            <a
              href='#events'
              className='text-black font-medium py-2 hover:text-yellow transition-colors duration-300'
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector("#events");
                element?.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
              }}>
              Événements
            </a>
            <a
              href='#blog'
              className='text-black font-medium py-2 hover:text-yellow transition-colors duration-300'
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector("#blog");
                element?.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
              }}>
              Blog
            </a>
            <button className='bg-yellow w-full px-6 py-3 text-black font-semibold hover:bg-black hover:text-white duration-300 mb-2'>
              Devenir membre
            </button>
          </div>
        </div>
      </div>
      <CartSlider isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </nav>
  );
};

export default Navbar;

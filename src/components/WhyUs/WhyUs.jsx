import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyUs = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    // Horizontal scroll effect
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollPosition = window.scrollY;
        const scrollSpeed = 0.5; // Adjust speed as needed
        scrollContainerRef.current.style.transform = `translateX(-${
          scrollPosition * scrollSpeed
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const reasons = [
    {
      title: "IMPACT SOCIAL",
      description:
        "Ecume s'efforce de marquer un impact social significatif en préservant le patrimoine culturel et en favorisant l'inclusion. En collaborant avec les communautés locales et en rendant le patrimoine accessible à tous, nous contribuons non seulement à la préservation de l'histoire, mais aussi au développement économique local et à la promotion du tourisme culturel.",
    },
    {
      title: "ÉDUCATION ENRICHISSANTE",
      description:
        "Au-delà du simple divertissement, Ecume vise à éduquer et à inspirer. Les expériences offertes par Ecume sont conçues pour enrichir la connaissance et la compréhension du patrimoine culturel et historique. Que ce soit pour les étudiants, les passionnés d'histoire ou les visiteurs curieux, chaque immersion avec Ecume promet une exploration éclairante et une appréciation renouvelée du passé.",
    },
    {
      title: "INTÉRACTIVITÉ ENGAGEANTE",
      description:
        "Avec Ecume, l'histoire ne se contente pas d'être racontée, elle est vécue. Les participants sont invités à interagir avec les environnements virtuels, à explorer les détails et à découvrir des aspects souvent méconnus du patrimoine culturel. Cette interactivité transforme passivement les spectateurs en participants actifs, favorisant ainsi une compréhension plus profonde et une expérience plus mémorable.",
    },
  ];

  const galleryImages = [
    "/explore1.jpg",
    "/explore2.jpg",
    "/explore3.jpg",
    "/explore4.jpg",
    "/explore5.jpg",
    "/explore6.jpg",
    "/bg1.jpg",
    "/bg2.jpg",
    "/bg3.jpg",
  ];

  return (
    <section className='py-20 px-4 bg-gray-50'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16' data-aos='fade-up'>
          <h2 className='text-4xl font-bold mb-4'>POURQUOI CHOISIR ECUME ?</h2>
          <div className='w-24 h-1 bg-blue-500 mx-auto'></div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {reasons.map((reason, index) => (
            <div
              key={index}
              className='bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center'
              data-aos={`fade-up`}
              data-aos-delay={index * 100}>
              <h3 className='text-xl font-semibold mb-3'>{reason.title}</h3>
              <p className='text-gray-600'>{reason.description}</p>
            </div>
          ))}
        </div>

        <div className='mt-20 overflow-hidden' data-aos='fade-up'>
          <h3 className='text-2xl font-bold mb-6 text-center'>NOTRE GALERIE</h3>
          <div className='w-full relative'>
            <div ref={scrollContainerRef} className='flex space-x-6 py-8 w-max'>
              {galleryImages.map((img, index) => (
                <div
                  key={index}
                  className='w-80 h-60 flex-shrink-0 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300'>
                  <img
                    src={img}
                    alt={`Gallery image ${index + 1}`}
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

export default WhyUs;

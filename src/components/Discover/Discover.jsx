import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Discover = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const discoverItems = [
    {
      title: "Expériences immersives",
      description:
        "Vivez des aventures captivantes où la réalité se fond avec la technologie pour vous transporter dans des mondes fascinants et inoubliables.",
      image: "/explore1.jpg",
    },
    {
      title: "Ateliers interatifs",
      description:
        "Plongez dans des activités captivantes qui encouragent la participation active et favorisent l'apprentissage pratique et collaboratif.",
      image: "/explore3.jpg",
    },
    {
      title: "Parcours intelligents",
      description:
        "Découvrez des itinéraires personnalisés et dynamiques, conçus pour s'adapter à vos besoins et vous guider de manière intuitive vers des expériences enrichissantes et pertinentes.",
      image: "/explore5.jpg",
    },
  ];

  return (
    <section className='py-20 px-4 bg-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16' data-aos='fade-up'>
          <h2 className='text-4xl font-bold mb-4'>Découvrir</h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Découvrez la Tunisie à travers les yeux des architectes d'Ecume.
          </p>
          <div className='w-24 h-1 bg-blue-500 mx-auto mt-6'></div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {discoverItems.map((item, index) => (
            <div
              key={index}
              className='relative h-96 rounded-lg overflow-hidden group shadow-xl'
              data-aos='fade-up'
              data-aos-delay={index * 100}>
              <img
                src={item.image}
                alt={item.title}
                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6'>
                <h3 className='text-2xl font-bold text-white mb-2'>
                  {item.title}
                </h3>
                <div className='h-0 group-hover:h-auto overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100'>
                  <p className='text-white text-sm'>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discover;

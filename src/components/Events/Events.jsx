import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";

const Events = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const eventsData = [
    {
      src: "/explore1.jpg",
      title: "Nettoyage des plages",
      description:
        "Joignez-vous à nous pour nettoyer les plages locales et protéger notre écosystème marin.",
    },
    {
      src: "/explore2.jpg",
      title: "Exposition marine",
      description:
        "Découvrez les merveilles de la vie marine à travers notre exposition interactive.",
    },
    {
      src: "/explore3.jpg",
      title: "Conférence sur la conservation",
      description:
        "Apprenez des experts comment nous pouvons tous contribuer à la préservation des océans.",
    },
    {
      src: "/explore4.jpg",
      title: "Atelier de photographie sous-marine",
      description:
        "Perfectionnez vos compétences en photographie sous-marine avec nos instructeurs professionnels.",
    },
    {
      src: "/explore5.jpg",
      title: "Festival de la mer",
      description:
        "Célébrez la richesse de notre patrimoine maritime lors de notre festival annuel.",
    },
    {
      src: "/explore6.jpg",
      title: "Excursion en bateau",
      description:
        "Explorez les côtes et observez la faune marine dans son habitat naturel.",
    },
  ];

  return (
    <section className='py-20 px-4 bg-gray-50'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12' data-aos='fade-up'>
          <h2 className='text-4xl font-bold mb-4'>LES ÉVÉNEMENTS</h2>
          <p className='text-xl text-gray-600 mb-6'>À NE PAS RATTER</p>
          <p className='text-gray-700 max-w-2xl mx-auto'>
            Participez à nos événements exclusifs et découvrez le monde marin
            comme jamais auparavant. Nos activités sont conçues pour éduquer,
            inspirer et créer des souvenirs inoubliables.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
          }}
          className='mySwiper px-4 py-4'>
          {eventsData.map((item, index) => (
            <SwiperSlide
              key={index}
              className='p-1 sm:p-2'
              data-aos='fade-up'
              data-aos-delay={index * 100}>
              <div className='flex flex-col gap-2 sm:gap-4 p-3 sm:p-6 shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-2xl h-full'>
                <div className='aspect-[3/4] overflow-hidden rounded-2xl shadow-lg'>
                  <img
                    src={item.src}
                    alt={item.title}
                    className='w-full h-full object-cover transform hover:scale-110 transition-transform duration-300'
                  />
                </div>
                <div className='flex-grow flex flex-col'>
                  <h3 className='text-base sm:text-lg font-semibold text-gray-800 mb-2'>
                    {item.title}
                  </h3>
                  <p className='text-sm text-gray-600'>{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Events;

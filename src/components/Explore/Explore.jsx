import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";

const Explore = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);
  const imageData = [
    { src: "/explore1.jpg", title: "Coral Reefs" },
    { src: "/explore2.jpg", title: "Marine Wildlife" },
    { src: "/explore3.jpg", title: "Ocean Depths" },
    { src: "/explore4.jpg", title: "Coastal Life" },
    { src: "/explore5.jpg", title: "Underwater Flora" },
    { src: "/explore6.jpg", title: "Sea Adventures" },
  ];

  return (
    <section className='py-20 px-4 bg-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12' data-aos='fade-up'>
          <h2 className='text-4xl font-bold mb-4'>Explore Our World</h2>
          <p className='text-xl text-gray-600 mb-6'>
            Discover the beauty of marine life
          </p>
          <p className='text-gray-700 max-w-2xl mx-auto'>
            Immerse yourself in the fascinating world beneath the waves. Our
            collection showcases the diverse marine ecosystems and the
            incredible species that call them home.
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
            1024: { slidesPerView: 4 },
          }}
          className='mySwiper px-4 py-4'>
          {imageData.map((item, index) => (
            <SwiperSlide
              key={index}
              className='p-1 sm:p-2'
              data-aos='fade-up'
              data-aos-delay={index * 100}>
              <div className='flex flex-col gap-2 sm:gap-4 p-3 sm:p-6 shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-2xl'>
                <div className='aspect-[3/4] sm:aspect-[2/3] overflow-hidden rounded-2xl shadow-lg'>
                  <img
                    src={item.src}
                    alt={item.title}
                    className='w-full h-full object-cover transform hover:scale-110 transition-transform duration-300'
                  />
                </div>
                <h3 className='text-base sm:text-lg font-semibold text-center text-gray-800'>
                  {item.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Explore;

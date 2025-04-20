import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const News = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const newsData = [
    {
      id: 0,
      date: "15 Mars 2024",
      title: "Plongez dans l'histoire avec Ecume",
      description:
        "Bienvenue Découvrez le patrimoine tunisien d'une  manière totalement nouvelle: Bienvenue chez Ecume, votre portail vers un voyage captivant à travers le  riche patrimoine culturel de la Tunisie. Nous sommes ravis de vous accueillir  dans notre communauté où l'histoire prend vie grâce à l'innovation  technologique et à la passion pour la préservation de notre Héritage culturel.",
      image: "/explore1.jpg",
    },
    {
      id: 1,
      date: "10 Mars 2024",
      title: "À la Découverte des Villages Berbères du Dahar",
      description:
        "Plongée dans l'Authenticité  et la Richesse Culturelle de la Tunisie Profonde  Situé au sud-ouest de la Tunisie, le Dahar est une région montagneuse aride  parsemée de villages berbères pittoresques. Cette région authentique et  préservée offre une immersion totale dans la culture berbère et ses traditions  ancestrales, loin des foules de touristes.  Un voyage dans le [..]",
      image: "/explore2.jpg",
    },
  ];

  return (
    <section className='py-20 px-4 bg-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16' data-aos='fade-up'>
          <h2 className='text-4xl font-bold mb-4'>En Toute Actualité</h2>
          <p className='text-xl text-gray-600'>Les Dernières Nouvelles</p>
        </div>

        <div className='space-y-16'>
          {newsData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
              <div
                className={`flex-1 ${
                  index % 2 === 0 ? "lg:pr-8 text-left" : "lg:pl-8 text-right"
                }`}>
                <p className='text-black mb-2 bg-yellow text-left w-fit p-1'>
                  {item.date}
                </p>
                <h3 className='text-2xl font-bold mb-4'>{item.title}</h3>
                <p className='text-gray-700 leading-relaxed'>
                  {item.description}
                </p>
                <Link
                  to={`/blog/${item.id}`}
                  className='inline-block mt-4 bg-yellow px-6 py-3 text-black font-semibold hover:bg-black hover:text-white duration-300'>
                  Lire Plus
                </Link>
              </div>
              <div className='flex-1'>
                <div className='aspect-[4/3] overflow-hidden rounded-lg shadow-xl'>
                  <img
                    src={item.image}
                    alt={item.title}
                    className='w-full h-full object-cover transform hover:scale-105 transition-transform duration-300'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;

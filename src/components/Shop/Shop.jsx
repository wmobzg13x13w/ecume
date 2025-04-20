import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useCart } from "../../context/CartContext";

const Shop = () => {
  const { addToCart } = useCart();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const game = {
    title: 'Jeu de mémoire  "فردة و لقات أختها"',
    description:
      "Plongez-vous dans la culture tunisienne avec ce jeu de mémoire captivant ! Retrouvez les paires d'habits traditionnels ou accessoires tunisiens identiques tout en vous amusant. Testez votre mémoire tout en explorant la beauté et la diversité des costumes régionaux tunisiens.",
    price: "45 DT",
    image: "/farda.png",
    features: [
      "Age : 6 ans et +",
      "Nombre de joueurs : 2 à 6",
      "Durée moyenne : 30 min",
      "Thème : Culture, Histoire, Mémoire, Diversité",
    ],
  };

  return (
    <section className='py-20 px-4 bg-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16' data-aos='fade-up'>
          <h2 className='text-4xl font-bold mb-4'>Notre Création</h2>
          <p className='text-xl text-gray-600'>Une expérience ludique unique</p>
          <div className='w-24 h-1 bg-yellow mx-auto mt-4'></div>
        </div>

        <div className='max-w-4xl mx-auto'>
          <div
            className='bg-cream rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300'
            data-aos='fade-up'>
            <div className='grid md:grid-cols-2 gap-0'>
              <div className='relative'>
                <img
                  src={game.image}
                  alt={game.title}
                  className='w-full h-full object-cover'
                />
                <div className='absolute top-4 right-4 bg-yellow text-black px-4 py-1 rounded-full text-sm font-semibold'>
                  Édition Limitée
                </div>
              </div>
              <div className='p-8'>
                <h3 className='text-3xl font-bold mb-4'>{game.title}</h3>
                <p className='text-gray-600 mb-6 leading-relaxed'>
                  {game.description}
                </p>
                <div className='space-y-4 mb-8'>
                  {game.features.map((feature, index) => (
                    <div key={index} className='flex items-center'>
                      <div className='w-2 h-2 bg-yellow rounded-full mr-3'></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-2xl font-bold text-yellow'>
                    {game.price}
                  </span>
                  <button
                    onClick={() => addToCart(game)}
                    className='bg-yellow px-8 py-3 text-black font-semibold hover:bg-black hover:text-white transition-colors duration-300 rounded-lg'>
                    Commander
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;

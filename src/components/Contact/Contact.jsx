import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de soumission du formulaire à implémenter
  };

  return (
    <section className='py-20 px-4 bg-white'>
      <div className='max-w-4xl mx-auto'>
        <div className='text-center mb-16' data-aos='fade-up'>
          <h2 className='text-4xl font-bold mb-4'>Devenir Membre</h2>
          <p className='text-xl text-gray-600'>
            Rejoignez notre communauté passionnée de culture
          </p>
          <div className='w-24 h-1 bg-yellow mx-auto mt-4'></div>
        </div>

        <div
          className='bg-cream rounded-xl p-8 shadow-2xl'
          data-aos='fade-up'
          data-aos-delay='200'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <label
                  htmlFor='firstName'
                  className='block text-sm font-medium text-gray-700 mb-2'>
                  Prénom
                </label>
                <input
                  type='text'
                  id='firstName'
                  name='firstName'
                  required
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow focus:border-transparent'
                />
              </div>
              <div>
                <label
                  htmlFor='lastName'
                  className='block text-sm font-medium text-gray-700 mb-2'>
                  Nom
                </label>
                <input
                  type='text'
                  id='lastName'
                  name='lastName'
                  required
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow focus:border-transparent'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700 mb-2'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                required
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow focus:border-transparent'
              />
            </div>

            <div>
              <label
                htmlFor='phone'
                className='block text-sm font-medium text-gray-700 mb-2'>
                Téléphone
              </label>
              <input
                type='tel'
                id='phone'
                name='phone'
                required
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow focus:border-transparent'
              />
            </div>

            <div>
              <label
                htmlFor='message'
                className='block text-sm font-medium text-gray-700 mb-2'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                rows='4'
                required
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow focus:border-transparent'></textarea>
            </div>

            <div className='text-center'>
              <button
                type='submit'
                className='bg-yellow px-8 py-3 text-black font-semibold hover:bg-black hover:text-white transition-colors duration-300 rounded-lg'>
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

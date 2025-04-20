import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Welcome from "./components/Welcome/Welcome";
import Explore from "./components/Explore/Explore";
import Events from "./components/Events/Events";
import WhyUs from "./components/WhyUs/WhyUs";
import Discover from "./components/Discover/Discover";
import OurSelection from "./components/OurSelection/OurSelection";
import Experience from "./components/Experience/Experience";
import News from "./components/News/News";
import AboutUs from "./components/AboutUs/AboutUs";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import Blog from "./components/Blog/Blog";
import Shop from "./components/Shop/Shop";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className='min-h-screen'>
          <Navbar />
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <div id='home'>
                    <Hero />
                  </div>
                  <Welcome />
                  <Explore />
                  <div id='events'>
                    <Events />
                  </div>
                  <WhyUs />
                  <Discover />
                  <OurSelection />
                  <Experience />
                  <Shop />
                  <div id='news'>
                    <News />
                  </div>
                  <div id='about'>
                    <AboutUs />
                  </div>
                  <Newsletter />
                </>
              }
            />
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog/:slug' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;

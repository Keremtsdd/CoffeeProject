import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from './Components/Header';
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menü from "./Pages/Menü";
import ScrollToTop from "./Components/ScrollToTop";
import Language from "./Components/Language";
import "./i18n";
import Location from "./Pages/Location";
import PagesScrollTop from "./Components/PagesScrollTop";
import LoadingScreen from './Components/LoadingScreen';
import React, { useState, useEffect } from 'react';
import Blog from "./Pages/Blog";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoaded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isLoaded]);

  return (
    <BrowserRouter>
      <PagesScrollTop />
      <ScrollToTop />
      {!isLoaded && <LoadingScreen />}
      <div className={`h-[200vh] ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}>
        <header className='absolute -top-4 left-0 w-full bg-black bg-opacity-0 text-white p-4 z-40 '>
          <Header />
        </header>
        <div className='absolute -top-4 left-0 w-full bg-black bg-opacity-0 text-white p-4 z-50 flex justify-end'>
          <Language />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menü" element={<Menü />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/location" element={<Location />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from './Components/Header'
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

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3000); // 3 saniye sonra sayfa tamamen yüklenir
    return () => clearTimeout(timer);
  }, []);


  return (
    <BrowserRouter>
      <PagesScrollTop />
      <ScrollToTop />
      {!isLoaded && <LoadingScreen />}
      <div className="h-[200vh]">
        <header className='absolute -top-4 left-0 w-full bg-black bg-opacity-0 text-white p-4 z-10 '>
          <Header />
        </header>
        <div className='absolute -top-4 left-0 w-full bg-black bg-opacity-0 text-white p-4 z-10 flex justify-end'>
          <Language />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menü" element={<Menü />} />
          <Route path="/location" element={<Location />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

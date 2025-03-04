import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Menü from './Pages/Menü';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <div className="h-[200vh] ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/menü' element={<Menü />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App

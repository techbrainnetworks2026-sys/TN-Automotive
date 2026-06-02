import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home';
import Product1 from './components/Products/ProductPages/Product1';
import Product2 from './components/Products/ProductPages/Product2';
import Product3 from './components/Products/ProductPages/Product3';
import Product4 from './components/Products/ProductPages/Product4';
import Product5 from './components/Products/ProductPages/Product5';
import Product6 from './components/Products/ProductPages/Product6';
import Product7 from './components/Products/ProductPages/Product7';
import Product8 from './components/Products/ProductPages/Product8';
import Product9 from './components/Products/ProductPages/Product9';
import Product10 from './components/Products/ProductPages/Product10';
import Product11 from './components/Products/ProductPages/Product11';
import Product12 from './components/Products/ProductPages/Product12';
import Product13 from './components/Products/ProductPages/Product13';
import Product14 from './components/Products/ProductPages/Product14';
import Product15 from './components/Products/ProductPages/Product15';
import Product16 from './components/Products/ProductPages/Product16';
import Product17 from './components/Products/ProductPages/Product17';
import Product18 from './components/Products/ProductPages/Product18';
import Product19 from './components/Products/ProductPages/Product19';
import Product20 from './components/Products/ProductPages/Product20';
import './index.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/1" element={<Product1 />} />
          <Route path="/product/2" element={<Product2 />} />
          <Route path="/product/3" element={<Product3 />} />
          <Route path="/product/4" element={<Product4 />} />
          <Route path="/product/5" element={<Product5 />} />
          <Route path="/product/6" element={<Product6 />} />
          <Route path="/product/7" element={<Product7 />} />
          <Route path="/product/8" element={<Product8 />} />
          <Route path="/product/9" element={<Product9 />} />
          <Route path="/product/10" element={<Product10 />} />
          <Route path="/product/11" element={<Product11 />} />
          <Route path="/product/12" element={<Product12 />} />
          <Route path="/product/13" element={<Product13 />} />
          <Route path="/product/14" element={<Product14 />} />
          <Route path="/product/15" element={<Product15 />} />
          <Route path="/product/16" element={<Product16 />} />
          <Route path="/product/17" element={<Product17 />} />
          <Route path="/product/18" element={<Product18 />} />
          <Route path="/product/19" element={<Product19 />} />
          <Route path="/product/20" element={<Product20 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};



export default App;


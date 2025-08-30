import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './landing_page/home/HomePage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import SupportPage from './landing_page/support/SupportPage';
import Signup from './landing_page/signup/Signup';
import ProductPage from './landing_page/product/ProductPage';
import PricingPage from './landing_page/pricing/PricingPage';
import AboutPage from './landing_page/about/AboutPage';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/support" element={<SupportPage />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;

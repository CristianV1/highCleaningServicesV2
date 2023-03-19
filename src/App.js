import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import AboutUsSection from './components/AboutUsSection/AboutUsSection';
import WhyUsSection from './components/WhyUsSection/WhyUsSection';
import { ServicesSection } from './components/ServicesSection/ServicesSection';
import { Footer } from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <AboutUsSection/>
      <WhyUsSection/>
      <ServicesSection/>
      <Footer/>
    </div>
  );
}

export default App;

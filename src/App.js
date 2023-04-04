import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import AboutUsSection from './components/AboutUsSection/AboutUsSection';
import WhyUsSection from './components/WhyUsSection/WhyUsSection';
import { ServicesSection } from './components/ServicesSection/ServicesSection';
import { Footer } from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { useEffect,useRef } from 'react';

function App() {
  const homeSection = useRef(null);
  const aboutSection = useRef(null);
  const whySection = useRef(null);
  const servicesSection = useRef(null);

  useEffect(()=>{
    window.addEventListener('scroll',handleOnScroll)   
},[])

const handleOnScroll = (e)=>{
  console.log(aboutSection.current.offsetHeight)
    console.log("AAAAAAAAA")
    console.log(e);
  }
 
  return (
    <div>
      <Navbar/>
      <Home />
      <AboutUsSection ref={aboutSection}/>
      <WhyUsSection/>
      <ServicesSection/>
      <Footer/>
    </div>
  );
}

export default App;

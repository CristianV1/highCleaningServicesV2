import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import AboutUsSection from './components/AboutUsSection/AboutUsSection';
import WhyUsSection from './components/WhyUsSection/WhyUsSection';
import { ServicesSection } from './components/ServicesSection/ServicesSection';
import { Footer } from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import navStyles from './components/Navbar/Navbar.module.css'
import { useEffect,useRef } from 'react';
import PrincipalSection from './components/PrincipalSection/PrincipalSection';


function App() {
  const homeSection = useRef(null);
  const aboutSection = useRef(null);
  const whySection = useRef(null);
  const servicesSection = useRef(null);
   const home = useRef(null);
  const about = useRef(null);
  const whyus = useRef(null);
  const services = useRef(null);

  useEffect(()=>{
    window.addEventListener('scroll',handleOnScroll)   
},[])

const handleOnScroll = (e)=>{
  activeLink();
  }

  const links = {
    home: home,
    about: about,
    whyus: whyus,
    services: services,
  };

  const sections = {
    home: homeSection,
    about: aboutSection,
    whyus: whySection,
    services: servicesSection,
  };

  function addClassToRefs(){
    for (const key in sections) {
      let currentSection = sections[key]?.current;
      currentSection?.classList.add('revealSection')
      }
    }
  
 
  function activeLink() {
    var current = "";
    let yOfset = window.scrollY;
    for (const key in sections) {
      let currentSection = sections[key]?.current;
      const sectionTop = currentSection?.offsetTop;
      //appear effect 
      let windowHeight = window.innerHeight;
      let revealTop = currentSection.getBoundingClientRect().top;
      let revealPoint = 150
      
      if(revealTop < windowHeight - revealPoint){
        currentSection.classList.add('activeSection')
      }else{
        currentSection.classList.remove('activeSection')
      }
           
      if (yOfset >= sectionTop - 250) {
        current = currentSection.getAttribute("id");
      }
    }

    console.log(current);

    for (const key in links) {
      let currentLink = links[key]?.current;
      currentLink?.classList.remove(navStyles.active);
      

      //link effect
      if (currentLink?.href.includes(current)) {
        currentLink?.classList.add(navStyles.active);
      }
    }
  }

  function revealSection(){

  }

  useEffect(()=>{
    activeLink();
    addClassToRefs();
  },[])

  return (
    <div>
      <Navbar refs={links}/>
      <PrincipalSection ref={homeSection}/>
      <AboutUsSection ref={aboutSection}/>
      <WhyUsSection ref={whySection}/>
      <ServicesSection ref={servicesSection}/>
      <Footer/>
    </div>
  );
}

export default App;

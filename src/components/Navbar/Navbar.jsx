import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css';
import logo2 from '../../assets/logov3.svg'
import phone from '../../assets/phone.svg'
import {CgMoreO} from 'react-icons/cg'
import lineIcon from '../../assets/downline.svg'
import downIcon from '../../assets/dobleline.svg'

const Navbar = ({refs}) => {

    const {home,about,whyus,services} = refs
    
    const sendToSection = (e,idName) =>{
        e.preventDefault();
        const section = document.getElementById(idName);
        if(section){
            section.scrollIntoView({behavior:'smooth'})
            setIsActive(false);
        }
    }

  

    const [isActive,setIsActive] = useState(false);
    return (
    <nav style={{overflow:isActive? "visible" : "hidden"}} className={styles.navbar}>
        <div className={styles.logo__container}>
            <img src={logo2}/>
            <img className={styles.logo__line} src={lineIcon}/>
        </div>
        <ul className={styles.links__container}>
            <li onClick={
                ()=>setIsActive(!isActive)
            } className={isActive ? `${styles.open__links} ${styles.active__mobile__menu}` : `${styles.open__links}` }>
                <span><CgMoreO/></span>
            </li>
            <li className={styles.links__special__link}>
                <a href='home_section' ref={home} onClick={(e)=>sendToSection(e,"home_section")}>
                    HOME
                </a>
            </li>
            <li>
                <a href='aboutus_section' ref={about} onClick={(e)=>sendToSection(e,"aboutus_section")}>ABOUT</a>
            </li>
            <li>
                <a href='whyus_section' ref={whyus} onClick={(e)=>sendToSection(e,"whyus_section")}>WHY US</a>
            </li>
            <li>
                <a href='services_section' ref={services} onClick={(e)=>sendToSection(e,"services_section")}>SERVICES</a>
            </li> 
        </ul>
        {isActive ? 
        <>
            <div className={styles.mobile__background}></div>
            <ul className={styles.mobile__links}>
                <li>
                    <span  onClick={(e)=>sendToSection(e,"home_section")}>HOME</span>
                </li>
                <li>
                    <span  onClick={(e)=>sendToSection(e,"aboutus_section")}>ABOUT</span>
                </li>
                <li>
                    <span  onClick={(e)=>sendToSection(e,"whyus_section")}>WHY US</span>
                </li>
                <li>
                    <span  onClick={(e)=>sendToSection(e,"services_section")}>SERVICES</span>
                </li> 
            </ul>
        </>
        : 
        <></>    
        }
        <div className={styles.phone__container}>
            <div className={styles.phone__box}>
               <img src={phone}/>
                <span>
                215 240 9917
                </span>
                
                <img className={styles.phone__line} src={downIcon}/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
import React, { useEffect, useRef, useState } from 'react'
import styles from './Navbar.module.css';
import logo2 from '../../assets/Logov4.svg'
import phone from '../../assets/phone.svg'
import {CgMoreO} from 'react-icons/cg'
import lineIcon from '../../assets/downline.svg'
import downIcon from '../../assets/dobleline.svg'

const Navbar = ({refs,setIsOn}) => {
    
    const {home,about,whyus,services} = refs
    
    const sendToSection = (e,idName) =>{
        e.preventDefault();
        const section = document.getElementById(idName);
        if(section){
            section.scrollIntoView({behavior:'smooth'})
            setIsActive(false);
        }
    }

    const phoneRef = useRef(null);

    const phoneNumber = "215 240 9917"

    const copyToClipboard = str => {
        const el = document.createElement('textarea');  // Create a <textarea> element
        el.value = str;                                 // Set its value to the string that you want copied
        el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
        el.style.position = 'absolute';                 
        el.style.left = '-9999px';                      // Move outside the screen to make it invisible
        document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
        const selected =            
          document.getSelection().rangeCount > 0        // Check if there is any content selected previously
            ? document.getSelection().getRangeAt(0)     // Store selection if found
            : false;                                    // Mark as false to know no selection existed before
        el.select();                                    // Select the <textarea> content
        document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
        setIsOn(true);               
        document.body.removeChild(el);                  // Remove the <textarea> element
        if (selected) {                                 // If a selection existed before copying
          document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
          document.getSelection().addRange(selected);   // Restore the original selection
        }
      };

    useEffect(()=>{
        phoneRef.current.addEventListener("click", (event)=>{
            copyToClipboard(phoneNumber);
        })
    },[])


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
            <div onClick={()=>{
                 //window.clipboardData.setData("Text", 'Copy this text to clipboard')
                 //document.execCommand("copy")
                 
            }}  ref={phoneRef} className={styles.phone__box}>
               <img src={phone}/>
                <span>
                    {phoneNumber}
                </span>
                
                <img className={styles.phone__line} src={downIcon}/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
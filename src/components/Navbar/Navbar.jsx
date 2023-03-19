import React, { useState } from 'react'
import styles from './Navbar.module.css';
import logo2 from '../../assets/logov3.svg'
import phone from '../../assets/phone.svg'
import {CgMoreO} from 'react-icons/cg'

const Navbar = () => {
    const [isActive,setIsActive] = useState(false);
    return (
    <nav className={styles.navbar}>
        <div className={styles.logo__container}>
            <img src={logo2}/>
        </div>
        <ul className={styles.links__container}>
            <li onClick={
                ()=>setIsActive(!isActive)
            } className={isActive ? `${styles.open__links} ${styles.active__mobile__menu}` : `${styles.open__links}` }>
                <span><CgMoreO/></span>
            </li>
            <li className={styles.links__special__link}>
                <span>HOME</span>
            </li>
            <li>
                <span>ABOUT</span>
            </li>
            <li>
                <span>CONTACT</span>
            </li>
            <li>
                <span>SERVICES</span>
            </li>
        </ul>
        {isActive ? 
        <>
        <div className={styles.mobile__background}></div>
        <ul className={styles.mobile__links}>
            <li>
                <span>HOME</span>
            </li>
            <li>
                <span>ABOUT</span>
            </li>
            <li>
                <span>CONTACT</span>
            </li>
            <li>
                <span>SERVICES</span>
            </li>
        </ul></>
        
        : <></>    
        }
        <div className={styles.phone__container}>
            <div className={styles.phone__box}>
               <img src={phone}/>
                <span>
                215 240 9917
                </span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
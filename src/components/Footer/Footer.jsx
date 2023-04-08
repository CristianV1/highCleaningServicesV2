import React from 'react'
import contactUsImage from '../../assets/contactUs.svg' 
import phone from '../../assets/phoneblack.svg'
import contactUsMailImage from '../../assets/contactUsMail.svg'
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <div id='contactus_section' className={styles.footer__container}>
      <div className={styles.footer__max__width}>
        <div className={styles.footer__first__section}>
          <img src={contactUsImage}/>
          <div className={styles.footer__first__section__text__container}>
            <h3>CONTACT US!</h3>
            <span>Our phone line is open 24/7</span>
          </div>
        </div>
        <div className={styles.footer__second__section}>
          <div className={styles.second__section__phone__container}>
            <img src={phone}/>
            <span>
              215 240 9917
            </span>
          </div>
          <div className={styles.second__section__email__container}>
            <img src={contactUsMailImage}/>
            <span>
              highqualitycleaningnc@gmail.com
            </span>
          </div>
        </div>
        <span className={styles.last__section__text}>Your request will be answered the same day!</span>
      </div>
    </div>
  )
}

import React from 'react'
import styles from './AboutUsSection.module.css'
import image from '../../assets/aboutSectionImage.jpg'

const AboutUsSection = () => {
    

  return (
    <div className={styles.about__us__section__container}>
        <div className={styles.about__us__container}>
            <div className={styles.about__us__photo__container}>
                <div className={styles.photo__container}>
                    <img src={image}/>
                </div>
            </div>
            <div className={styles.about__us__text__container}>
                <h4>ABOUT US</h4>
                <span>High Quality Cleaning Services is a company
                    that aims to contribute to the best customer 
                    experience providing a clean and safe enviroment
                    for our customers in their homes and 
                    businesses.
                </span>
            </div>
        </div>
    </div>
  )
}

export default AboutUsSection
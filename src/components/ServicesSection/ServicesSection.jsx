import React from 'react'
import styles from './ServicesSection.module.css'
import image from '../../assets/services.png'

export const ServicesSection = React.forwardRef((props,ref) => {
  return (
    <div ref={ref} id='services_section' className={styles.section__container}>
        <div className={styles.first__text__container}>
            <h3>SERVICES</h3>
            <span>HQ Cleaning Services has the most capable professionals
                ready to provide you with the best service. Taking care of all
                your needs.
            </span>
        </div>     
        <div className={styles.second__text__container}>
            <div className={styles.second__text__grid__one}>
                <h5>We specialize in:</h5>
                <ul>
                    <li>- Residential cleaning</li>
                    <li>- Commercial cleaning</li>
                    <li>- Deep cleaning (including kitchen dishes, vacum, etc.)</li>
                    <li>- Events and after party cleaning</li>
                    <li>- Builders cleaning</li>
                </ul>
            </div>
            <div className={styles.second__text__image__container}>
                <img src={image}/>
            </div>
        </div>
    </div>
  )
})

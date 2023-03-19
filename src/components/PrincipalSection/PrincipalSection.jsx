import React from 'react'
import styles from './PrincipalSection.module.css';
import photo1 from '../../assets/firstSectionPhoto1.jpg'

const PrincipalSection = () => {
  return (
    <section className={styles.principal__section__container}>
        <div className={styles.slogan__container}>     
            <div className={styles.slogan__text__container}> 
                <span>Provide the best</span>
                <span><strong>cleaning</strong></span>
                <span><strong>service</strong> is our</span>
                <span className={styles.slogan__text__box}>TOP PRIORITY</span>
                <span className={styles.slogan__text__long}>Contact us today and get a</span>
                <span className={styles.slogan__text__special}>FREE QUOTE!</span>     
             </div>      
        </div>
        <div className={styles.photo__container}>
            <div className={styles.arrow}>{"<"}</div>
            <div className={styles.photo__image__container}>
                <img src={photo1}/>
            </div>
            <div className={styles.arrow}>{">"}</div>
        </div>
    </section>
  )
}

export default PrincipalSection
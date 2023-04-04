import React from 'react'
import styles from './AboutUsSection.module.css'
import image from '../../assets/aboutSectionImage.jpg'

const AboutUsSection = React.forwardRef((props,ref) => {
    //const {selfRef} = props

  return (
    <div ref={ref} id='aboutus_section' className={styles.about__us__section__container}>
        <div className={styles.about__us__container}>
            <div className={styles.about__us__photo__container}>
                <div className={styles.photo__container}>
                    <img src={image}/>
                </div>
            </div>
            <div className={styles.about__us__text__container}>
                <h4>ABOUT US</h4>
                <span>We understand how busy your life can be. For that reason, we want to make things easier for you. High quality cleaning services is a company that ains to contribute to the best customer experience providing a clean and safe environment for our clients in their homes and businesses. Let the cleaning to us and we will make sure you will love the results!
                </span>
            </div>
        </div>
    </div>
  )
})

export default AboutUsSection
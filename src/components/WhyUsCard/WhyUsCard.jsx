import React from 'react'
import styles from './WhyUsCard.module.css'

const WhyUsCard = ({text,icon}) => {
  return (
    <div className={styles.card__container}>
        <div className={styles.icon__container}>
            <div className={styles.icon__border__white}>
                <div className={styles.icon__border}>
                    <img src={icon}/>
                </div>
            </div>
        </div>
        <div className={styles.text__container}>
            <span>
                {text}
            </span> 
        </div>
    </div>
  )
}

export default WhyUsCard
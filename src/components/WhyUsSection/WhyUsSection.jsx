import React from 'react'
import styles from './WhyUsSection.module.css'
import WhyUsCard from '../WhyUsCard/WhyUsCard'
import priceIcon from '../../assets/best-price.png'
import customerIcon from '../../assets/customer-support.png'
import experienceIcon from '../../assets/experience.png'
import rateIcon from '../../assets/rate.png'


const WhyUsSection = () => {
    const items = [{text:"Experience team with years in the business",icon:experienceIcon,},
    {text:"Personalized care for each customer with English speakers ready to take care of you",icon:customerIcon,},
    {text:"Satisfaction guarantee. Customer service experience to the next level",icon:rateIcon,},
    {text:"Razonable pricing",icon:priceIcon,}
]
  return (
    <section id='whyus_section' className={styles.section__container}>
      <div className={styles.items__container}>
        <h3 >WHY US?</h3>
          <div className={styles.cards__container}>
            {items.map(item=><WhyUsCard text={item.text} icon={item.icon}/>)}         
          <div className={styles.section__cards__container}>
          </div>
          </div>
      </div>
    </section>
  )
}

export default WhyUsSection
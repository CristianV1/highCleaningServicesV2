import React, { useEffect, useState } from 'react'
import styles from './PrincipalSection.module.css';
import photo1 from '../../assets/firstSectionPhoto1.jpg'

import photo2 from '../../assets/photo4.jpg'

import photo3 from '../../assets/photo5.jpg'

import {RiArrowLeftSFill,RiArrowRightSFill} from "react-icons/ri" 

import dobleLine from '../../assets/dobleline.svg'

const PrincipalSection = React.forwardRef((props,ref) => {

  const items = [photo2,photo1,photo3]

  const marginPerImage = 100; //px

  const [idx,setIdx]= useState(0);
  const [update,setUpdate] = useState(0);
  const [marginLeft,setMarginLeft] = useState(0);

  const slideImages = () => {
    const updatedIdx = idx >= items.length -1 ? 0 : idx + 1  
    setIdx(updatedIdx)

    setMarginLeft(updatedIdx * -100)

  }

  useEffect(()=>{
    slideImages()
    setTimeout(()=>{
      setUpdate((prev)=>prev> 4 ?0:prev+1);
    },5000)
  },[update])


  return (
    <section ref={ref} id='home_section' className={styles.principal__section__container}>
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
            <div className={styles.arrow}><RiArrowLeftSFill/></div>
            <div className={styles.photo__image__container}>
                {items.map((item,idx1)=>idx1==0 
                ? <img style={{marginLeft:`calc(${marginLeft}% - ${idx>0? marginPerImage*idx : 0}px)` }} src={item}/> 
                : <img src={item}/> )}
            </div>
            <div className={styles.arrow}><RiArrowRightSFill/></div>
        </div>
        <img className={styles.doubleline_section} src={dobleLine}/>
    </section>
  )
})

export default PrincipalSection
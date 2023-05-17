import React, { useEffect } from 'react'
import styles from "./AlertComponent.module.css"

const AlertComponent = ({isOn,setIsOn}) => {

    useEffect(()=>{
        if(!isOn) return 
        
        setTimeout(()=>{
            setIsOn(false);
        },3000)
    },[isOn])

    if(!isOn){
        return <></>
    }

    return (
    <div className={styles.main}>Phone copied successfully!</div>
  )
}

export default AlertComponent
import { useState, useEffect } from 'react'
import { getCountdown } from '../../utils/countdown'
import styles from '../../styles/Banner.module.scss'

function Banner() {
    const [time, setTime] = useState()

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(getCountdown())
      }, 1000);
    
      return () => clearInterval(interval)
    }, [time])
    

    return (
        <div className={styles.time}>{time}</div>
    )
}

export default Banner
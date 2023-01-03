import { useState, useEffect } from 'react'
import { getCountdown } from '../../utils/countdown'
import styles from '../../styles/Banner.module.scss'

function Banner() {
    const [time, setTime] = useState([]);
    const [name, setName] = useState(['days', 'hours', 'minutes', 'seconds']);

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(getCountdown())
      }, 1000);
    
      return () => clearInterval(interval)
    }, [time])
    

    return (
        <div className={styles.time}>{time.map((item, index) => {
          return (
            <div className={styles.element}>
              <h2>{item}</h2>
              <h6>{item !== '01' ? name[index] : name[index].substring(0, name[index].length - 1)}</h6>
            </div>
          )
        })}</div>
    )
}

export default Banner
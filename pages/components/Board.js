import React from 'react'
import Banner from './Banner'
import styles from '../../styles/Board.module.scss'

function Board() {
  return (
    <div className={styles.container}>
        <Banner />
    </div>
  )
}

export default Board
import React from 'react'
import styles from './NavBar.module.scss'

function Navbar() {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <h2>Grouth</h2>
            <h1>tag</h1>
        </div>
      <div className={styles.link}>
        <a href={'/#'}>Lar</a>
        <a href={'/#'}>Nosso Trabalho</a>
        <a href={'/#'}>Nossos Servoços</a>
        <a href={'/#'}>Empresa</a>
        <a href={'/#'}>Contato</a>
      </div>
    </div>
  )
}

export default Navbar

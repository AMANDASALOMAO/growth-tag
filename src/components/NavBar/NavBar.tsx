import React from 'react'
import styles from './NavBar.module.scss'

function Navbar() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      })
    }
  };

  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <h2>Grouth</h2>
            <h1>tag</h1>
        </div>
      <nav className={styles.link}>
        <ul className={styles.links}>
        <li><button onClick={() => handleScroll('home')}>Início</button></li>
        <li><button onClick={() => handleScroll('enterprise')}>Empresa</button></li>
        <li><button onClick={() => handleScroll('work')}>Nosso Trabalho</button></li>
        <li><button onClick={() => handleScroll('services')}>Serviços</button></li>
        <li><button onClick={() => handleScroll('contact')}>Contato</button></li>
      </ul>
      </nav>
    </div>
  )
}

export default Navbar

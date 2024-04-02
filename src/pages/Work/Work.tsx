import React from 'react';
import styles from './Work.module.scss'

function Work() {
  return (
    <div className={styles.container}>
        <h1>Por que as empresas nos escolhem</h1>
        <div className={styles.cards}>
        <div className={styles.card}>
            <h3>Branding Eficaz</h3>
            <p>Ao mergulharmos profundamente na essência de cada marca, criamos identidades visuais e narrativas poderosas que ressoam com o público-alvo, destacando-as em um mercado competitivo.</p>
        </div>
        <div className={styles.card}>
        <h3>Abordagem Personalizada</h3>
        <p>Não acreditamos em soluções genéricas. Em vez disso, cada estratégia é meticulosamente elaborada para atender às necessidades exclusivas de cada cliente. </p>
        </div>
        <div className={styles.card}>
            <h3>Resultados  Mensuráveis</h3>
            <p>Não apenas criamos estratégias impactantes, mas também acompanhamos e analisamos constantemente o desempenho. </p>
        </div>
    </div>
    </div>
  );
}

export default Work;

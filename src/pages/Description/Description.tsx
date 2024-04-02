import React from 'react'
import styles from './Description.module.scss'
import Tab from '../../components/Tab/Tab'

function Description() {
  return (
    <div className={styles.container}>
       <div className={styles.card}>
        /1/
       <h1>Branding</h1>
       <p>Desenvolvemos identidades visuais que contam histórias e geram conexões autênticas com seu público-alvo</p>
       </div>
       <Tab />
       <div className={styles.card}>
       /1/
       <h1>Estratégias de Posicionamento Digital</h1>
       <p>Criamos estratégias digitais poderosas para colocar sua marca no centro das conversas online e impulsionar seu crescimento.</p>
       </div>
       <Tab />
       <div className={styles.card}>
       /1/
       <h1>Gestão de Conteúdo</h1>
       <p>Produzimos conteúdo relevante e atraente para envolver seu público, consolidando sua presença online.</p>
       </div>
      <Tab />
       <div className={styles.card}>
       /1/
       <h1>Produção</h1>
       <p>You can edit this text to describe yourself and your work. Double click to edit.</p>
       </div>
    </div>
  )
}

export default Description

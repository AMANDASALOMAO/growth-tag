import React from 'react'
import styles from './Contact.module.scss'
import Form from './../../components/Form/Form'

function Contact() {
  return (
    <div className={styles.container}>
       <div className={styles.card}>
       
        <h1>Entre em Contato</h1>
        <p>Estamos animados para começar a transformar sua marca e impulsionar seu negócio.</p>
        <div className={styles.contact}>
          <div>
            EMAIL: <p>suport@growthtag.com</p>
          </div>
          <div>
            PHONE: <p>+55 (75) 9 9130 4564</p>
          </div>
        </div>
       <div className={styles.func}>
       <h3>HORÁRIO DE FUNCIONAMENTO:</h3>
       <p>Segunda a Sexta: 8:30am - 5:30pm (GTM)</p>
       <p>Fechado nos feriados</p>
       </div>
       </div>
      
       <div className={styles.form}>
       <Form />
       </div>
    </div>
  )
}

export default Contact

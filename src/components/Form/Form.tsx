import React from 'react'
import styles from './Form.module.scss'
import { ArrowRight } from '../icon/arrowRight'
import { useForm } from 'react-hook-form';

function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <div className={styles.container}>
        <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          SEU NOME <br/>
          <input 
            type="text" 
            id="User" 
            {...register("name", { required: true })} 
          />
          {errors.name && <span>O nome é obrigatório</span>}
        </label>
        <label>
          SEU E-MAIL <br/>
          <input 
            type="text" 
            id="mail" 
            {...register("email", { required: true })} 
          />
          {errors.email && <span>O email é obrigatório</span>}
        </label>
        <label>
          SUA MENSAGEM <br/>
          Deixe-nos saber como podemos ajudar. <br/>
          <input 
            type="text" 
            id="text" 
            {...register("message", { required: true })} 
          />
          {errors.message && <span>A mensagem é obrigatória</span>}
        </label>
        <button type="submit">ENVIAR MENSAGEM <ArrowRight /></button>
      </form>
    </div>
  )
}

export default Form

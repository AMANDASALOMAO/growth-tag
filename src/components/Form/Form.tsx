import React, { useState } from "react";
import styles from "./Form.module.scss";
import { ArrowRight } from "../icon/arrowRight";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = (data: any) => {
    setLoading(true);
    setMessage("");

    const emailParams = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
    };

    emailjs
      .send(
        "service_rcrjbzx",
        "template_5wcmqoa",
        emailParams,
        "Wz4tT6_0FhaeLK0ud"
      )
      .then(() => {
        setMessage("Mensagem enviada com sucesso!");
        reset();
      })
      .catch(() => {
        setMessage("Erro ao enviar mensagem. Tente novamente.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          SEU NOME <br />
          <input
            type="text"
            id="User"
            {...register("name", { required: "O nome é obrigatório" })}
          />
          {errors.name?.message && <span>{String(errors.name.message)}</span>}
        </label>

        <label>
          SEU E-MAIL <br />
          <input
            type="email"
            id="mail"
            {...register("email", {
              required: "O e-mail é obrigatório",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "E-mail inválido",
              },
            })}
          />
          {errors.email?.message && <span>{String(errors.email.message)}</span>}
        </label>

        <label>
          SUA MENSAGEM
          <textarea
            id="text"
            rows={4}
            {...register("message", { required: "A mensagem é obrigatória" })}
          />
          {errors.message?.message && <span>{String(errors.message.message)}</span>}
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Enviando..." : "ENVIAR MENSAGEM"} <ArrowRight />
        </button>

        {message && <p className={styles.feedback}>{message}</p>}
      </form>
    </div>
  );
}

export default Form;

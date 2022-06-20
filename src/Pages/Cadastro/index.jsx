// import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';

import Input from '../../components/Input';
import CheckboxRadio from '../../components/CheckboxRadio';
import styles from './cadastro.module.scss';

const schema = yup.object({
  name: yup
    .string()
    .required("Nome obrigatório.")
    .matches(/[a-zA-Z]+/,{message: "Apenas letas."}),
  lastname: yup
    .string("Somente letras")
    .required("Sobrenome obrigatório.")
    .matches(/[a-zA-Z]+/,{message: "Apenas letas."}),
  day: yup
    .number("Informe um DIA válido.")
    .max(31,"Informe um DIA válido entre 01 e 31.")
    .min(1,"Informe um DIA válido entre 01 e 31.")
    .required("Informe o DIA de nascimento.")
    .integer("Informe um DIA válido entre 01 e 31."),
  month: yup
    .number()
    .max(12,"Informe um MÊS válido entre 01 e 12.")
    .min(1,"Informe um MÊS válido entre 01 e 12.")
    .required("Informe o MÊS de nascimento.")
    .integer("Informe um MÊS válido entre 01 e 12."),
  year: yup
    .number()
    .max(2004,"Você deve ter mais de 18 anos.")
    .min(1900,"Informe um ANO válido.")
    .integer("Informe um ANO válido.")
    .required("Informe o ANO de nascimento."),
  email: yup
    .string()
    .email("Informe um e-mail válido.")
    .required("Informe um e-mail válido."),
  password: yup
    .string()
    .min(6,"Mínimo 6 caracteres com letras e números.")
    .required("Senha obrigatório.")
    .matches(/^[A-Za-z0-9]*\d+[A-Za-z0-9]*$/,{message: "Mínimo 6 caracteres com letras e números."}),
  retypePassword: yup
    .string()
    .oneOf([yup.ref('password'), null],'As senhas devem ser iguais.')
    .required("Senha obrigatório.")
    .matches(/^[A-Za-z0-9]*\d+[A-Za-z0-9]*$/,{message: "Mínimo 6 caracteres com letras e números."}),
  acceptTerms: yup
    .bool("Você deve aceitar os termos de uso.")
    .oneOf([true], 'Você deve aceitar os termos de uso.')
}).required();

const Cadastro = () => {

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  });

  return (
    <div className={ styles.cadastro }>
      <div className={ styles.buttonBack }>
        <Link to="/">
          <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm0 7.425 2.717-2.718c.146-.146.339-.219.531-.219.404 0 .75.325.75.75 0 .193-.073.384-.219.531l-2.717 2.717 2.727 2.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.384-.073-.53-.219l-2.729-2.728-2.728 2.728c-.146.146-.338.219-.53.219-.401 0-.751-.323-.751-.75 0-.192.073-.384.22-.531l2.728-2.728-2.722-2.722c-.146-.147-.219-.338-.219-.531 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" fillRule="nonzero"/></svg>
        </Link>
      </div>
      <div className={ styles.title }>
        <h2>Cadastro</h2>
      </div>
      <section className={ styles.form }>
        <form onSubmit={handleSubmit((data) => {
          axios({
            method: "post",
            url: "http://localhost:4444/users",
            data
          }).then((response) => {
            console.log(response.data)
          }).catch((error) => {
            console.log(error)
          })
        })}>
          <fieldset className='p-1'>
            <Input 
              value={register("name")}
              type="text" 
              label="Nome:" 
              id="name" 
              textAlert={errors.name?.message}
            />
            {
              (errors.name?.message ? 
              (<p className={styles.textAlert}>{errors.name?.message}</p>) : 
              "")
            }
          </fieldset>
          <fieldset className='p-1'>
            <Input 
              value={register("lastname")} 
              type="text"  
              label="Sobrenome:" 
              id="lastname"
            />
            {
              (errors.lastname?.message ? 
              (<p className={styles.textAlert}>{errors.lastname?.message}</p>) : 
              "")
            }
          </fieldset>
          <fieldset className={ styles.datanasc }>
            <div className={ styles.day }>
              <Input 
                value={register("day")} 
                type="number" 
                label="Dia:" 
                id="day" 
                placeholder="DD"
                default="0"
              />
            </div>
            <div className={ styles.month }>
              <Input 
                value={register("month")} 
                type="number" 
                label="Mês:" 
                id="month" 
                placeholder="MM"
                default="0"
              />
            </div>
            <div className={ styles.year }>
              <Input 
                value={register("year")} 
                type="number" 
                label="Ano:" 
                id="year" 
                placeholder="AAAA"
                default="0"
              />
            </div>
          </fieldset>
          {
            (errors.day?.message ? (<p className={styles.textAlert}>{errors.day?.message}</p>) : "")
          }
          {
            (errors.month?.message ? (<p className={styles.textAlert}>{errors.month?.message}</p>) : "")
          }
          {
            (errors.year?.message ? (<p className={styles.textAlert}>{errors.year?.message}</p>) : "")
          }
          <hr />
          <fieldset className="p-1">
            <Input 
              value={register("email")} 
              type="email" 
              label="Email" 
              id="email" 
            />
            {
              (errors.email?.message ? (<p className={styles.textAlert}>{errors.email?.message}</p>) : "")
            }
          </fieldset>
          <fieldset className="p-1">
            <Input 
              value={register("password")} 
              type="password"  
              label="Senha" 
              id="password" 
            />
            {
              (errors.password?.message ? (<p className={styles.textAlert}>{errors.password?.message}</p>) : "")
            }
          </fieldset>
          <fieldset className="p-1">
            <Input 
              value={register("retypePassword")} 
              type="password" 
              label="Repita a senha" 
              id="retypePassword" 
            />
            {
              (errors.retypePassword?.message ? (<p className={styles.textAlert}>{errors.retypePassword?.message}</p>) : "")
            }
          </fieldset>
          <fieldset className='p-1'>
            <CheckboxRadio 
              type="checkbox" 
              id="acceptTerms" 
              label="Concordo com os termos de uso e com as regras da plataforma." 
              value={register("acceptTerms")}
            />
            {
              (errors.acceptTerms?.message ? (<p className={styles.textAlert}>{errors.acceptTerms?.message}</p>) : "")
            }
          </fieldset>
          <div className="py-2 px-1">
            <button className='btn' type="submit">Cadastrar</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Cadastro;
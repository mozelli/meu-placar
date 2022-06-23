import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";

import Input from '../../components/Input';
import styles from './login.module.scss';

const schema = yup.object({
  email: yup
    .string()
    .email("Informe um e-mail válido.")
    .required("Você deve informar seu e-mail."),
  password: yup
    .string()
    .required("Você deve informar sua senha.")
    .matches(/^[A-Za-z0-9]*\d+[A-Za-z0-9]*$/,{message: "Mínimo 6 caracteres com letras e números."}),
}).required();

const Login = () => {

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  });
  const [logged, setLogged] = useState(false);

  return (
    <div className={ styles.login }>
      <header className={ styles.title }>
        <h2 className='mt-4'>Meu Placar</h2>
      </header>
      <section className={ styles.form }>
        <form onSubmit={handleSubmit((data) => {
          axios({
            method: "post",
            url: "http://localhost:4444/users/authenticate",
            data
          }).then((response) => {
            // console.log(response.data)
            if(response.data) {
              const {id, name, email, token} = response.data.user;
              localStorage.id = id;
              localStorage.name = name;
              localStorage.email = email;
              localStorage.token = token;
              setLogged(true);
            }
          }).catch((error) => {
            console.log(error)
          })
        })}>
          {logged && (<Navigate to="/home" />)}
          <fieldset className='p-1'>
            <Input 
              label="Email" 
              type="email" 
              id="email"  
              value={register("email")}
            />
            {(errors.email?.message ? (<p className={styles.textAlert}>{errors.email?.message}</p>) : "")}
            <Input 
              label="Senha" 
              type="password" 
              id="password" 
              value={register("password")}
            />
            {(errors.password?.message ? (<p className={styles.textAlert}>{errors.password?.message}</p>) : "")}
            <div className={ styles.linkRescuePassword }>
              <Link to="/" className='px-1'>
                esqueci minha senha
              </Link>
            </div>
            <div className={ styles.buttons }>
              <button className='btn' type="submit">Entrar</button>
              <Link to="/cadastro">
                <button className="btn outlined">Cadastrar</button>
              </Link>
            </div>
          </fieldset>
        </form>
      </section>
      <footer className={ styles.termLink }>
        <Link to="/">
          Termos de uso da plataforma
        </Link>
      </footer>
    </div>
  );
}

export default Login;
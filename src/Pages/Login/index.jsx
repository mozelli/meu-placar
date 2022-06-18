import { useState } from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import styles from './login.module.scss';

const Login = () => {

  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState(''); 

  return (
    <div className={ styles.login }>
      <header className={ styles.title }>
        <h2 className='mt-4'>Meu Placar</h2>
      </header>
      <section className={ styles.form }>
        <fieldset className='p-1'>
          <Input label="Email" type="email" value={ emailValue } action={ setEmailValue } id="email"  />
        </fieldset>
        <fieldset className='p-1'>
          <Input label="Senha" type="password" value={ passwordValue } action={ setPasswordValue } id="password" />
        </fieldset>
        <div className={ styles.linkRescuePassword }>
          <Link to="/" className='px-1'>
            esqueci minha senha
          </Link>
        </div>
        <div className={ styles.buttons }>
          <button className='btn'>Entrar</button>
          <Link to="/cadastro">
            <button className="btn outlined">Cadastrar</button>
          </Link>
        </div>
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
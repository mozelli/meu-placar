import { useState } from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import styles from './login.module.scss';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={ styles.login }>
      <div className={ styles.brand }>
        <h1>Meu Placar</h1>
        <p>Bolão online</p>
      </div>
      <div className={ styles.form }>
        <form>
          <Input value={ email } type="email" onChange={setEmail} label="E-mail" id="email" />
          <Input value={ password } type="password" onChange={setPassword} label="Senha" id="senha" />
          <button className='contained'>Entrar!</button>
        </form>
        <div className={ styles.links }>
          <p>
            <Link to="/" className='button'>
              Esqueci minha senha
            </Link>
          </p>
          <p>
            <Link to="/" className='button'>
              Ainda não tenho cadastro
            </Link>
          </p>
        </div>
        <div className={ styles.socialMediaButtons }>
          <button className="contained">Entrar com Facebook</button>
          <button className="contained">Entrar com Google</button>
        </div>
      </div>
      <p className={ styles.link }>
        <Link to="/" className='button'>
          Como funciona?
        </Link>
      </p>
    </div>
  );
}

export default Login;
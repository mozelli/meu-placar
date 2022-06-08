import { useState } from 'react';
import { Link } from 'react-router-dom';
import CheckboxRadio from '../../components/CheckboxRadio';

import Input from '../../components/Input';
import styles from './cadastrosecurity.module.scss';

const CadastroSecurity = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordReType, setPasswordReType] = useState("");
  const [informationAgreed, setInformationAgreed] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);

  return (
    <div className={ styles.cadastrosecurity }>
      <div className={ styles.title }>
        <h1>Cadastro</h1>
        <p>Preencha os campos abaixo</p>
      </div>
      <form>
        <Input 
          value={ email } 
          type="email" 
          onChange={ setEmail } 
          label="E-mail:" 
          id="email" 
        />
        <Input 
          value={ password } 
          type="password" 
          onChange={ setPassword } 
          label="Senha:" 
          id="password" 
        />
        <Input 
          value={ passwordReType } 
          type="password" 
          onChange={ setPasswordReType } 
          label="Repita a senha:" 
          id="passwordretype" 
        />
        <div className={ styles.checkboxes }>
          <CheckboxRadio 
            type="checkbox" 
            id="infoagreed" 
            label="Concordo com as informações por mim declaradas." 
          />
          <CheckboxRadio 
            type="checkbox" 
            id="termsagreed" 
            label="Concordo com os termos de uso da plataforma Meu Placar." 
          />
        </div>
        <Link to="/cadastro-email-link" className='button contained'>
          Continuar...
        </Link>
      </form>
    </div>
  );
}

export default CadastroSecurity;
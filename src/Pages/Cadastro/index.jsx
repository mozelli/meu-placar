import { useState } from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import CheckboxRadio from '../../components/CheckboxRadio';
import styles from './cadastro.module.scss';

const Cadastro = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypeEmail, setRetypeEmail] = useState("");

  return (
    <div className={ styles.cadastro }>
      <div className={ styles.buttonBack }>
        <Link to="/">
          <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm0 7.425 2.717-2.718c.146-.146.339-.219.531-.219.404 0 .75.325.75.75 0 .193-.073.384-.219.531l-2.717 2.717 2.727 2.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.384-.073-.53-.219l-2.729-2.728-2.728 2.728c-.146.146-.338.219-.53.219-.401 0-.751-.323-.751-.75 0-.192.073-.384.22-.531l2.728-2.728-2.722-2.722c-.146-.147-.219-.338-.219-.531 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" fill-rule="nonzero"/></svg>
        </Link>
      </div>
      <div className={ styles.title }>
        <h2>Cadastro</h2>
      </div>
      <section className={ styles.form }>
        <fieldset className='p-1'>
          <Input 
            value={ name } 
            type="text" 
            action={setName} 
            label="Nome:" 
            id="name" 
          />
        </fieldset>
        <fieldset className='p-1'>
          <Input 
            value={ lastName } 
            type="text" 
            action={setLastName} 
            label="Sobrenome:" 
            id="lastname" 
          />
        </fieldset>
        <fieldset className={ styles.datanasc }>
          <div className={ styles.day }>
            <Input 
              value={ day } 
              type="number" 
              action={setDay} 
              label="Dia:" 
              id="day" 
            />
          </div>
          <div className={ styles.month }>
            <Input 
              value={ month } 
              type="number" 
              action={setMonth} 
              label="Mês:" 
              id="month" 
            />
          </div>
          <div className={ styles.year }>
            <Input 
              value={ year } 
              type="number" 
              action={setYear} 
              label="Ano:" 
              id="year" 
            />
          </div>
        </fieldset>
        <hr />
        <fieldset className="p-1">
          <Input 
            value={ email } 
            type="email" 
            action={ setEmail } 
            label="Email" 
            id="email" 
          />
        </fieldset>
        <fieldset className="p-1">
          <Input 
            value={ password } 
            type="password" 
            action={ setPassword } 
            label="Senha" 
            id="password" 
          />
        </fieldset>
        <fieldset className="p-1">
          <Input 
            value={ retypeEmail } 
            type="password" 
            action={ setRetypeEmail } 
            label="Repita a senha" 
            id="retypePassword" 
          />
        </fieldset>
        <fieldset className='p-1'>
          <CheckboxRadio 
            type="checkbox" 
            id="termsAgree" 
            label="Concordo com os termos de uso e com as regras da plataforma." 
          />
        </fieldset>
        <div className="py-2 px-1">
          <button className='btn'>Cadastrar</button>
        </div>
      </section>
    </div>
  );
}

export default Cadastro;
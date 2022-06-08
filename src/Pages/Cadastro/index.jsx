import { useState } from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import styles from './cadastro.module.scss';

const Cadastro = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  return (
    <div className={ styles.cadastro }>
      <div className={ styles.title }>
        <h1>Cadastro</h1>
      </div>
      <form>
        <Input value={ name } type="text" onChange={setName} label="Nome:" id="name" />
        <Input value={ lastName } type="text" onChange={setLastName} label="Sobrenome:" id="lastname" />
        <div className={ styles.datanasc }>
          <div className={ styles.day }>
            <Input value={ day } type="number" onChange={setDay} label="Dia:" id="day" />
          </div>
          <div className={ styles.month }>
            <Input value={ month } type="number" onChange={setMonth} label="Mês:" id="month" />
          </div>
          <div className={ styles.year }>
            <Input value={ year } type="number" onChange={setYear} label="Ano:" id="year" />
          </div>
        </div>
        <Link to="/cadastro-security" className='button contained'>
          Continuar...
        </Link>
      </form>
    </div>
  );
}

export default Cadastro;
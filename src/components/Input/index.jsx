import { useState } from 'react';

import styles from './input.module.scss';

const Input = (props) => {
  
  const [inputSize, setInputSize] = useState(styles[props.size]);
  const [inputAlert, setInputAlert] = useState(styles[props.alert]);
  const [inputStyle, setInputStyle] = useState(`${styles.formControl} ${inputSize} ${inputAlert}`);

  return (
    <div className={ styles.input }>
      <label 
        htmlFor={ props.id } 
        className={ styles.formLabel }
      >
        { props.label }
      </label>
      <input 
        type={ props.type } 
        id={ props.id } 
        className={inputStyle}
        value={ props.value }
        onChange={ (event) => props.action(event.target.value) }
      />
    </div>
  );
}

export default Input;
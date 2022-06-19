import styles from './checkboxradio.module.scss';

const CheckboxRadio = (props) => {
  return (
    <div className={ styles.checkboxRadio }>
      <input 
        type={ props.type } 
        id={ props.id } 
        {...props.value}
      />
      <label htmlFor={ props.id }>{ props.label }</label>
    </div>
  );
}

export default CheckboxRadio;
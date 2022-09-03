import styles from './select.module.scss';

const Select = (props) => {
  return (
    <div className={ styles.select }>
      <label htmlFor="championship" className={ styles.formLabel }>{props.label}</label>
      <select 
        id="championship" 
        className={ styles.formControl } 
        onChange={ (event) => props.action(event.target.value) }>
        <option value="" disabled>-- Escolha</option>
        {
          props.options.map((option) => {
            return (
              <option value={option.id} key={option.id}>{option.name}</option>
            )
          })
        }
      </select>
    </div>
  );
}

export default Select;
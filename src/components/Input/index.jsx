import styles from './input.module.scss';

const Input = (props) => {
  return (
    <div className="form-control">
      {props.label ? (<label htmlFor={props.id}>{props.label}</label>) : ""}
      <input 
        type={ props.type } 
        value={props.value} 
        onChange={(event) => props.onChange(event.target.value)} 
        placeholder={props.placeholder}
        id={ props.id }
      />
    </div>
  );
}

export default Input;
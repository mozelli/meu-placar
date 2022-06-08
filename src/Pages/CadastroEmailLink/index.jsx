import styles from './cadastroemaillink.module.scss';

const CadastroEmailLink = () => {
  return (
    <div className={ styles.cadastroemaillink }>
      <div className={ styles.title }>
        <h1>Falta pouco!</h1>
        <p className={ styles.info }>
          Dentro de instantes um <strong>e-mail de verificação</strong> será enviado para você no endereço de e-mail informado:
        </p>
        <p className={ styles.email }>joaomozelli@gmail.com</p>
        <p className={ styles.info }>
          Acesse seu e-mail e clique no link de verificação. 
        </p>
        <p className={styles.info}>
          Caso o e-mail não esteja na caixa de entrada, verifique na pasta de Span.
        </p>
      </div>
    </div>
  );
}

export default CadastroEmailLink;
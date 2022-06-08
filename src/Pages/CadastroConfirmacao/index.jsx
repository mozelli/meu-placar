import { Link } from 'react-router-dom';

import styles from './cadastroconfirmacao.module.scss';

const CadastroConfirmacao = () => {
  return (
    <div className={ styles.cadastroconfirmacao }>
      <div className={ styles.title }>
        <h1>Parabéns!</h1>
        <p>
          Já tem um palpite para o placar do próximo jogo do seu time do coração?
        </p>
        <p>
          Seu e-mail foi verificado e você já pode utilizar de todas as funcionalidades da nossa plataforma!
        </p>
      </div>
      <Link to="/" className="button contained">Começar agora!</Link>
    </div>
  );
}

export default CadastroConfirmacao;
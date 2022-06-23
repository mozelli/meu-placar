import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

import styles from './header.module.scss';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuStyle, setMenuStyle] = useState(`${styles.menu}`);
  const [loggedOut, setLoggedOut] = useState(false);

  function showHiddenMenu() {
    if(!showMenu) {
      setMenuStyle(`${styles.menu} ${styles.show}`);
    } else {
      setMenuStyle(`${styles.menu}`);
    }
    setShowMenu(!showMenu);
  }

  function logout() {
    localStorage.removeItem("name");
    localStorage.removeItem("id");
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    setLoggedOut(true);
  }

  return (
    <div className={ styles.header }>
      {loggedOut && <Navigate to="/" />}
      <div className={ styles.top }>
        <button type='button' onClick={() => showHiddenMenu()}>
          <div className={ styles.menuIcon }>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"/></svg>
          </div>
        </button>
        <div className={ styles.brand }>
          <h1 className="display-6">Meu Placar</h1>
        </div>
      </div>
      <div className={ menuStyle }>
        <h1 className='display-6'>Menu</h1>
        <ul>
          <Link to="/">
            <li>Minhas informações</li>
          </Link>
          <li>Conta</li>
          <li onClick={() => logout()}>Sair</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
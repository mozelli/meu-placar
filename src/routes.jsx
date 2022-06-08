import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import CadastroSecurity from './Pages/CadastroSecurity';
import CadastroEmailLink from './Pages/CadastroEmailLink';
import CadastroConfirmacao from './Pages/CadastroConfirmacao';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/cadastro-security' element={<CadastroSecurity />} />
        <Route path='/cadastro-email-link' element={<CadastroEmailLink />} />
        <Route path='/cadastro-confirmacao' element={<CadastroConfirmacao />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
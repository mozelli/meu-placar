import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import Main from './layouts/Main';

import Login from './Pages/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
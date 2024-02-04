import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Secret from './components/Secret';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={'/register'} element={<Register />} />
        <Route exact path={'/login'} element={<Login />} />
        <Route exact path={'/'} element={<Secret />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;

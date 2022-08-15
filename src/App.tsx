import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';

import './App.scss';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/homePage" element={<HomePage />} />
      </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

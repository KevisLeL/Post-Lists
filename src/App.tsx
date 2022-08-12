import React from 'react';
import './App.scss';
import MainHeader from './Components/MainHeader';
import HomePage from './Pages/HomePage';

function App() {

  return (
    <React.Fragment>
      <MainHeader />
      <HomePage />
    </React.Fragment>
  );
}

export default App;

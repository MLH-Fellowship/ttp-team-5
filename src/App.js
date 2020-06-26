import React from 'react';
import './App.css';
import RoutesContainer from './components/routes/RoutesConatiner';
// import NavBarContainer from './components/container/NavBarContainer';
import Routes from './routes'
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <Routes/>
        <RoutesContainer/>
      </header>
    </div>
  );
}

export default App;

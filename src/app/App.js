import React from 'react';
import './App.css';
import RoutesContainer from '../components/routes/RoutesConatiner';
import NavBarContainer from '../components/container/NavBarContainer';

function App() {
  return (
    <div className="App">
      <NavBarContainer/>
      <header className="App-header">
        <RoutesContainer/>
      </header>
    </div>
  );
}

export default App;

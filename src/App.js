import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TabelCompanii from './Components/Company';


function App() {
  return (
    <div className="App">
      <h1 className="text-center mt-3 pb-3 font-weight-bold">Carte de adrese</h1>
      <TabelCompanii />
    </div>
  );
}

export default App;

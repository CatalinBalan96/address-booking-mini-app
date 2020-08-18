import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CompanyTable from './Components/CompanyTable';


function App() {
  return (
    <div className="App">
      <h1 className="text-center mt-3 pb-3 font-weight-bold">Carte de adrese</h1>
      <CompanyTable />
    </div>
  );
}


export default App;

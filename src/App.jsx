import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import Table from './Components/Spreadsheet/Table';

function App() {

  const [ isAddPressed, setIsAddPressed ] = useState(false);
  const [ isSubtractPressed, setIsSubtractPressed ] = useState(false);

  return (
    <div className="App">
      <NavBar 
        isSubtractPressed={ isSubtractPressed }
        setIsSubtractPressed={ setIsSubtractPressed }
        isAddPressed={ isAddPressed }
        setIsAddPressed={ setIsAddPressed }
      />
      <Table         
        isSubtractPressed={ isSubtractPressed }
        setIsSubtractPressed={ setIsSubtractPressed }
        isAddPressed={ isAddPressed }
        setIsAddPressed={ setIsAddPressed }
      />
    </div>
  );
}

export default App;

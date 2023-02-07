import React from 'react';
import FunctionalityExplanation from './FunctionalityExplanation';
import TableBody from './TableBody';
import TableHead from './TableHead';

// Hardcoded variables with rows and columns
const alpha = Array.from(Array(8)).map((e, i) => i + 65);
let columnNames = alpha.map((x) => String.fromCharCode(x));

// Adding table corner
columnNames = [' # ', ...columnNames]

const rowNumbers = Array.from(Array(16).keys())



export default function Table({isSubtractPressed, setIsSubtractPressed, isAddPressed, setIsAddPressed}) {
  return (
    <div>
      
      <FunctionalityExplanation/>
      
      <table>

        <TableHead columnNames={ columnNames }/>
          
        <TableBody 
          columnNames={ columnNames } 
          rowNumbers={ rowNumbers }
          isSubtractPressed={ isSubtractPressed }
          setIsSubtractPressed={ setIsSubtractPressed }
          isAddPressed={ isAddPressed }
          setIsAddPressed={ setIsAddPressed }
        />
      </table>
    </div>
  )
}
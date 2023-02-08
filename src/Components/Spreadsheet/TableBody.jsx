import React, { useState } from 'react'

export default function TableBody({ columnNames, rowNumbers, isSubtractPressed, setIsSubtractPressed, isAddPressed, setIsAddPressed }) {

    const [ selectedCell, setSelectedCell ] = useState(null);
    const [ firstNumberToOperate, setFirstNumberToOperate ] = useState(null);
    const [firstNumberReady, setFirstNumberReady] = useState(false)

    let secondNumberToOperate = 0;
    let result = 0;

    // Handles click on cells
    function onClick(e) {
        e.preventDefault();
        selectCell(e);
        selectFirstOperand(e);
        selectSecondOperand(e);
    } 

    // Selection of values to operates
    const selectCell = (e) => {

        if(!isAddPressed && !isSubtractPressed && !firstNumberReady){

            setSelectedCell( e.target.id );

        }
    
    };

    const selectFirstOperand = (e) => {

        if((isAddPressed || isSubtractPressed) && !firstNumberReady) {

            setFirstNumberToOperate(e.target.value);
            
            setFirstNumberReady(true);
        }
    
    };
    
    const selectSecondOperand = (e) => {
    
        if(firstNumberReady){

            secondNumberToOperate = e.target.value;

            setFirstNumberReady(false);

            performOperation();

        }
    
    };

    const performOperation = () => {

        if(isAddPressed) {

            result = (Number(firstNumberToOperate) + Number(secondNumberToOperate));

            setIsAddPressed(false);

        }

        if(isSubtractPressed) {
            
            result = (Number(firstNumberToOperate) - Number(secondNumberToOperate));

            setIsSubtractPressed(false);

        }

        // Writes result onto selectedCell
        let cellToModify = document.getElementById(selectedCell);

        !isNaN(result) ? cellToModify.value = result : alert('Invalid operation, please select numbers');

    }

    // Handles enter key press in case of manual operations in cell
    const handleEnter = (e) => {

        e.preventDefault();
        
        let cellValue = e.target.value; 
        cellValue = cellValue.replace(/\s/g, '') // Removes spaces from string

        let opResult;
        
        let cellToModify = document.getElementById(e.target.id);

        if(cellValue.indexOf('+') >= 0) {

            let sumArray = cellValue.split("+", 2);
        
            opResult = Number(sumArray[0]) + Number(sumArray[1]);
        
            cellToModify.value = opResult;

        }

        if(cellValue.indexOf('-') >= 0) {

            let sumArray = cellValue.split("-", 2);
        
            opResult = Number(sumArray[0]) - Number(sumArray[1]);
        
            cellToModify.value = opResult;

        }

        if(cellValue.indexOf('*') >= 0) {

            let sumArray = cellValue.split("*", 2);
        
            opResult = Number(sumArray[0]) * Number(sumArray[1]);
        
            cellToModify.value = opResult;

        }
    }

  return (
    <tbody>
            
    {
        rowNumbers.map(num => {
            
            return(<tr key={ num }>

                <td key={ num }> { num } </td>
                
                {columnNames.map((col, index) => {

                    return( <td key={ index } > <form> <input  style={{cursor: 'pointer'}} onKeyDown={(e) => e.key === 'Enter' && handleEnter(e)} onClickCapture={onClick} id={`${num}${columnNames[index + 1]}`} type="text"/> </form> </td> )
                
                })} 
            
            </tr>)
        })
    }

    </tbody>
  )
}
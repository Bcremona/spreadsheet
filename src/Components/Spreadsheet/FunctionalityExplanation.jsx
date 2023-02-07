import React from 'react'

export default function FunctionalityExplanation() {
  return (
    <div style={{width: '100vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1em'
                }}>

        <p style={{ textAlign: 'left',
                borderRadius: '8px',
                boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
                padding: '1em'
                }}>

            ¡Welcome! to use the Spreadsheet enter values to the cells. <br></br>
            To operate with numbers you can:<br></br>
                -   Select a cell to operate on.<br></br>
                -   Select an operation using the buttons above (they will change color when selected)<br></br>
                -   Select the cells which values you want to use as operands.<br></br>
                -   Get a result!<br></br>
                <br></br>
                - You can also perform manual operations by writing them in the cells and pressing 'Enter'.<br></br>
                - E.g.: 2 <b>+</b> 2, 3 <b>-</b> 1, 7 <b>*</b> 7. <br></br>
        </p>
    </div>
  )
}
import React from 'react';

export default function TableHead({columnNames}) {
  return (
    <thead>
        <tr>
            {columnNames.map(letter => {
                return(<th key={ letter }> {letter} </th>)
            })}
        </tr>
    </thead>
  )
}
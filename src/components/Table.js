import React from 'react';

function Table() {
  return (
    <table style={{ border: 'solid 2px black' }}>
      <tr>
        <th>&nbsp;</th>
        <th style={{ backgroundColor: 'rgb(124, 185, 185)' }}>Knocky</th>
        <th style={{ backgroundColor: 'rgb(124, 185, 185)' }}>Flor</th>
        <th style={{ backgroundColor: 'rgb(124, 185, 185)' }}>Ella</th>
        <th style={{ backgroundColor: 'rgb(124, 185, 185)' }}>Juan</th>
      </tr>
      <tr>
        <td>Breed</td>
        <td>Jack Russell</td>
        <td>Poodle</td>
        <td>Streetdog</td>
        <td>Cocker Spaniel</td>
      </tr>
    </table>
  );
}

export default Table;

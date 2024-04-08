import React from 'react';
import './Tabla.css'

const Tabla = ({ datos }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
        </tr>
      </thead>
      <tbody>
        {datos.map((item, index) => (
          <tr key={index}>
            <td>{item.nombre}</td>
            <td>{item.descripcion}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabla;

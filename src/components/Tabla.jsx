import React from 'react';
import './Tabla.css'

const Tabla = ({ datos }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Accion</th>
        </tr>
      </thead>
      <tbody>
        {datos.map((item, index) => (
          <tr key={index}>
            <td>{item.nombre}</td>
            <td>{item.descripcion}</td>
            <td>{item.eliminar}</td>
            
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabla;

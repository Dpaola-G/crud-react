import React, { useState } from 'react';
import Tabla from './Tabla';
import Search from './Search';

function App() {
  const [datosFiltrados, setDatosFiltrados] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  const datos = [
    { nombre: 'Paola Garcia', descripcion: 'aprendiz' },
    { nombre: 'Daniel aztaiza', descripcion: 'aprendiz' },
    { nombre: 'Laura Bastidas', descripcion: 'aprendiz' },
    { nombre: 'Franco Reina', descripcion: 'instructor' },
    { nombre: 'Jorge Coral', descripcion: 'instructor' },
    { nombre: 'Pablo Ortiz', descripcion: 'instructor' },
    { nombre: 'Miguelilo Astudillo', descripcion: 'aprendiz' },
    { nombre: 'Jesus erazo', descripcion: 'aprendiz' },
    { nombre: 'Jesus Paladinez', descripcion: 'aprendiz' },
    { nombre: 'juan Gomez', descripcion: 'aprendiz' },
    { nombre: 'David Lozada', descripcion: 'instructor' },
    { nombre: 'Maria Figueroa', descripcion: 'instructor' },
    { nombre: 'Ana Lopez', descripcion: 'instructor' },
    { nombre: 'Danial Muñoz', descripcion: 'aprendiz' },
    { nombre: 'isabel Gutierrez', descripcion: 'aprendiz' },
    { nombre: 'Sara hoyos', descripcion: 'aprendiz' },
    { nombre: 'Isabel Bastidas', descripcion: 'aprendiz' },
    { nombre: 'Felipe noguera', descripcion: 'aprendiz' },
    { nombre: 'Juan Pabon', descripcion: 'aprendiz' },
    { nombre: 'Andres Rivera', descripcion: 'aprendiz' },
  ];

  const handleBusqueda = (valorBusqueda) => {
    setBusqueda(valorBusqueda);

    const datosFiltrados = datos.filter((dato) =>
      dato.nombre.toLowerCase().startsWith(valorBusqueda.toLowerCase())
    );
    setDatosFiltrados(datosFiltrados);
  };

  return (
    <div className="App">
      <h1>Lista de Datos</h1>
      <Search onSearch={handleBusqueda} />
      <Tabla datos={busqueda ? datosFiltrados : datos} />
    </div>
  );
}

export default App;
import Select from './components/Select'; 
import React, { useState, useEffect } from 'react';

function App() {
  const [filasPorPagina, setFilasPorPagina] = useState(5);
  const [datos] = useState([
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
    { nombre: 'Diana Leon', descripcion: 'aprendiz' },
    { nombre: 'Sara hoyos', descripcion: 'aprendiz' },
    { nombre: 'Isabel Bastidas', descripcion: 'aprendiz' },
    { nombre: 'Felipe noguera', descripcion: 'aprendiz' },
    { nombre: 'Juan Pabon', descripcion: 'aprendiz' },
    { nombre: 'Andres Rivera', descripcion: 'aprendiz' },
  ]);
  useEffect(() => {
    setTotalElementos(datos.length);
  }, [datos.length]);


  const handleFilasPorPaginaChange = (valor) => {
    setFilasPorPagina(valor);
    setPaginaActual(1);};


  return (
    <div className="App">
      <h1>Lista de Datos</h1>
      <Select onChange={handleFilasPorPaginaChange} />
      </div>
  );
}

export default App;

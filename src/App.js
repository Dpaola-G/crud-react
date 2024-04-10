import React, { useState, useEffect } from 'react';
import Select from './components/Select';
import Tabla from './components/Tabla';
import Search from './components/Search';
import AgregarDatos from './components/AgregarDatos'; // Importamos el componente AgregarDatos

function App() {
  const [datosFiltrados, setDatosFiltrados] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [filasPorPagina, setFilasPorPagina] = useState(5);
  const [totalElementos, setTotalElementos] = useState(0);
  const [paginaActual, setPaginaActual] = useState(1);
  const [mostrarAgregar, setMostrarAgregar] = useState(false); // Nuevo: Estado para controlar la visibilidad del formulario de agregar
  const [datos, setDatos] = useState([

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
    { nombre: 'isabel Gutierrez', descripcion: 'aprendiz' },
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
    setPaginaActual(1);
  };

  const handleBusqueda = (valorBusqueda) => {
    setBusqueda(valorBusqueda);

    const datosFiltrados = datos.filter((dato) =>
      dato.nombre.toLowerCase().startsWith(valorBusqueda.toLowerCase())
    );
    setDatosFiltrados(datosFiltrados);
  };

  const handleMostrarAgregar = () => {
    setMostrarAgregar(true); // Mostrar el formulario de agregar
  };

  const handleCancelarAgregar = () => {
    setMostrarAgregar(false); // Ocultar el formulario de agregar
  };

  const handleAceptarAgregar = (nuevoDato) => {
    setDatos([...datos, nuevoDato]); // Agregar el nuevo dato a la lista
    handleCancelarAgregar(); // Ocultar el formulario de agregar
  };


  

  return (
    <div className="App">
      <h1>Lista de Datos</h1>
      <Select onChange={handleFilasPorPaginaChange} /> 
      <button onClick={handleMostrarAgregar}>Agregar Nuevo</button> {/* Nuevo: Botón para mostrar el formulario de agregar */}
      {mostrarAgregar && (
        <AgregarDatos onAgregar={handleAceptarAgregar} />) /* Nuevo: Agregar el componente AgregarDatos */
      }
      
      <Search onSearch={handleBusqueda} />
      <Tabla
        datos={
          busqueda
            ? datosFiltrados.slice(
                (paginaActual - 1) * filasPorPagina,
                paginaActual * filasPorPagina
              )
            : datos.slice(
                (paginaActual - 1) * filasPorPagina,
                paginaActual * filasPorPagina
              )
        }
        paginaActual={paginaActual}
        totalElementos={totalElementos}
        filasPorPagina={filasPorPagina}
      />
    </div>
  );
}

export default App;
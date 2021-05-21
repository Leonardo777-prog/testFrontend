import React from 'react';
import { useClima } from './hooks/useClima';
import { Table } from './components/Table';

function App() {
  const { dataClima } = useClima()
  return (
    <>
      <h1>Ejercicio 3</h1>
      <main className="contenedor">
        <div className="contenedor-table">
          <Table
            headings={["Nombre", "Pais", "Hora Local", "Humedad", "Temperatura", "Clima"]}
            data={dataClima}
          />
        </div>
      </main>
    </>
  );
}

export default App;

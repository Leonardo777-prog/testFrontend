import React from "react";
import { Card } from "./components/Card";
import { info } from "./utils/infoCard";

const App = () => {
  return (
    <>
      <h1>Ejercicio 2</h1>
      <main className="contenedor">
        <Card urlImage={info.urlImage} texto={info.info} title={info.title} />
      </main>
    </>
  );
};

export default App;

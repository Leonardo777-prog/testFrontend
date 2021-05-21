import React from "react";
import { Card } from "./components/Card";
import { useModal } from "./hook/useModal";
import { info } from "./utils/infoCard";
const App = () => {
  const { visible, handleChangeModal, Modal } = useModal();
  console.log(visible);
  return (
    <>
      <h1>Ejercicio 2</h1>
      <main className="contenedor">
        <Card
          urlImage={info.urlImage}
          texto={info.info}
          title={info.title}
          accion={handleChangeModal}
        />
      </main>
      {visible && (
        <Modal>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/1nydxbGhgv8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Modal>
      )}
    </>
  );
};

export default App;

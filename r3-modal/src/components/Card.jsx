import React from "react";

export const Card = ({ urlImage, title, texto, accion }) => {
  return (
    <div className="card">
      <div className="contenedor-imagen">
        <img src={urlImage} alt={title} loading="lazy" />
        <div className="contenedor-icono">
          <div className="icono-play" onClick={() => accion()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-player-play"
              width="76"
              height="76"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 4v16l13 -8z" />
            </svg>
          </div>
        </div>
      </div>
      <div>
        <h2>{title}</h2>
        <p>{texto}</p>
      </div>
    </div>
  );
};

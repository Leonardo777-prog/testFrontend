import React from "react";

export const Card = ({ urlImage, title, texto }) => {
  return (
    <div className="card">
      <div>
        <img src={urlImage} alt={title} loading="lazy" />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{texto}</p>
      </div>
    </div>
  );
};

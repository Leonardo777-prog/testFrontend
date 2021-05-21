import React from "react";

export const Table = ({ headings = [], data = [] }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {headings.map((heading, index) => (
              <th key={index}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((info, index) => (
            <tr key={index}>{<Colum data={info} />}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Colum = ({ data = {} }) => {
  const values = Object.values(data);
  return (
    <>
      {values.map((info, index) => (
        <td key={index}>{info}</td>
      ))}
    </>
  );
};

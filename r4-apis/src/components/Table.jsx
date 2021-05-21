import React from "react";
import { Spinner } from "./Spinner";
export const Table = ({ headings = [], data = [] }) => {
  console.log(data[0]);
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
          {data.length === 0 ? (
            <tr>
              <td colSpan={headings.length}>
                <Spinner />
              </td>
            </tr>
          ) : (
            data.map((info, index) => (
              <tr key={index}>
                <td>{info.location.name}</td>
                <td>{info.location.country}</td>
                <td>
                  {new Date(info.location.localtime).toLocaleTimeString()}
                </td>
                <td>{info.current.humidity}%</td>
                <td>{info.current.temperature}°</td>
                <td>
                  <img
                    src={info.current.weather_icons[0]}
                    alt=""
                    loading="lazy"
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

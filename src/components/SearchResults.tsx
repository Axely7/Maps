import React from "react";

export const SearchResults = () => {
  return (
    <ul className="list-group mt-3">
      <li className="list-group-item list-group-item-action">
        <h6>Nombre del Lugar</h6>
        <p className="text-muted" style={{ fontSize: "12px" }}>
          In cupidatat dolor exercitation pariatur.
        </p>
        <button className="btn btn-outline-primary btn-sm">Direcciones</button>
      </li>
    </ul>
  );
};

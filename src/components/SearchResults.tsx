import React, { useContext, useState } from "react";
import { PlacesContext, MapContext } from "../context";
import { LoadingPlaces } from "./";
import { Feature } from "../interfaces/places";

export const SearchResults = () => {
  const { isLoadingPlaces, places } = useContext(PlacesContext);
  const { map } = useContext(MapContext);

  const [activeId, setActiveId] = useState("");

  const onPlaceClicked = (place: Feature) => {
    setActiveId(place.id);

    const [lng, lat] = place.center;

    map?.flyTo({ zoom: 14, center: [lng, lat] });
  };

  if (isLoadingPlaces) {
    return <LoadingPlaces />;
  }

  if (places.length === 0) {
    return <></>;
  }

  return (
    <ul className="list-group mt-3">
      {places.map((place) => (
        <li
          key={place.id}
          className={`${
            activeId === place.id ? "active" : ""
          } list-group-item list-group-item-action pointer`}
          onClick={() => onPlaceClicked(place)}
        >
          <h6>{place.text_es}</h6>
          <p className="text-muted" style={{ fontSize: "12px" }}>
            {place.place_name_es}
          </p>
          <button
            className={`${
              activeId === place.id
                ? "btn-outline-light"
                : "btn-outline-primary"
            } btn  btn-sm`}
          >
            Direcciones
          </button>
        </li>
      ))}
    </ul>
  );
};

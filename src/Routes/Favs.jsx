import React, { useContext } from "react";
import { ContextGlobal } from "../context/ContextGlobal";
import Card from "../Components/Card";

const Favs = () => {
  const { state } = useContext(ContextGlobal);

  // Obtener dentistas favoritos del localStorage
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div className={state.theme === "dark" ? "dark-favs" : "light-favs"}>
      <h1>Dentistas Favoritos</h1>
      <div className="card-grid">
        {favorites.map((dentist) => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Favs;
import React from "react";
import { useHistory } from "react-router-dom";

const Card = ({ name, username, id }) => {
  const history = useHistory();

  const addFav = () => {
    // Obtener la lista actual de favoritos del localStorage
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    // Verificar si el dentista ya está en favoritos
    const isAlreadyFav = favorites.find((fav) => fav.id === id);

    if (!isAlreadyFav) {
      // Si no está en favoritos, agregarlo
      const newFavorite = { id, name, username };
      favorites.push(newFavorite);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } else {
      // Si ya está en favoritos, mostrar un mensaje o realizar otra acción
      alert("Este dentista ya está en favoritos");
    }
  };

  const goToDetail = () => {
    // Redirigir a la página de detalle del dentista
    history.push(`/dentist/${id}`);
  };

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Username: {username}</p>
      <p>ID: {id}</p>
      <button onClick={goToDetail} className="detailButton">
        Ver detalle
      </button>
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
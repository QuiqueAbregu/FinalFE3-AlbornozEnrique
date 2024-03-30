import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../context/ContextGlobal';

const Detail = () => {
  const { id } = useParams();
  const { state } = useContext(ContextGlobal);
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    const fetchDentist = async () => {
      try {
        const response = await fetch(`https://example.com/api/dentists/${id}`);
        if (response.ok) {
          const data = await response.json();
          setDentist(data);
        } else {
          console.error('Error al obtener los datos del dentista');
        }
      } catch (error) {
        console.error('Error al obtener los datos del dentista:', error);
      }
    };

    fetchDentist();
  }, [id]);

  return (
    <div className={state.theme === 'dark' ? 'dark-detail' : 'light-detail'}>
      <h1>Detalles del Dentista</h1>
      {dentist ? (
        <div>
          <h2>{dentist.name}</h2>
          <p>Email: {dentist.email}</p>
          <p>Teléfono: {dentist.phone}</p>
          <p>Website: {dentist.website}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Detail;
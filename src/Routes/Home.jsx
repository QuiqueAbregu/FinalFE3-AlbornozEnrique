import React, { useContext } from 'react';
import { ContextGlobal } from '../context/ContextGlobal';
import Card from '../Components/Card';

const Home = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <main className={state.theme === 'dark' ? 'dark-home' : 'light-home'}>
      <h1>Home</h1>
      <div className='card-grid'>
        <Card name="Dentista 1" username="dentista1" id="1" />
        <Card name="Dentista 2" username="dentista2" id="2" />
      </div>
    </main>
  );
};

export default Home;
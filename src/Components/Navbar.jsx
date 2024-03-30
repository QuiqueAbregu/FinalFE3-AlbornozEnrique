import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from '../context/ContextGlobal';

const Navbar = () => {
  const { state, setTheme } = useContext(ContextGlobal);

  const handleChangeTheme = () => {
    setTheme(state.theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className={state.theme === 'dark' ? 'dark-navbar' : 'light-navbar'}>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
        <li>
          <Link to="/favs">Favoritos</Link>
        </li>
      </ul>
      <button onClick={handleChangeTheme}>Change theme</button>
    </nav>
  );
};

export default Navbar;
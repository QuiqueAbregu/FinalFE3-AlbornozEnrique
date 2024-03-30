import React, { useContext } from 'react';
import Form from '../Components/Form';
import { ContextGlobal } from '../context/ContextGlobal';

const Contact = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div className={state.theme === 'dark' ? 'dark-contact' : 'light-contact'}>
      <h2>¿Quieres saber más?</h2>
      <p>Envíanos tus preguntas y te contactaremos</p>
      <Form />
    </div>
  );
};

export default Contact;
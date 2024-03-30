import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    error: "",
    successMessage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      error: "",
      successMessage: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar los datos del formulario
    if (formData.fullName.length < 5 || !formData.email.includes("@")) {
      setFormData((prevData) => ({
        ...prevData,
        error: "Por favor verifique su información nuevamente",
        successMessage: "",
      }));
    } else {
      // Enviar el formulario (aquí puedes implementar la lógica para enviar el formulario)
      setFormData((prevData) => ({
        ...prevData,
        successMessage: `Gracias ${formData.fullName}, te contactaremos cuando antes vía mail`,
        fullName: "",
        email: "",
        error: "",
      }));
    }
  };

  return (
    <div>
      <h2>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nombre completo:
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        {formData.error && <p style={{ color: "red" }}>{formData.error}</p>}
        {formData.successMessage && (
          <p style={{ color: "green" }}>{formData.successMessage}</p>
        )}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;

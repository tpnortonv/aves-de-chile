// Importamos React y librerías necesarias
import { useState } from "react"; // Para manejar el estado del formulario
import Navbar from "../components/Navbar"; // Barra de navegación
import { TextField, Button, Typography, Box } from "@mui/material"; // Componentes de Material-UI

// Creamos un componente funcional para la página inicial
const LandingPage = () => {
  // Estado para almacenar los valores del formulario
  const [name, setName] = useState(""); // Estado para el nombre del usuario
  const [email, setEmail] = useState(""); // Estado para el correo electrónico
  const [message, setMessage] = useState(""); // Estado para los mensajes de éxito o error

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evitar que la página se recargue al enviar el formulario

    // Validación simple para asegurarse de que los campos no estén vacíos
    if (name && email) {
      setMessage("¡Gracias por suscribirte al boletín!"); // Mensaje de éxito
      setName(""); // Limpiar el campo de nombre
      setEmail(""); // Limpiar el campo de correo electrónico
    } else {
      setMessage("Por favor, ingrese un nombre y un correo electrónico válidos."); // Mensaje de error
    }
  };

  return (
    <>
      {/* Incluimos la barra de navegación */}
      <Navbar />

      {/* Contenedor principal de la página */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {/* Título de bienvenida */}
        <h2>Bienvenidos a Pájaros de Chile</h2>
        
        {/* Título del formulario */}
        <h3>¡Suscríbete a nuestro boletín!</h3>

        {/* Caja centrada para el formulario */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "300px",
            margin: "0 auto",
            padding: "20px",
            boxShadow: 3, // Agrega sombra alrededor de la caja
            borderRadius: "8px",
            backgroundColor: "#f5f5f5",
          }}
        >
          {/* Campo para el nombre */}
          <TextField
            label="Nombre"
            variant="outlined"
            fullWidth
            value={name} // El valor del campo es el estado 'name'
            onChange={(e) => setName(e.target.value)} // Actualiza el estado con el nuevo valor del campo
            required
            sx={{ marginBottom: "15px" }} // Espaciado entre los campos
          />

          {/* Campo para el correo electrónico */}
          <TextField
            label="Correo Electrónico"
            variant="outlined"
            fullWidth
            value={email} // El valor del campo es el estado 'email'
            onChange={(e) => setEmail(e.target.value)} // Actualiza el estado con el nuevo valor del campo
            required
            type="email" // Establece el tipo de campo como correo electrónico
            sx={{ marginBottom: "15px" }} // Espaciado entre los campos
          />

          {/* Botón para enviar el formulario */}
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            sx={{ marginTop: "10px" }} // Espaciado entre el botón y el campo anterior
          >
            Suscribirse
          </Button>
        </Box>

        {/* Mensaje que se muestra después de enviar el formulario */}
        {message && (
          <Typography
            variant="h6"
            style={{
              marginTop: "20px",
              color: message.includes("Gracias") ? "green" : "red",
            }}
          >
            {message}
          </Typography>
        )}
      </div>
    </>
  );
};

// Exportamos el componente para usarlo en las rutas
export default LandingPage;



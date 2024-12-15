// Importamos las librerías y componentes necesarios
import React from "react"; // React principal
import ReactDOM from "react-dom/client"; // ReactDOM para renderizar la aplicación
import App from "./App"; // Componente principal
import "./styles.css"; // Estilos globales

// Renderizamos la aplicación dentro del elemento con ID "root" del archivo HTML
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Incluimos la aplicación principal */}
    <App />
  </React.StrictMode>
);


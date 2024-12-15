// Importamos las librerías necesarias
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Para manejar las rutas
import LandingPage from "./pages/LandingPage"; // Página inicial
import BirdsPage from "./pages/BirdsPage"; // Página que muestra todas las aves
import BirdDetails from "./pages/BirdDetails"; // Página de detalles de una ave

// Componente principal de la aplicación
const App = () => {
  return (
    // Configuramos el enrutador para manejar las rutas de la aplicación
    <BrowserRouter>
      {/* Definimos las rutas */}
      <Routes>
        {/* Ruta para la página inicial */}
        <Route path="/" element={<LandingPage />} />
        {/* Ruta para la página que muestra todas las aves */}
        <Route path="/birds" element={<BirdsPage />} />
        {/* Ruta para la página de detalles de una ave específica */}
        <Route path="/birds/:id" element={<BirdDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

// Exportamos el componente para usarlo en otras partes del proyecto
export default App;


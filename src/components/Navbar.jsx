// Importamos React Router para manejar los enlaces
import { Link } from "react-router-dom";

// Creamos un componente funcional para la barra de navegación
const Navbar = () => {
  return (
    // Contenedor principal de la barra de navegación
    <div className="navbar">
      {/* Título de la aplicación */}
      <h1>Pájaros de Chile</h1>
      {/* Navegación con enlaces */}
      <nav>
        {/* Enlace a la página inicial */}
        <Link to="/">Home</Link>
        {/* Enlace a la página de todas las aves */}
        <Link to="/birds">Aves</Link>
      </nav>
    </div>
  );
};

// Exportamos el componente para usarlo en otras páginas
export default Navbar;

// Importamos React y librerías necesarias
import { useParams } from "react-router-dom"; // Para obtener parámetros de la URL
import { useState, useEffect } from "react"; // Hooks para estado y efectos secundarios
import Navbar from "../components/Navbar"; // Barra de navegación
import { CircularProgress } from "@mui/material"; // Componente para mostrar el spinner

// Creamos el componente funcional para mostrar detalles de un ave
const BirdDetails = () => {
  const { id } = useParams(); // Obtenemos el parámetro "id" de la URL
  const [bird, setBird] = useState(null); // Estado para almacenar la información del ave
  const [error, setError] = useState(null); // Estado para manejar errores
  const [loading, setLoading] = useState(true); // Estado para controlar la carga de datos

  // Hook useEffect para obtener datos de la API al cargar el componente
  useEffect(() => {
    const fetchBird = async () => {
      try {
        // Llamada a la API para obtener los detalles del ave
        const response = await fetch(`https://aves.ninjas.cl/api/birds/${id}`);
        const data = await response.json(); // Convertimos la respuesta en JSON
        setBird(data); // Guardamos los datos en el estado
      } catch (err) {
        // Si hay un error, lo guardamos en el estado
        setError("Error al cargar los detalles del ave.");
      } finally {
        setLoading(false); // Al finalizar la carga (ya sea con éxito o error), cambiamos el estado de loading
      }
    };
    fetchBird(); // Llamamos a la función que obtiene los datos
  }, [id]); // Este efecto se ejecuta cada vez que cambia "id"

  // Si hay un error, lo mostramos
  if (error) {
    return <div>{error}</div>;
  }

  // Si los datos aún están cargando, mostramos el spinner
  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <>
      {/* Barra de navegación */}
      <Navbar />
      {/* Contenedor principal */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {/* Mostramos el nombre en español */}
        <h2>{bird.name.spanish}</h2>
        {/* Mostramos los nombres en inglés y latín */}
        <p><strong>Nombre en inglés:</strong> {bird.name.english}</p>
        <p><strong>Nombre en latín:</strong> {bird.name.latin}</p>
        {/* Mostramos la imagen principal */}
        <img
          src={bird.images.main}
          alt={bird.name.spanish}
          style={{
            width: "300px",
            display: "block",
            margin: "20px auto",
            borderRadius: "15px",
          }}
        />
      </div>
    </>
  );
};

// Exportamos el componente para usarlo en las rutas
export default BirdDetails;



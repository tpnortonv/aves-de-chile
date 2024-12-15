// Importamos React y librerías necesarias
import { useState, useEffect } from "react"; // Hooks para manejar estado y efectos secundarios
import Navbar from "../components/Navbar"; // Barra de navegación
import { Link } from "react-router-dom"; // Para crear enlaces
import { Card, CardMedia, CardContent, Typography, Button, CircularProgress } from "@mui/material"; // Componentes de Material-UI para diseño

// Creamos el componente funcional para mostrar todas las aves
const BirdsPage = () => {
  const [birds, setBirds] = useState([]); // Estado para almacenar las aves
  const [error, setError] = useState(null); // Estado para manejar errores
  const [loading, setLoading] = useState(true); // Estado para controlar la carga de datos

  // Hook useEffect para obtener datos de la API al cargar el componente
  useEffect(() => {
    const fetchBirds = async () => {
      try {
        // Llamada a la API para obtener la lista de aves
        const response = await fetch("https://aves.ninjas.cl/api/birds");
        const data = await response.json(); // Convertimos la respuesta en JSON
        setBirds(data); // Guardamos los datos en el estado
      } catch (err) {
        // Si hay un error, lo guardamos en el estado
        setError("Error al cargar los datos.");
      } finally {
        setLoading(false); // Al finalizar la carga (ya sea con éxito o error), cambiamos el estado de loading
      }
    };
    fetchBirds(); // Llamamos a la función que obtiene los datos
  }, []); // Este efecto solo se ejecuta una vez al montar el componente

  // Si hay un error, lo mostramos
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {/* Barra de navegación */}
      <Navbar />
      {/* Si los datos están cargando, mostramos el spinner */}
      {loading ? (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <CircularProgress />
        </div>
      ) : (
        // Si ya se cargaron los datos, mostramos las cards
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px" }}>
          {/* Recorremos el arreglo de aves para mostrar una card por cada una */}
          {birds.map((bird) => (
            <Card key={bird.uid} style={{ width: "300px" }}>
              {/* Imagen principal del ave */}
              <CardMedia
                component="img"
                height="140"
                image={bird.images.main}
                alt={bird.name.spanish}
              />
              {/* Contenido de la card */}
              <CardContent>
                <Typography variant="h6">{bird.name.spanish}</Typography>
                {/* Botón de Material-UI que redirige a la página de detalles */}
                <Link to={`/birds/${bird.uid}`} style={{ textDecoration: "none" }}>
                  <Button variant="contained" color="primary" fullWidth>
                    Ver detalles
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </>
  );
};

// Exportamos el componente para usarlo en las rutas
export default BirdsPage;




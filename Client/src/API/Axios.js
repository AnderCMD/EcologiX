// TODO: Archivo para crear la instancia de axios personalizada

// ? Importaciones de paquetes
import axios from "axios";

// ? Crear instancia de axios personalizada
const Instancia = axios.create(
    {
        baseURL: "http://localhost:3000/API", // URL de la API
        withCredentials: true, // Enviar cookies al servidor
    }
);

// ? Exportar instancia de axios personalizada
export default Instancia;
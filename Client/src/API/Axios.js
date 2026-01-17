// TODO: Archivo para crear la instancia de axios personalizada

// ? Importaciones de paquetes
import axios from 'axios';

// ? Crear instancia de axios personalizada
const Instancia = axios.create({
	baseURL: import.meta.env.VITE_API_URL, // URL de la API
	withCredentials: true, // Enviar cookies al servidor
});

// ? Exportar instancia de axios personalizada
export default Instancia;

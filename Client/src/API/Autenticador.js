// TODO: Enviar datos de Usuario a la API

// ? Importaciones de paquetes
import axios from './Axios'; // Importar axios de la instancia personalizada

// ? Registro de Usuario
export const RegistroSolicitud = (Usuario) =>
	axios.post('/Registro', Usuario); // Enviar Usuario a la API

// ? Login de Usuario
export const LoginSolicitud = (Usuario) =>
	axios.post('/Login', Usuario); // Enviar Usuario a la API

// ? Verificar Token de Usuario
export const VerificarTokenSolicitud = () =>
	axios.get('/VerificarToken'); // Enviar Usuario a la API
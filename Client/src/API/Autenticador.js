import axios from 'axios';

const API = 'http://localhost:3000/API';

// ? Registro de Usuario
export const RegistroSolicitud = (Usuario) =>
	axios.post(`${API}/Registro`, Usuario); // Enviar Usuario a la API


// ? Login de Usuario
export const LoginSolicitud = (Usuario) =>
	axios.post(`${API}/Login`, Usuario); // Enviar Usuario a la API
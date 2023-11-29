import axios from 'axios';

const API = 'http://localhost:3000/API';

export const RegistroSolicitud = (Usuario) =>
	axios.post(`${API}/Registro`, Usuario);

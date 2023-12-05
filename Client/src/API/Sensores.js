// TODO: Archivo de conexion con el backend, para la tabla de Sensores

// ? Importaciones
import axios from './Axios';

// * Metodos GET
export const ObtenerSensoresRequest = () => axios.get('/Sensores');
export const ObtenerSensorRequest = (ID) => axios.get(`/Sensores/${ID}`);

// * Metodos POST
export const CrearSensorRequest = (Sensor) => axios.post('/Sensores', Sensor);

// * Metodos PUT
export const ActualizarSensorRequest = (ID, Sensor) =>
	axios.put(`/Sensores/${ID}`, Sensor);

// * Metodos DELETE
export const EliminarSensorRequest = (ID) => axios.delete(`/Sensores/${ID}`);

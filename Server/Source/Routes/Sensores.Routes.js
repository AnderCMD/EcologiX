// TODO: Ruta de sensores

// ? Importaciones
import router from 'express';
import { AutenticacionRequerida } from '../Middlewares/ValidarToken.js';
import { ValidarSchema } from '../Middlewares/ValidarSchema.js';
import {
	CrearSensorSchema,
	ActualizarSensorSchema,
} from '../Schemas/Sensores.Schemas.js';

// ? Importaciones de controllers de sensores
import {
	ObtenerSensores,
	CrearSensor,
	ObtenerSensor,
	ActualizarSensor,
	EliminarSensor,
} from '../Controllers/Sensores.Controller.js';

// ? Inicializaciones
const Router = router();

// ? Rutas get
Router.get('/Sensores', AutenticacionRequerida, ObtenerSensores); // Obtener todos los sensores
Router.get('/Sensores/:id', AutenticacionRequerida, ObtenerSensor); // Obtener tarea por id

// ? Ruta post
Router.post(
	'/Sensores',
	AutenticacionRequerida,
	ValidarSchema(CrearSensorSchema),
	CrearSensor
); // Crear sensor

// ? Rutas delete
Router.delete('/Sensores/:id', AutenticacionRequerida, EliminarSensor); // Eliminar sensor por id

// ? Rutas put
Router.put(
	'/Sensores/:id',
	AutenticacionRequerida,
	ValidarSchema(ActualizarSensorSchema),
	ActualizarSensor
); // Actualizar sensor por id

// ? Exportaciones
export default Router;

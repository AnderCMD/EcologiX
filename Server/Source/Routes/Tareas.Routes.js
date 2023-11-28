// TODO: Ruta de tareas

// ? Importaciones
import router from 'express';
import { AutenticacionRequerida } from '../Middlewares/ValidarToken.js';
import { ValidarSchema } from '../Middlewares/ValidarSchema.js';
import {
	CrearTareaSchema,
	ActualizarTareaSchema,
} from '../Schemas/Tareas.Schemas.js';

// ? Importaciones de controllers de tareas
import {
	ObtenerTareas,
	CrearTarea,
	ObtenerTarea,
	ActualizarTarea,
	EliminarTarea,
} from '../Controllers/Tareas.Controller.js';

// ? Inicializaciones
const Router = router();

// ? Rutas get
Router.get('/Tareas', AutenticacionRequerida, ObtenerTareas); // Obtener todas las tareas
Router.get('/Tareas/:id', AutenticacionRequerida, ObtenerTarea); // Obtener tarea por id

// ? Ruta post
Router.post(
	'/Tareas',
	AutenticacionRequerida,
	ValidarSchema(CrearTareaSchema),
	CrearTarea
); // Crear tarea

// ? Rutas delete
Router.delete('/Tareas/:id', AutenticacionRequerida, EliminarTarea); // Eliminar tarea

// ? Rutas put
Router.put(
	'/Tareas/:id',
	AutenticacionRequerida,
	ValidarSchema(ActualizarTareaSchema),
	ActualizarTarea
); // Actualizar tarea

// ? Exportaciones
export default Router;

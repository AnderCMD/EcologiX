// TODO: Ruta de tareas

// ? Importaciones
import router from 'express';
import { AutenticacionRequerida } from '../Middlewares/ValidarToken.js';

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
Router.post('/Tareas', AutenticacionRequerida, CrearTarea); // Crear tarea

// ? Rutas delete
Router.delete('/Tareas/:id', AutenticacionRequerida, EliminarTarea); // Eliminar tarea

// ? Rutas put
Router.put('/Tareas/:id', AutenticacionRequerida, ActualizarTarea); // Actualizar tarea

// ? Exportaciones
export default Router;

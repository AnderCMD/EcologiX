// TODO: Controlador de las tareas

// ? Importaciones
import TareaModel from '../Models/Tarea.Model.js';

// * Metodos GET
// ? Obtener tareas de un usuario (GET)
export const ObtenerTareas = async (req, res) => {
	try {
		const Tareas = await TareaModel.find({ // Buscar tareas por id de usuario y poblar el campo usuario con los datos del usuario
			Usuario: req.Usuario.ID,
		}).populate('Usuario');
		console.log('✅ ¡Tareas obtenidas exitosamente!');
		res.status(200).json(Tareas); // Responder con el mensaje de exito
	} catch (error) {
		console.log('❌ ¡Error al obtener tareas!');
		res.status(500).json({ message: error.message }); // Responder con el error
	}
};

// ? Obtener tarea por id (GET)
export const ObtenerTarea = async (req, res) => {
	try {
		const Tarea = await TareaModel.findById(req.params.id).populate('Usuario'); // Buscar tarea por id y poblar el campo usuario con los datos del usuario

		// Si no se encuentra la tarea
		if (!Tarea) {
			console.log('⚠️ ¡Tarea no encontrada!');
			return res.status(404).json({ message: '⚠️ Tarea no encontrada' }); // Responder con el error
		} else {
			console.log('✅ ¡Tarea encontrada exitosamente!');
			res.status(200).json(Tarea); // Responder con el mensaje de exito
		}
	} catch (error) {
		console.log('❌ ¡Error al obtener tarea!');
		res.status(500).json({ message: error.message }); // Responder con el error
	}
};

// * Metodos POST
// ? Crear tarea (POST)
export const CrearTarea = async (req, res) => {
	try {
		// Intentar crear una tarea
		const { Titulo, Descripcion, Fecha } = req.body; // Obtener los datos de la tarea

		const NuevaTarea = new TareaModel({
			Titulo,
			Descripcion,
			Fecha,
			Usuario: req.Usuario.ID, // Obtener el id del usuario logueado y asignarlo a la tarea creada
		}); // Crear una nueva tarea
		const TareaGuardada = await NuevaTarea.save(); // Guardar la tarea en la base de datos

		console.log('✅ ¡Tarea creada exitosamente!');
		res.status(201).json(TareaGuardada); // Responder con el mensaje de exito
	} catch (error) {
		// Si ocurre un error
		console.log('❌ ¡Error al crear tarea!');
		res.status(500).json({ message: error.message }); // Responder con el error
	}
};

// * Metodos DELETE
// ? Eliminar tarea (DELETE)
export const EliminarTarea = async (req, res) => {
	try {
		const Tarea = await TareaModel.findByIdAndDelete(req.params.id); // Buscar tarea por id y eliminarla
		console.log('✅ ¡Tarea eliminada exitosamente!');
		res.status(204).json(Tarea); // Responder con el mensaje de exito
	} catch (error) {
		console.log('❌ ¡Error al eliminar tarea!');
		res.status(500).json({ message: '❌ Error al eliminar tarea' }); // Responder con el mensaje de error
	}
};

// * Metodos PUT
// ? Actualizar tarea (PUT)
export const ActualizarTarea = async (req, res) => {
	try {
		const Tarea = await TareaModel.findByIdAndUpdate(
			req.params.id,
			req.body,
			{
				new: true, // Devolver la tarea actualizada en lugar de la anterior
			}
		); // Buscar tarea por id y actualizarla con los datos del body
		console.log('✅ ¡Tarea actualizada exitosamente!');
		res.status(204).json(Tarea); // Responder con el mensaje de exito
	} catch (error) {
		console.log('❌ ¡Error al actualizar tarea!');
		res.status(500).json({ message: error.message }); // Responder con el error
	}
};

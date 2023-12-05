// TODO: Controlador de los sensores

// ? Importaciones
import SensorModel from '../Models/Sensor.Model.js';

// * Metodos GET
// ? Obtener sensores de un usuario (GET)
export const ObtenerSensores = async (req, res) => {
	try {
		const Sensores = await SensorModel.find({ // Buscar sensores por id de usuario y poblar el campo usuario con los datos del usuario
			Usuario: req.Usuario.ID,
		}).populate('Usuario');
		console.log('✅ ¡Sensores obtenidos exitosamente!');
		res.status(200).json(Sensores); // Responder con el mensaje de exito
	} catch (error) {
		console.log('❌ ¡Error al obtener sensores!');
		res.status(500).json({ message: error.message }); // Responder con el error
	}
};

// ? Obtener sensor por id (GET)
export const ObtenerSensor = async (req, res) => {
	try {
		const Sensor = await SensorModel.findById(req.params.id).populate('Usuario'); // Buscar sensor por id y poblar el campo usuario con los datos del usuario

		// Si no se encuentra el sensor
		if (!Sensor) {
			console.log('⚠️ ¡Sensor no encontrado!');
			return res.status(404).json({ message: '⚠️ Sensor no encontrado' }); // Responder con el error
		} else {
			console.log('✅ ¡Sensor encontrado exitosamente!');
			res.status(200).json(Sensor); // Responder con el mensaje de exito
		}
	} catch (error) {
		console.log('❌ ¡Error al obtener sensor!');
		res.status(500).json({ message: error.message }); // Responder con el error
	}
};

// * Metodos POST
// ? Crear sensor (POST)
export const CrearSensor = async (req, res) => {
	try {
		// Intentar crear un sensor
		const { Nombre, Descripcion, Puerto, Velocidad_Transmision, Imagen  } = req.body; // Obtener los datos del sensor

		const NuevoSensor = new SensorModel({
			Nombre,
			Descripcion,
			Puerto,
			Velocidad_Transmision,
			Imagen,
			Usuario: req.Usuario.ID, // Obtener el id del usuario logueado y asignarlo al sensor creado
		}); // Crear un nuevo sensor
		
		const SensorGuardado = await NuevoSensor.save(); // Guardar el sensor en la base de datos

		console.log('✅ ¡Sensor creado exitosamente!');
		res.status(201).json(SensorGuardado); // Responder con el mensaje de exito
	} catch (error) {
		// Si ocurre un error
		console.log('❌ ¡Error al crear sensor!');
		res.status(500).json({ message: error.message }); // Responder con el error
	}
};

// * Metodos DELETE
// ? Eliminar sensor (DELETE)
export const EliminarSensor = async (req, res) => {
	try {
		const Sensor = await SensorModel.findByIdAndDelete(req.params.id); // Buscar sensor por id y eliminarla
		console.log('✅ ¡Sensor eliminado exitosamente!');
		res.status(204).json(Sensor); // Responder con el mensaje de exito
	} catch (error) {
		console.log('❌ ¡Error al eliminar sensor!');
		res.status(500).json({ message: '❌ Error al eliminar sensor' }); // Responder con el mensaje de error
	}
};

// * Metodos PUT
// ? Actualizar sensor (PUT)
export const ActualizarSensor = async (req, res) => {
	try {
		const Sensor = await SensorModel.findByIdAndUpdate(
			req.params.id,
			req.body,
			{
				new: true, // Devolver el sensor actualizado en lugar de la anterior
			}
		); // Buscar sensor por id y actualizarla con los datos del body
		console.log('✅ ¡Sensor actualizado exitosamente!');
		res.status(204).json(Sensor); // Responder con el mensaje de exito
	} catch (error) {
		console.log('❌ ¡Error al actualizar sensor!');
		res.status(500).json({ message: error.message }); // Responder con el error
	}
};


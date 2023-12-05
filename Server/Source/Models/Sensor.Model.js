// TODO: Esquema de la tabla Sensor

// ? Importaciones
import mongoose from 'mongoose';

// ? Esquema del sensor
const SensorSchema = new mongoose.Schema(
	{
		// Definir el esquema de la tabla
		Nombre: {
			type: String, // Tipo de dato
			required: true, // Es obligatorio
			unique: true, // Es único
			trim: true, // Elimina espacios en blanco al inicio y al final
		},
		Descripcion: {
			type: String,
			required: true,
			trim: true,
		},
		Puerto: {
			type: String,
			required: true,
			trim: true,
		},
		Velocidad_Transmision: {
			type: Number, // ! Revisar si es el tipo de dato correcto para la velocidad de transmision de datos del sensor (Baudios)
			required: true,
			trim: true,
		},
		Imagen: {
			type: String,
			required: true,
			trim: true,
		},
		Usuario: {
			// Referencia al usuario que creó la tarea
			type: mongoose.Schema.Types.ObjectId, // Tipo de dato ObjectId (ID de MongoDB) para referenciar a un usuario de la tabla Usuario
			ref: 'Usuario', // Referencia a la tabla
			required: true, // Es obligatorio
		},
	},
	{
		// Opciones
		timestamps: true, // Para agregar la fecha de creación y actualización de cada registro
	}
);

// ? Exportaciones
export default mongoose.model('Sensor', SensorSchema);


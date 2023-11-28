// ? Importaciones
import mongoose from 'mongoose';

// ? Esquema de la tarea
const TareaSchema = new mongoose.Schema(
	{
		// Definir el esquema de la tabla
		Titulo: {
			// Titulo de la tarea
			type: String, // Tipo de dato
			required: true, // Es obligatorio
			trim: true, // Elimina espacios en blanco al inicio y al final
		},
		Descripcion: {
			type: String,
			required: true,
			trim: true,
		},
		Fecha: {
			type: Date,
			default: Date.now(), // Fecha actual por defecto al crear la tarea (opcional)
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
export default mongoose.model('Tarea', TareaSchema);

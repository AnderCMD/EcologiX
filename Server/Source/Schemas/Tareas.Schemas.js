// TODO: Esquemas para validar los datos de las tareas

// ? Importaciones
import Zod from 'zod';

// ? Esquema de validacion de datos de entrada de las tareas para crear una tarea
export const CrearTareaSchema = Zod.object({
	Titulo: Zod.string({
		required_error: '⚠️ El titulo es requerido',
	}),
	Descripcion: Zod.string({
		required_error: '⚠️ La descripcion es requerida',
	}),
	Fecha: Zod.string().datetime().optional(),
});

// ? Esquema de validacion de datos de entrada de las tareas para actualizar una tarea
export const ActualizarTareaSchema = Zod.object({
	Titulo: Zod.string({
		required_error: '⚠️ El titulo es requerido',
	}),
	Descripcion: Zod.string({
		required_error: '⚠️ La descripcion es requerida',
	}),
	Fecha: Zod.string().datetime().optional(),
});

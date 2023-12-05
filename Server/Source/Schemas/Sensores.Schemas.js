// TODO: Esquemas para validar los datos de los sensores

// ? Importaciones
import Zod from 'zod';

// ? Esquema de validacion de datos de entrada de los sensores para crear un sensor
export const CrearSensorSchema = Zod.object({
	Nombre: Zod.string({
		required_error: '⚠️ El nombre es requerido',
	}),
	Descripcion: Zod.string({
		required_error: '⚠️ La descripcion es requerida',
	}),
	Puerto: Zod.string({
		required_error: '⚠️ El puerto es requerido',
	}),
	Velocidad_Transmision: Zod.string({
		required_error: '⚠️ La velocidad de comunicacion es requerida',
	}),
	Imagen: Zod.string({
		required_error: '⚠️ La imagen es requerida',
	}),
});

// ? Esquema de validacion de datos de entrada de los sensores para actualizar un sensor
export const ActualizarSensorSchema = Zod.object({
	Nombre: Zod.string({
		required_error: '⚠️ El nombre es requerido',
	}),
	Descripcion: Zod.string({
		required_error: '⚠️ La descripcion es requerida',
	}),
	Puerto: Zod.string({
		required_error: '⚠️ El puerto es requerido',
	}),
	Velocidad_Transmision: Zod.string({
		required_error: '⚠️ La velocidad de comunicacion es requerida',
	}),
	Imagen: Zod.string({
		required_error: '⚠️ La imagen es requerida',
	}),
});

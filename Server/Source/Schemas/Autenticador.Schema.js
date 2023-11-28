// TODO: Validar los datos de entrada del autenticador

// ? Importaciones
import Zod from 'zod'; // Importamos zod para validar los datos de entrada

// ? Esquema de validacion de datos de entrada del autenticador para el registro
export const RegistroSchema = Zod.object({
	Usuario: Zod.string({
		required_error: 'El usuario es requerido',
	}),
	Correo: Zod.string({
		required_error: 'El correo es requerido',
	}).email({
		message: 'El correo no es valido',
	}),
	Password: Zod.string({
		required_error: 'La contraseña es requerida',
	}).min(8, {
		message: 'La contraseña debe tener al menos 8 caracteres',
	}),
});

// ? Esquema de validacion de datos de entrada del autenticador para el login
export const LoginSchema = Zod.object({
	Correo: Zod.string({
		required_error: '⚠️ El correo es requerido',
	}).email({
		message: '⚠️ El correo no es valido',
	}),
	Password: Zod.string({
		required_error: '⚠️ La contraseña es requerida',
	}).min(8, {
		message: '⚠️ La contraseña debe tener al menos 8 caracteres',
	}),
});

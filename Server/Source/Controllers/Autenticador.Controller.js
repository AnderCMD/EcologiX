// TODO: Controlador de autenticación.

//* 'req' es la petición que envía el cliente.
//* 'res' es la respuesta que envía el servidor.
//* 'next' es una función que permite continuar con la siguiente función.
//* 'req.body' son los datos que envía el cliente en el body de la petición.

// ? Importaciones
import UsuarioModel from '../Models/Usuario.Model.js';
import bcrypt from 'bcryptjs';
import CrearTokenAcceso from '../Libs/JWT.js';

// ? Registro de usuario
export const Registro = async (req, res) => {
	const { Usuario, Correo, Password } = req.body; // Obtener datos del body

	// Validar que los datos no estén vacíos
	try {
		const PasswordHash = await bcrypt.hash(Password, 10); // Encriptar contraseña
		const NuevoUsuario = new UsuarioModel({
			// Crear un nuevo usuario
			Usuario,
			Correo,
			Password: PasswordHash, // Guardar contraseña encriptada
		});

		const UsuarioGuardado = await NuevoUsuario.save(); // Guardar el nuevo usuario en la base de datos
		const Token = await CrearTokenAcceso({
			ID: UsuarioGuardado._id,
		}); // Crear token de acceso

		console.log('✅ ¡Usuario registrado exitosamente!');

		res.cookie('Token', Token, { httpOnly: true }); // Enviar token al cliente
		res.json({
			ID: UsuarioGuardado._id, // ID del usuario
			Usuario: UsuarioGuardado.Usuario, // Nombre de usuario
			Correo: UsuarioGuardado.Correo, // Correo del usuario
		}); // Enviar respuesta al cliente
	} catch (error) {
		// Si hay un error
		console.log('❌ ¡Error al registrar usuario!');
		res.status(500).json({ message: error.message }); // Enviar respuesta al cliente
	}
};

// ? Iniciar sesión de usuario
export const Login = async (req, res) => {
	const { Correo, Password } = req.body; // Obtener datos del body

	// Validar que los datos no estén vacíos
	try {
		const UsuarioEncontrado = await UsuarioModel.findOne({ Correo }); // Buscar usuario por correo

		// Si no se encuentra el usuario
		if (!UsuarioEncontrado) {
			console.log('⚠️ ¡Correo incorrecto!');
			return res
				.status(400)
				.json({ message: '⚠️ Correo o contraseña incorrectos' }); // Enviar respuesta al cliente
		}

		const PasswordCoincide = await bcrypt.compare(
			Password,
			UsuarioEncontrado.Password
		); // Comparar contraseñas

		if (!PasswordCoincide) {
			console.log('⚠️ ¡Contraseña incorrecta!');
			return res
				.status(400)
				.json({ message: '⚠️ Correo o contraseña incorrectos' }); // Enviar respuesta al cliente
		}

		const Token = await CrearTokenAcceso({
			ID: UsuarioEncontrado._id,
		}); // Crear token de acceso

		console.log('✅ ¡Usuario logueado exitosamente!');

		res.cookie('Token', Token, { httpOnly: true }); // Enviar token al cliente
		res.json({
			ID: UsuarioEncontrado._id, // ID del usuario
			Usuario: UsuarioEncontrado.Usuario, // Nombre de usuario
			Correo: UsuarioEncontrado.Correo, // Correo del usuario
		}); // Enviar respuesta al cliente
	} catch (error) {
		// Si hay un error
		console.log('❌ ¡Error al loguear usuario!');
		res.status(500).json({ message: error.message }); // Enviar respuesta al cliente
	}
};

// ? Cerrar sesión de usuario
export const Logout = (req, res) => {
	try {
		// Intentar desloguear usuario
		res.cookie('Token', '', {
			expires: new Date(0),
		}); // Eliminar cookie
		console.log('👋 ¡Usuario deslogueado exitosamente!');
		return res.sendStatus(200); // Enviar respuesta al cliente
	} catch (error) {
		// Si hay un error
		console.log('❌ ¡Error al desloguear usuario!');
		return res.status(500).json({ message: error.message }); // Enviar respuesta al cliente
	}
};

// ? Obtener perfil de usuario
export const Perfil = async (req, res) => {
	const UsuarioEncontrado = await UsuarioModel.findById(
		req.Usuario.ID
	); // Buscar usuario por ID

	if (!UsuarioEncontrado)
		return res.status(400).json({ message: '⚠️ Usuario no encontrado' }); // Si no se encuentra el usuario

	return res.json({
		ID: UsuarioEncontrado._id, // ID del usuario
		Usuario: UsuarioEncontrado.Usuario, // Nombre de usuario
		Correo: UsuarioEncontrado.Correo, // Correo del usuario
	}); // Enviar respuesta al cliente
};

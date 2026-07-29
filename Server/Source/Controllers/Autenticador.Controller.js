// TODO: Controlador de autenticación.

//* 'req' es la petición que envía el cliente.
//* 'res' es la respuesta que envía el servidor.
//* 'next' es una función que permite continuar con la siguiente función.
//* 'req.body' son los datos que envía el cliente en el body de la petición.

// ? Importaciones
import UsuarioModel from '../Models/Usuario.Model.js';
import bcrypt from 'bcryptjs';
import CrearTokenAcceso from '../Libs/JWT.js';
import jwt from 'jsonwebtoken';

// ? Registro de usuario
export const Registro = async (req, res) => {
	const { Usuario, Correo, Password } = req.body; // Obtener datos del body

	// Validar que los datos no estén vacíos
	try {
		const UsuarioEncontrado = await UsuarioModel.findOne({ Correo });
		// Buscar usuario por correo
		if (UsuarioEncontrado) {
			// Si se encuentra el usuario
			console.log('⚠️ ¡Correo ya registrado!');
			res.status(400).json(['⚠️ Correo ya registrado']); // Enviar respuesta al cliente
			return;
		}

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

		res.cookie('Token', Token); // Enviar token al cliente
		res.json({
			ID: UsuarioGuardado._id, // ID del usuario
			Usuario: UsuarioGuardado.Usuario, // Nombre de usuario
			Correo: UsuarioGuardado.Correo, // Correo del usuario
		}); // Enviar respuesta al cliente
	} catch (error) {
		// Si hay un error
		console.log('❌ ¡Error al registrar usuario!');
		res.status(500).json({ message: 'Error interno del servidor' }); // Enviar respuesta al cliente
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
				.json({ message: '⚠️ Correo o contraseña incorrecta' }); // Enviar respuesta al cliente
		}

		const PasswordCoincide = await bcrypt.compare(
			Password,
			UsuarioEncontrado.Password
		); // Comparar contraseñas

		if (!PasswordCoincide) {
			console.log('⚠️ ¡Contraseña incorrecta!');
			return res
				.status(400)
				.json({ message: '⚠️ Contraseña incorrecta' }); // Enviar respuesta al cliente
		}

		const Token = await CrearTokenAcceso({
			ID: UsuarioEncontrado._id,
		}); // Crear token de acceso

		console.log('✅ ¡Usuario logueado exitosamente!');

		// ? Enviar token al cliente con cookie segura y misma URL (para que el cliente pueda acceder a la cookie)
		res.cookie('Token', Token);

		res.json({
			ID: UsuarioEncontrado._id, // ID del usuario
			Usuario: UsuarioEncontrado.Usuario, // Nombre de usuario
			Correo: UsuarioEncontrado.Correo, // Correo del usuario
		}); // Enviar respuesta al cliente
	} catch (error) {
		// Si hay un error
		console.log('❌ ¡Error al loguear usuario!');
		res.status(500).json({ message: 'Error interno del servidor' }); // Enviar respuesta al cliente
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
		return res.status(500).json({ message: 'Error interno del servidor' }); // Enviar respuesta al cliente
	}
};

// ? Obtener perfil de usuario
export const Perfil = async (req, res) => {
	const UsuarioEncontrado = await UsuarioModel.findById(req.Usuario.ID); // Buscar usuario por ID

	if (!UsuarioEncontrado)
		return res.status(400).json({ message: '⚠️ Usuario no encontrado' }); // Si no se encuentra el usuario

	return res.json({
		ID: UsuarioEncontrado._id, // ID del usuario
		Usuario: UsuarioEncontrado.Usuario, // Nombre de usuario
		Correo: UsuarioEncontrado.Correo, // Correo del usuario
	}); // Enviar respuesta al cliente
};

export const VerificarToken = async (req, res) => {
	const { Token } = req.cookies; // Obtener token de la cookie

	if (!Token)
		return res.status(401).json({ message: '⚠️ Token no encontrado' }); // Si no se encuentra el token

		jwt.verify(Token, process.env.TOKEN_SECRET, async (error, Usuario) => {
		if (error) {
			return res.status(401).json({ message: '⚠️ Token no válido' }); // Si el token no es válido
		}

		const UsuarioEncontrado = await UsuarioModel.findById(Usuario.ID); // Buscar usuario por ID
		if (!UsuarioEncontrado) {
			return res
				.status(400)
				.json({ message: '⚠️ Usuario no encontrado' }); // Si no se encuentra el usuario
		}

		return res.json({
			ID: UsuarioEncontrado._id, // ID del usuario
			Usuario: UsuarioEncontrado.Usuario, // Nombre de usuario
			Correo: UsuarioEncontrado.Correo, // Correo del usuario
		}); // Enviar respuesta al cliente
	});
};

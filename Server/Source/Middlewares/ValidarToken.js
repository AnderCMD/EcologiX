// TODO: Sirve para validar el token de acceso del usuario

// ? Importaciones
import jwt from 'jsonwebtoken'; // Importar librería jsonwebtoken

// ? Autenticación requerida (Middleware) (Validar token de acceso)
export const AutenticacionRequerida = (req, res, next) => {
	console.log('🔐 Autenticación requerida');
	const { Token } = req.cookies; // Obtener token de la cookie
	// Si no hay token
	if (!Token) {
		console.log('⚠️ ¡No autorizado!');
		return res.status(401).json({ message: '⚠️ ¡No estas autorizado!' }); // Enviar respuesta al cliente
	}

	// Verificar token
	jwt.verify(Token, process.env.TOKEN_SECRET, (error, Usuario) => {
		if (error) {
			// Si hay un error
			console.log('⚠️ ¡No autorizado!');
			return res
				.status(403)
				.json({ message: '⚠️ ¡No estas autorizado!' }); // Enviar respuesta al cliente
		} else {
			// Si no hay error
			console.log('✅ ¡Autorizado!');
			req.Usuario = Usuario; // Guardar usuario en el request

			next();
		}
	});
};

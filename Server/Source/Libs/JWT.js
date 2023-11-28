// TODO: Librería para crear tokens de acceso (JWT)

// ? Importaciones
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../Config/Config.js';

// ? Crear token de acceso (JWT)
export default function CrearTokenAcceso(payload) {
	// Payload: Datos que se van a guardar en el token
	return new Promise((resolve, reject) => {
		jwt.sign(
			payload,
			TOKEN_SECRET,
			{ expiresIn: '12h' },
			(error, Token) => {
				// Crear token de acceso con una duración de 1 hora
				if (error) reject(error);
				resolve(Token); // Devolver token de acceso
			}
		);
	});
}

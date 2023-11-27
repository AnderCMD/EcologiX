// ? Importaciones
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../Config/Config.js';

export default function CrearTokenAcceso(payload) {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, TOKEN_SECRET, { expiresIn: '12h' }, (error, Token) => { // Crear token de acceso con una duración de 1 hora
            if (error) reject(error);
            resolve(Token);
        });
    });
}

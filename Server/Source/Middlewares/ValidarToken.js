import jwt from 'jsonwebtoken'; // Importar librería jsonwebtoken
import { TOKEN_SECRET } from '../Config/Config.js'; // Importar clave secreta

export const AutenticacionRequerida = (req, res, next) => {
    console.log('🔐 Autenticación requerida');
    const {Token} = req.cookies; // Obtener token de la cookie
    if (!Token) { // Si no hay token
        console.log('⚠️ ¡No autorizado!');
        return res.status(401).json({ message: '⚠️ ¡No estas autorizado!' }); // Enviar respuesta al cliente
    };

    jwt.verify(Token, TOKEN_SECRET, (error, Usuario) => {
        if (error) {
            // Si hay un error
            console.log('⚠️ ¡No autorizado!');
            return res.status(403).json({ message: '⚠️ ¡No estas autorizado!' }); // Enviar respuesta al cliente
        } else {
            // Si no hay error
            console.log('✅ ¡Autorizado!');
            req.Usuario = Usuario; // Guardar usuario en el request

            next();
        }
    });
}; // Middleware para validar token de acceso
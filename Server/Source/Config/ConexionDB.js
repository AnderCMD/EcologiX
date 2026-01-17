// TODO: Esta clase se encarga de conectar la base de datos con el servidor.

// ? Importaciones
import mongoose from 'mongoose';

// ? Conectar base de datos
const ConexionDB = async () => {
	try {
		// Intentar conectar la base de datos
		await mongoose.connect(process.env.MONGODB_URI);
		console.log('✅ ¡Base de datos conectada exitosamente!');
		console.log('===============================================\n');
	} catch (error) {
		// Si hay un error
		console.log('❌ ¡Error al conectar la base de datos!');
		console.log('===============================================\n');
		console.error(error);
	}
};

// ? Exportaciones
export default ConexionDB;

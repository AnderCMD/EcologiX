// TODO: Archivo principal del servidor (Entry Point)

// ? Importaciones
import 'dotenv/config';
import App from './App.js';
import ConexionDB from './Config/ConexionDB.js';

// ? Inicializar conexión a la base de datos
ConexionDB();

// ? Inicializar servidor de escucha de express
App.listen(process.env.PORT, (err) => {
	try {
		console.clear();
		console.log('      🌳Bienvenido a EcologiX Servidor🌳');
		console.log('===============================================');
		console.log('✅ ¡Servidor inicializado exitosamente!');
		console.log(`💠 Puerto: ${process.env.PORT}`);
		console.log(`💠 Visita: http://localhost:${process.env.PORT}`);
		console.log('===============================================');
	} catch (error) {
		console.clear();
		console.log('      🌳Bienvenido a EcologiX Servidor🌳');
		console.log('===============================================');
		console.log('❌ ¡Error al inicializar el servidor!');
		console.log('===============================================');
		console.error(err);
	}
});

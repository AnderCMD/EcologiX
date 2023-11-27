// TODO: Archivo principal del servidor (Entry Point)

// ? Importaciones
import App from './App.js';
import ConexionDB from './Config/ConexionDB.js';
import { PUERTO } from './Config/Config.js';

// ? Inicializar conexión a la base de datos
ConexionDB();

// ? Inicializar servidor de escucha de express
App.listen(PUERTO, (err) => {
    try {
        console.clear();
        console.log('      🌳Bienvenido a EcologiX Servidor🌳');
        console.log('===============================================');
        console.log('✅ ¡Servidor inicializado exitosamente!');
        console.log(`💠 Puerto: ${PUERTO}`);
        console.log(`💠 Visita: http://localhost:${PUERTO}`);
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
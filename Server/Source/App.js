// TODO: Configuración del servidor

// ? Importaciones
import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

// ? Importaciones de rutas
import AutenticadorRoutes from './Routes/Autenticador.Routes.js';
import TareasRoutes from './Routes/Tareas.Routes.js';

// ? Inicializaciones
const App = express(); // Inicializar servidor de express

// ? Middlewares
App.use(morgan('dev')); // Para que el servidor muestre en consola las peticiones que recibe
App.use(express.json()); // Para que el servidor entienda los datos que le enviamos en formato JSON
App.use(cookieParser()); // Para que el servidor entienda las cookies

// ? Rutas
App.use('/API', AutenticadorRoutes); // Rutas de autenticación  Ejemplo: http://localhost:3000/API/Login
App.use('/API', TareasRoutes); // Rutas de tareas  Ejemplo: http://localhost:3000/API/Tareas

// ? Exportaciones
export default App;
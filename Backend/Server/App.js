import express from 'express';
import http from 'http';
import { Server as SocketServer } from 'socket.io';
import ConexionDB from './Config/ConexionDB.js';

const App = express();
const Server = http.createServer(App);

// ? Socket del servidor (Backend)
const io = new SocketServer(Server);

// ? Obtener la fecha actual
function ObtenerFecha() {
	let Fecha = new Date();
	let Hora = Fecha.getHours();
	let Minutos = Fecha.getMinutes();
	let Segundos = Fecha.getSeconds();
	let HoraActual = `${Hora}:${Minutos}:${Segundos}`;
	return HoraActual;
}

// ? Conexion al socket del cliente (Frontend)
let UsuariosActivos = 0;
io.on('connection', (socket) => {
	let HoraActual = ObtenerFecha();
	UsuariosActivos++;
	console.log(
		`▶ [${HoraActual}] Usuario conectado al servidor | Activos: ${UsuariosActivos}`
	);

	socket.on('disconnect', () => {
		let HoraActual = ObtenerFecha();
		UsuariosActivos--;
		console.log(
			`▶ [${HoraActual}] Usuario desconectado del servidor | Activos: ${UsuariosActivos}`
		);
	});

	socket.on('error', (error) => {
		console.error(`Ocurrió un error: ${error}`);
	});
});

// ? Rutas del servidor (Backend)
import RutasAdmin from './Routes/Admin.js';
import RutasUsuario from './Routes/Usuario.js';
import RutasInvitado from './Routes/Invitado.js';

App.use('/Admin', RutasAdmin);
App.use('/Usuario', RutasUsuario);
App.use(RutasInvitado);

// ? Iniciar el servidor (Backend)
const PUERTO = process.env.PUERTO || 3000;

Server.listen(PUERTO, (err) => {
	if (err) {
		return console.error(err);
	}
	console.clear();
	console.log('\t¡Bienvenido a EcologiX!');
	console.log('============================================\n');
	console.log('● ¡El servidor se ha ejecutado con exito!\n');
	console.log(`● Puerto: ${PUERTO}`);
	console.log(`● Visita: http://localhost:${PUERTO}/\n`);
	console.log('============================================\n');
});

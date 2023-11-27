// TODO: Rutas de autenticación

// ? Importaciones
import router from 'express';
import { AutenticacionRequerida } from '../Middlewares/ValidarToken.js';

// ? Importaciones de controllers de autenticación
import {
	Registro,
	Login,
	Logout,
	Perfil,
} from '../Controllers/Autenticador.Controller.js';

// ? Inicializaciones
const Router = router();

// ? Rutas post
Router.post('/Login', Login);
Router.post('/Registro', Registro);
Router.post('/Logout', Logout);

// ? Rutas get
Router.get('/Perfil', AutenticacionRequerida, Perfil);

// ? Exportaciones
export default Router;

// TODO: Rutas de autenticación

// ? Importaciones
import router from 'express';
import { AutenticacionRequerida } from '../Middlewares/ValidarToken.js';
import { ValidarSchema } from '../Middlewares/ValidarSchema.js';
import { RegistroSchema, LoginSchema } from '../Schemas/Autenticador.Schema.js';

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
Router.post('/Login', ValidarSchema(LoginSchema), Login);
Router.post('/Registro', ValidarSchema(RegistroSchema), Registro);
Router.post('/Logout', Logout);

// ? Rutas get
Router.get('/Perfil', AutenticacionRequerida, Perfil);

// ? Exportaciones
export default Router;

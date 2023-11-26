import express from 'express';
import ControladorInvitado from '../Controllers/Invitado.js';

const Router = express.Router();

Router.get('/', ControladorInvitado.getInicio);
Router.get('/Login', ControladorInvitado.getLogin);
Router.get('/Registro', ControladorInvitado.getRegistro);


export default Router;
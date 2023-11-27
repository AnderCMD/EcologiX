// TODO: Ruta de tareas

// ? Importaciones
import router from 'express';
import { AutenticacionRequerida } from "../Middlewares/ValidarToken.js";

// ? Inicializaciones
const Router = router();

// ? Rutas get
Router.get("/Tareas", AutenticacionRequerida, (req, res) => res.send("Tareas"));

// ? Exportaciones
export default Router;
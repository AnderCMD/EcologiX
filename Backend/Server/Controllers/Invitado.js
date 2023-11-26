export function getInicio(req, res, next) {
    res.render('Invitado/Inicio', {
        Titulo: 'EcologiX | Bienvenido',
        Ruta: '/'
    });
}

export function getLogin(req, res, next) {
    res.render('Invitado/Login', {
        Titulo: 'EcologiX | Login',
        Ruta: '/Login'
    });
}

export function getRegistro(req, res, next) {
    res.render('Invitado/Registro', {
        Titulo: 'EcologiX | Registro',
        Ruta: '/Registro'
    });
}

export default {
    getInicio,
    getLogin,
    getRegistro
};
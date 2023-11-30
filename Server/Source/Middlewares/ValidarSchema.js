// TODO: Validar los datos de entrada de las peticiones

// ? Validar los datos de entrada de las peticiones
export const ValidarSchema = (schema) => (req, res, next) => {
	try {
		schema.parse(req.body); // Validar los datos de entrada
		next(); // Continuar con la siguiente función
	} catch (error) {
		res
		.status(400)
		.json(error.errors.map((error) => error.message),
		); // Enviar respuesta al cliente
	}
};

// TODO: Contexto para el manejo de la autenticacion de usuarios

// ? Importaciones
import { createContext, useState, useContext } from 'react';
import { RegistroSolicitud, LoginSolicitud } from '../API/Autenticador';
import PropTypes from 'prop-types';

// ? Creacion del contexto
export const AutenticadorContext = createContext();

// ? Hook para usar el contexto de Autenticador en cualquier componente de la aplicacion
export const UsarAutenticador = () => {
	const Contexto = useContext(AutenticadorContext);
	if (!Contexto) {
		throw new Error(
			'UsarAutenticador debe estar dentro del proveedor AutenticadorContext'
		);
	}
	return Contexto;
};

// ? Hook para usar el contexto de Autenticador en cualquier componente de la aplicacion
export const AutenticadorProvider = ({ children }) => {
	const [Usuario, setUsuario] = useState(null); // Usuario autenticado
	const [Autenticado, setAutenticado] = useState(false); // Estado de autenticacion
	const [errors, setErrors] = useState([]); // Errores de validacion de datos

	// ? Funcion para registrar un usuario
	const Registro = async (Usuario) => {
		try {
			const Respuesta = await RegistroSolicitud(Usuario);
			console.log(Respuesta.data);
			setUsuario(Respuesta.data);
			setAutenticado(true);
		} catch (error) {
			console.log(error.response);
			setErrors(error.response.data);
		}
	};

	// ? Funcion para iniciar sesion
	const Login = async (Usuario) => {
		try {
			const Respuesta = await LoginSolicitud(Usuario);
			console.log(Respuesta.data);
			setUsuario(Respuesta.data); // ? Guardar usuario en el estado
			setAutenticado(true);
		} catch (error) {
			console.log(error.response);
			setErrors(error.response.data);
		}
	};

	// ? Retorno del contexto de Autenticador con sus respectivos valores y funciones
	return (
		<AutenticadorContext.Provider
			value={{
				Registro,
				Login,
				Usuario,
				Autenticado,
				errors,
			}}
		>
			{children}
		</AutenticadorContext.Provider>
	);
};

// ? Validacion de tipos de datos para el contexto de Autenticador
AutenticadorProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

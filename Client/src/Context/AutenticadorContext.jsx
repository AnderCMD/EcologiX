// TODO: Contexto para el manejo de la autenticacion de usuarios

// ? Importaciones
import { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import cookies from 'js-cookie';

// ? Importacion de las solicitudes a la API
import {
	RegistroSolicitud,
	LoginSolicitud,
	VerificarTokenSolicitud,
} from '../API/Autenticador';

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
	const [Cargando, setCargando] = useState(true); // Estado de carga

	// ? Funcion para registrar un usuario
	const Registro = async (Usuario) => {
		try {
			const Respuesta = await RegistroSolicitud(Usuario); // Enviar la solicitud de registro
			console.log(Respuesta.data);

			setUsuario(Respuesta.data); // Guardar usuario en el estado
			setAutenticado(true); // Cambiar el estado de autenticacion
		} catch (error) {
			console.log(error.response); // Mostrar el error en consola
			setErrors(error.response.data); // Guardar los errores
		}
	};

	// ? Funcion para iniciar sesion
	const Login = async (Usuario) => {
		try {
			const Respuesta = await LoginSolicitud(Usuario); // Enviar la solicitud de inicio de sesion
			console.log(Respuesta.data);

			setUsuario(Respuesta.data); //  Guardar usuario en el estado
			setAutenticado(true); // Cambiar el estado de autenticacion
		} catch (error) {
			if (Array.isArray(error.response.data)) {
				// Verificar si el error es un array
				return setErrors(error.response.data); // Guardar los errores
			} else {
				console.log(error.response); // Mostrar el error en consola
				setErrors([error.response.data.message]); // Guardar el error
			}
		}
	};

	// ? Funcion para eliminar los errores de validacion de datos
	useEffect(() => {
		if (errors.length > 0) {
			const Temporizador = setTimeout(() => {
				setErrors([]); // Limpiar los errores
			}, 7500);
			return () => clearTimeout(Temporizador); // Limpiar el temporizador
		}
	}, [errors]); // Ejecutar el efecto cuando los errores cambien

	// ? Obtener el token de autenticacion del usuario
	useEffect(() => {
		// Funcion para comprobar si el usuario esta autenticado
		async function ComprobarLogin() {
			const Cookies = cookies.get(); // Obtener todas las cookies

			// Verificar si existe el token
			if (!Cookies.Token) {
				setAutenticado(false);
				setCargando(false);
				setUsuario(null);
				return;
			}
			// Verificar si el token es valido
			try {
				const Respuesta = await VerificarTokenSolicitud(Cookies.Token); // Verificar el token

				// Verificar si el token es valido o no para cambiar el estado de autenticacion y guardar el usuario
				if (!Respuesta.data) {
					// Si el token no es valido
					setAutenticado(false);
					setCargando(false);
					return;
				} else {
					// Si el token es valido
					setAutenticado(true);
					setUsuario(Respuesta.data);
					setTimeout(() => { // Retardo para mostrar el componente de carga
						setCargando(false); // Cambiar el estado de carga
					}, 500);
					return;
				}
			} catch (error) {
				// Si el token no es valido
				console.log(error);
				setAutenticado(false);
				setUsuario(null);
				setCargando(false);
			}
		}
		ComprobarLogin(); // Ejecutar la funcion
	}, []); // Ejecutar el efecto solo una vez

	// ? Retorno del contexto de Autenticador con sus respectivos valores y funciones
	return (
		<AutenticadorContext.Provider
			value={{
				Registro,
				Login,
				Cargando,
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

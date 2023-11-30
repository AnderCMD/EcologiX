// TODO: Contexto para el manejo de la autenticacion de usuarios

// ? Importaciones
import { createContext, useState, useContext } from 'react';
import { RegistroSolicitud } from '../API/Autenticador';
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
	const [Usuario, setUsuario] = useState(null);
	const [Autenticado, setAutenticado] = useState(false);
	const [errors, setErrors] = useState([]);

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

	return (
		<AutenticadorContext.Provider
			value={{
				Registro,
				Usuario,
				Autenticado,
				errors,
			}}
		>
			{children}
		</AutenticadorContext.Provider>
	);
};

AutenticadorProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

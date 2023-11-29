// TODO: Contexto para el manejo de la autenticacion de usuarios

// ? Importaciones
import { createContext, useState, useContext } from 'react';
import { RegistroSolicitud } from '../API/Autenticador';

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

	const Registro = async (Usuario) => {
		const Respuesta = await RegistroSolicitud(Usuario);
		console.log(Respuesta.data);
		setUsuario(Respuesta.data);
	};

	return (
		<AutenticadorContext.Provider
			value={{
				Registro,
				Usuario,
			}}
		>
			{children}
		</AutenticadorContext.Provider>
	);
};

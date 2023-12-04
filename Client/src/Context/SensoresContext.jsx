// TODO: Exportar el contexto de Sensores para usarlo en cualquier componente de la aplicacion

// ? Importaciones de dependencias
import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { CrearSensorRequest, ObtenerSensoresRequest } from '../API/Sensores';

// ? Creacion del contexto
const SensorContext = createContext();

// ? Hook para usar el contexto de Sensores en cualquier componente de la aplicacion
export const UsarSensores = () => {
	const Contexto = useContext(SensorContext);

	if (!Contexto) {
		// Si el contexto no existe, se lanza un error
		throw new Error(
			'UsarSensores debe estar dentro del proveedor SensorContext'
		);
	}
	return Contexto;
};

// ? Hook para usar el contexto de Sensores en cualquier componente de la aplicacion
export default function SensorProvider({ children }) {
	const [Sensores, setSensores] = useState([]); // Estado de los sensores

	// Funcion para obtener los sensores
	const ObtenerSensores = async () => {
		try {
			const Respuesta = await ObtenerSensoresRequest();
			setSensores(Respuesta.data);
		} catch (error) {
			console.log(error);
		}
	};

	// Funcion para crear un sensor
	const CrearSensor = async (Sensor) => {
		const Respuesta = await CrearSensorRequest(Sensor);
		console.log(Respuesta);
	};

	return (
		<SensorContext.Provider
			value={{
				Sensores,
				CrearSensor,
				ObtenerSensores,
			}}
		>
			{children}
		</SensorContext.Provider>
	);
}

// ? Validacion de tipos de datos para el contexto de Autenticador
SensorProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

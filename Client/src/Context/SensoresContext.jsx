// TODO: Exportar el contexto de Sensores para usarlo en cualquier componente de la aplicacion

// ? Importaciones de dependencias
import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import {
	CrearSensorRequest,
	ObtenerSensoresRequest,
	EliminarSensorRequest,
	ObtenerSensorRequest,
	ActualizarSensorRequest,
} from '../API/Sensores';

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
			console.error(error);
		}
	};

	// Funcion para crear un sensor
	const CrearSensor = async (Sensor) => {
		try {
			await CrearSensorRequest(Sensor);
		} catch (error) {
			console.error(error);
		}
	};

	const EliminarSensor = async (ID) => {
		try {
			const Respuesta = await EliminarSensorRequest(ID);
			if (Respuesta.status === 204)
				ObtenerSensores(Sensores.filter((Sensor) => Sensor._id !== ID));
		} catch (error) {
			console.error(error);
		}
	};

	const ObtenerSensor = async (ID) => {
		try {
			const Respuesta = await ObtenerSensorRequest(ID);
			return Respuesta.data;
		} catch (error) {
			console.error(error);
		}
	};

	const ActualizarSensor = async (ID, Sensor) => {
		const SensorString = Object.fromEntries(
			Object.entries(Sensor).map(([key, value]) => [key, value.toString()])
		);

		try {
			await ActualizarSensorRequest(ID, SensorString);
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<SensorContext.Provider
			value={{
				Sensores,
				CrearSensor,
				ObtenerSensores,
				EliminarSensor,
				ObtenerSensor,
				ActualizarSensor,
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

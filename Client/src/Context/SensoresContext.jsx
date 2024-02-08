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
			console.log(error);
		}
	};

	// Funcion para crear un sensor
	const CrearSensor = async (Sensor) => {
		try {
			const Respuesta = await CrearSensorRequest(Sensor);
			console.log(Respuesta);
		} catch (error) {
			console.log(error);
		}
	};

	const EliminarSensor = async (ID) => {
		try {
			const Respuesta = await EliminarSensorRequest(ID);
			console.log(Respuesta);
			if (Respuesta.status === 204)
				ObtenerSensores(Sensores.filter((Sensor) => Sensor._id !== ID));
		} catch (error) {
			console.log(error);
		}
	};

	const ObtenerSensor = async (ID) => {
		try {
			const Respuesta = await ObtenerSensorRequest(ID);
			console.log(Respuesta);
			return Respuesta.data;
		} catch (error) {
			console.log(error);
		}
	};

	const ActualizarSensor = async (ID, Sensor) => {
		const SensorString = Object.fromEntries(
			Object.entries(Sensor).map(([key, value]) => [key, value.toString()])
		);

		try {
			const Respuesta = await ActualizarSensorRequest(ID, SensorString);
			console.log(Respuesta);
		} catch (error) {
			console.log(error);
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

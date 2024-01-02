// TODO: Obtener los sensores del usuario y mostrarlos en pantalla

// ? Importaciones de dependencias
import { useEffect } from 'react';
import { UsarSensores } from '../../Context/SensoresContext';
import { Link } from 'react-router-dom';

// ? Importacion de Componentes
import SensorComponent from '../../Components/Usuario/SensorComponent';
import NavComponent from '../../Components/Usuario/NavComponent';

export default function SensoresPage() {
	const { ObtenerSensores, Sensores } = UsarSensores(); // Obtener los sensores del contexto

	// ? Obtener los sensores al cargar la pagina
	useEffect(() => {
		ObtenerSensores();
	}, []);

	// ? Si no hay sensores, mostrar un mensaje
	if (Sensores.length === 0) {
		return (
			<div className="flex flex-row">
				<NavComponent />
				<div className="shadow-xl p-8 max-h-screen overflow-y-auto static w-full">
					<h1 className="text-4xl font-semibold text-white">
						Sensores
					</h1>
					<hr className="border-solid border-emerald-700 border-4 my-6 rounded-full" />
					<h1 className="text-2xl font-semibold text-white">
						No existe ningun sensor
					</h1>
					<Link
						to="/Usuario/Agregar-Sensor"
						className="bg-emerald-700 hover:bg-emerald-600 shadow-2xl transition-all flex border-2  w-14 h-14 text-center rounded-full fixed bottom-2 right-4 sm:top-8 sm:right-8 items-center justify-center animate-bounce"
					>
						<i className="fa-solid fa-plus text-4xl text-white"></i>
					</Link>
				</div>
			</div>
		);
	}

	return (
		// ? Mostrar los sensores en pantalla
		<div className="flex flex-row">
			<NavComponent />
			<div className="shadow-xl p-8 max-h-screen overflow-y-auto static w-full">
				<h1 className="text-4xl font-semibold text-white">Sensores</h1>
				<hr className="border-solid border-emerald-700 border-4 my-6 rounded-full" />
				<div className="grid grid-cols-5 gap-8 w-full max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 max-xl:grid-cols-4">
					{Sensores.map((Sensor) => (
						<SensorComponent Sensor={Sensor} key={Sensor._id} />
					))}
				</div>
				<Link
					to="/Usuario/Agregar-Sensor"
					className="bg-emerald-700 hover:bg-emerald-600 shadow-2xl transition-all flex border-2  w-16 h-16 text-center rounded-full fixed bottom-6 right-12 max-sm:bottom-2 max-sm:right-4 items-center justify-center animate-bounce"
				>
					<i className="fa-solid fa-plus text-4xl text-white"></i>
				</Link>
			</div>
		</div>
	);
}

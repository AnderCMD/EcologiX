// TODO: Renderizar las rutas protegidas

// ? Importaciones de dependencias
import { UsarAutenticador } from './Context/AutenticadorContext';
import { Navigate, Outlet } from 'react-router-dom';

// ? Componente para renderizar las rutas protegidas
export default function RutasProtegidas() {
	// ? Obtener el estado de autenticacion
	const { Cargando, Autenticado } = UsarAutenticador();

	// ? Si esta cargando, renderizar un spinner
	if (Cargando) {
		return (
			<div className="flex justify-center items-center h-screen">
				<div className="flex flex-col items-center bg-white p-4 rounded-full shadow-md">
                    <i className="fa-solid fa-spinner text-7xl text-green-700 animate-spin"></i>
				</div>
			</div>
		);
	}

	// ? Si no esta autenticado, redireccionar a la pagina de inicio de sesion
	if (!Cargando && !Autenticado) {
		return <Navigate to="/Login" />;
	}

	// ? Si esta autenticado, renderizar las rutas hijas
	return (
		<Outlet /> //  Renderizar las rutas hijas
	);
}

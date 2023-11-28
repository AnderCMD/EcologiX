// TODO: Archivo principal de la aplicacion

// ? Importaciones
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// ? Importaciones de Paginas
import LoginPage from './Pages/LoginPage';
import RegistroPage from './Pages/RegistroPage';

// ? Componentes
export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<h1>Inicio</h1>} />
				<Route path="/Login" element={<LoginPage />} />
				<Route path="/Registro" element={<RegistroPage />} />
				<Route path="/Tareas" element={<h1>Tareas</h1>} />
				<Route path="/Agregar-Tarea" element={<h1>Agregar Tarea</h1>} />
				<Route path="/Tareas/:id" element={<h1>Actualizar Tarea</h1>} />
				<Route path="/Perfil" element={<h1>Perfil</h1>} />
			</Routes>
		</BrowserRouter>
	);
}

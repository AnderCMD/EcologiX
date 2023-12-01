// TODO: Archivo principal de la aplicacion

// ? Importaciones
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AutenticadorProvider } from './Context/AutenticadorContext';

// ? Importaciones de paginas publicas
import IndexPage from './Pages/Invitado/IndexPage';
import LoginPage from './Pages/Invitado/LoginPage';
import RegistroPage from './Pages/Invitado/RegistroPage';

// ? Importacion de paginas privadas
import InicioPage from './Pages/Usuario/InicioPage';
import PerfilPage from './Pages/Usuario/PerfilPage';
import SensoresPage from './Pages/Usuario/SensoresPage';

// ? Componentes
export default function App() {
	return (
		<AutenticadorProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={ <IndexPage /> } />
					<Route path='/Login' element={ <LoginPage /> } />
					<Route path='/Registro' element={ <RegistroPage /> } />
					<Route path='/Usuario/Inicio' element={ <InicioPage /> } />
					<Route path='/Usuario/Sensores' element={ <SensoresPage /> } />
					<Route path='/Usuario/Agregar-Sensor' element={ <h1>Agregar Sensor</h1> } />
					<Route path='/Usuario/Sensores/:id' element={ <h1>Actualizar Sensor</h1> } />
					<Route path='/Usuario/Perfil' element={ <PerfilPage /> } />
				</Routes>
			</BrowserRouter>
		</AutenticadorProvider>
	);
}

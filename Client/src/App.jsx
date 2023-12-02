// TODO: Archivo principal de la aplicacion

// ? Importaciones
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AutenticadorProvider } from './Context/AutenticadorContext';

// ? Importaciones de paginas publicas
import IndexPage from './Pages/Invitado/IndexPage';
import LoginPage from './Pages/Invitado/LoginPage';
import RegistroPage from './Pages/Invitado/RegistroPage';

// ? Importaciones de componente de rutas protegidas
import RutasProtegidas from './RutasProtegidas'; // Rutas protegidas

// ? Importacion de paginas privadas
import InicioPage from './Pages/Usuario/InicioPage';
import PerfilPage from './Pages/Usuario/PerfilPage';
import SensoresPage from './Pages/Usuario/SensoresPage';
import FormSensoresPage from './Pages/Usuario/FormSensoresPage';

// ? Componentes
export default function App() {
	return (
		<AutenticadorProvider>
			<BrowserRouter>
				<Routes>
					{/* ? Rutas Publicas */}
					<Route path='/' element={ <IndexPage /> } />
					<Route path='/Login' element={ <LoginPage /> } />
					<Route path='/Registro' element={ <RegistroPage /> } />

					{/* ? Rutas privadas */}
					<Route element={ <RutasProtegidas /> }>
						<Route path='/Usuario/Inicio' element={ <InicioPage /> } /> 
						<Route path='/Usuario/Sensores' element={ <SensoresPage /> } />
						<Route path='/Usuario/Agregar-Sensor' element={ <FormSensoresPage /> } />
						<Route path='/Usuario/Sensores/:id' element={ <FormSensoresPage /> } />
						<Route path='/Usuario/Perfil' element={ <PerfilPage /> } />
					</Route>
				</Routes>
			</BrowserRouter>
		</AutenticadorProvider>
	);
}

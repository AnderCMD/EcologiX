// TODO: Obtener los sensores del usuario y mostrarlos en pantalla

// ? Importaciones de dependencias
import { useEffect } from 'react';
import { UsarSensores } from '../../Context/SensoresContext';

// ? Importacion de Componentes
import NavComponent from '../../Components/Usuario/NavComponent';
import { Link } from 'react-router-dom';

export default function SensoresPage() {
	const { ObtenerSensores, Sensores } = UsarSensores(); // Obtener los sensores del contexto

    // ? Obtener los sensores al cargar la pagina
	useEffect(() => {
		ObtenerSensores();
	}, []);

    // ? Si no hay sensores, mostrar un mensaje
    if (Sensores.length === 0) {
        return <h1>No hay sensores</h1>;
    }

	return (
        // ? Mostrar los sensores en pantalla
		<>
            <div className="flex flex-row">
                <NavComponent />
                <div className="bg-white m-4 rounded-2xl shadow-xl relative p-8">
                    <h1 className="text-4xl font-semibold text-green-700">Sensores</h1>
                    <hr className='border-solid border-emerald-700 border-4 my-6 rounded-full'/>
                    <div className="grid grid-cols-6 gap-8">
                        {Sensores.map((Sensor) => (
                            <Link to={`/Usuario/Sensores/${Sensor._id}`} key={Sensor._id}>
                                <div key={Sensor._id} className='flex flex-col bg-emerald-700 p-8 h-max w-full rounded-2xl shadow-inner text-white hover:bg-emerald-600 transition-all hover:scale-105'>
                                    <h1 className='text-2xl text-center'>{Sensor.Nombre}</h1>
                                    <hr className='border-2 my-2 rounded-full' />
                                    <p className='text-center'>{Sensor.Descripcion}</p>
                                    <hr className='border my-2 rounded-full'/>
                                    <p><b>Puerto:</b> {Sensor.Puerto}</p>
                                    <hr className='border my-2 rounded-full'/>
                                    <p><b>Velocidad de Transmision:</b> {Sensor.Velocidad_Transmision} ms</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <Link to='/Usuario/Agregar-Sensor' className='bg-emerald-700 hover:bg-emerald-600 shadow-2xl transition-all flex w-12 h-12 text-center rounded-full absolute bottom-5 right-5 items-center justify-center animate-bounce'>
                        <i className="fa-solid fa-plus text-4xl text-white"></i>
                    </Link>
                </div>
            </div>
		</>
	);
}

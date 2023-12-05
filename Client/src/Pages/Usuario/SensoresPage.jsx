// TODO: Obtener los sensores del usuario y mostrarlos en pantalla

// ? Importaciones de dependencias
import { useEffect } from 'react';
import { UsarSensores } from '../../Context/SensoresContext';

// ? Importacion de Componentes
import NavComponent from '../../Components/Usuario/NavComponent';
import { Link } from 'react-router-dom';

export default function SensoresPage() {
	const { ObtenerSensores, Sensores, EliminarSensor } = UsarSensores(); // Obtener los sensores del contexto

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
                    <h1 className="text-4xl font-semibold text-white">Sensores</h1>
                    <hr className='border-solid border-emerald-700 border-4 my-6 rounded-full'/>
                    <h1 className="text-2xl font-semibold text-white">No existe ningun sensor</h1>
                    <Link to='/Usuario/Agregar-Sensor' className='bg-emerald-700 hover:bg-emerald-600 shadow-2xl transition-all flex border-2  w-14 h-14 text-center rounded-full fixed bottom-2 right-4 sm:top-8 sm:right-8 items-center justify-center animate-bounce'>
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
                <hr className='border-solid border-emerald-700 border-4 my-6 rounded-full'/>
                <div className="grid grid-cols-5 gap-8 w-full max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 max-xl:grid-cols-4">
                    {Sensores.map((Sensor) => (
                        <div key={Sensor._id}>
                            <div className="min-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <Link to={`/Usuario/Sensores/${Sensor._id}`} key={Sensor._id}>
                                    <img className="rounded-t-lg" src={ Sensor.Imagen } alt="Sensor" />
                                    <div className="p-5">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ Sensor.Nombre }</h5>
                                        <p className="mb-3 font-normaltext-gray-300 tracking-wider break-all text-justify">{ Sensor.Descripcion }.</p>
                                    </div>
                                </Link>
                                <div className="flex gap-4 text tracking-wider px-4 pb-4 max-sm:flex-col">
                                    <Link to={`/Usuario/Sensores/${Sensor._id}`} className="inline-flex justify-center items-center px-3 py-2 w-1/2 max-sm:w-full text-sm font-medium text-center text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300">
                                        <i className="fa-solid fa-pencil mr-2 text-xl"></i>
                                        Modificar
                                    </Link>
                                    <button onClick={() => {
                                        // ? Eliminar el sensor
                                        EliminarSensor(Sensor._id);
                                    }} className="inline-flex justify-center items-center px-3 py-2 w-1/2 max-sm:w-full text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
                                        <i className="fa-solid fa-trash-can mr-2 text-xl"></i>
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Link to='/Usuario/Agregar-Sensor' className='bg-emerald-700 hover:bg-emerald-600 shadow-2xl transition-all flex border-2  w-16 h-16 text-center rounded-full fixed bottom-6 right-12 max-sm:bottom-2 max-sm:right-4 items-center justify-center animate-bounce'>
                    <i className="fa-solid fa-plus text-4xl text-white"></i>
                </Link>
            </div>
        </div>
	);
}

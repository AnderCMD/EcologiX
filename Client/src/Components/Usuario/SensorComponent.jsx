// ? Importaciones de dependencias
import { Link } from "react-router-dom";
import { UsarSensores } from "../../Context/SensoresContext";
import propTypes from 'prop-types';

export default function SensorComponent({Sensor}) {
    const { EliminarSensor } = UsarSensores(); // Obtener los sensores del contexto

    // ? Generar un número aleatorio para la temperatura y la humedad
    function TemperaturaRandom() {
        // Genera un número aleatorio entre 0 y 1
        let Random = Math.random();
        // Calcula el número aleatorio dentro del rango especificado
        return Math.floor(Random * (21 - 18 + 1)) + 18;
    }

    function HumedadRandom() {
        // Genera un número aleatorio entre 0 y 1
        let Random = Math.random();
        // Calcula el número aleatorio dentro del rango especificado
        return Math.floor(Random * (57 - 65 + 1)) + 65;
    }

    return (
        <div key={Sensor._id}>
            <div className="min-w-full bg-white rounded-lg border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
                <Link to={`/Usuario/Sensores/${Sensor._id}`}>
                    <img className="w-full h-60 rounded-t-lg" src={ Sensor.Imagen } alt="Sensor" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ Sensor.Nombre }</h5>
                        <p className="mb-3 tracking-wider text-justify break-all font-normaltext-gray-300">{ Sensor.Descripcion }.</p>
                        <p className='mb-3 tracking-wider text-justify break-all font-normaltext-gray-300'>Temperatura: <span className='font-bold text-emerald-400'>{TemperaturaRandom()}C°</span></p>
                        <p className='mb-3 tracking-wider text-justify break-all font-normaltext-gray-300'>Humedad: <span className='font-bold text-emerald-400'>{HumedadRandom()}%</span></p>
                    </div>
                </Link>
                <div className="flex gap-4 px-4 pb-4 tracking-wider text max-sm:flex-col">
                    <Link to={`/Usuario/Sensores/${Sensor._id}`} className="inline-flex justify-center items-center px-3 py-2 w-1/2 text-sm font-medium text-center text-white bg-emerald-700 rounded-lg max-sm:w-full hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300">
                        <i className="mr-2 text-xl fa-solid fa-pencil"></i>
                        Modificar
                    </Link>
                    <button onClick={() => {
                        // ? Eliminar el sensor
                        EliminarSensor(Sensor._id);
                    }} className="inline-flex justify-center items-center px-3 py-2 w-1/2 text-sm font-medium text-center text-white bg-red-700 rounded-lg max-sm:w-full hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
                        <i className="mr-2 text-xl fa-solid fa-trash-can"></i>
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    );
}

SensorComponent.propTypes = {
    Sensor: propTypes.object.isRequired
}
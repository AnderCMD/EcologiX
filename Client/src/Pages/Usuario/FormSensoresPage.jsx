// ? Importaciones
import { useForm } from 'react-hook-form';
import { UsarSensores } from '../../Context/SensoresContext';
import { Link, useNavigate, useParams } from 'react-router-dom';

// ? Importacion de Componentes
import InputComponent from '../../Components/InputComponent';
import ButtonComponent from '../../Components/ButtonComponent';
import NavComponent from '../../Components/Usuario/NavComponent';
import { useEffect } from 'react';

export default function FormSensoresPage() {
	const { register, handleSubmit, setValue } = useForm();
	const { CrearSensor, ObtenerSensor, ActualizarSensor } = UsarSensores();
	const Navegacion = useNavigate();
	const Parametros = useParams();

	useEffect(() => {
		async function CargarSensor() {
			try {
				if (Parametros.id) {
					const Sensor = await ObtenerSensor(Parametros.id);
					setValue('Nombre', Sensor.Nombre);
					setValue('Descripcion', Sensor.Descripcion);
					setValue('Puerto', Sensor.Puerto);
					setValue('Velocidad_Transmision', Sensor.Velocidad_Transmision);
					setValue('Imagen', Sensor.Imagen);
				}
			} catch (error) {
				console.log(error);
			}
		}
		CargarSensor();
	}, []);

	const onSubmit = handleSubmit(async(data) => {
		if (Parametros.id) {
			await ActualizarSensor(Parametros.id, data);
		} else {
			await CrearSensor(data);
		}
		Navegacion('/Usuario/Sensores');
	});

	return (
		
		<div className='flex flex-row'>
			<NavComponent />
			<div className="shadow-xl p-8 max-h-screen overflow-y-auto static w-full">
				<div className="flex items-center gap-8">
					<Link to="/Usuario/Sensores">
						<i className="fa-solid fa-arrow-left text-4xl text-white hover:text-emerald-600 transition-all"></i>
					</Link>
					<h1 className="text-4xl font-semibold text-white">Agregar Sensor</h1>
				</div>
                <hr className='border-solid border-emerald-700 border-4 my-6 rounded-full'/>
				<form onSubmit={onSubmit} className='w-1/2 bg-gray-900 p-8 rounded-xl max-lg:w-full'>
					<InputComponent
						LabelTexto="Nombre"
						Dato="Nombre"
						TipoInput="text"
						Placeholder="Nombre"
						Requerido={true}
						register={register}
					/>
					<br />
					<InputComponent
						LabelTexto="Descripción"
						Dato="Descripcion"
						TipoInput="text"
						Placeholder="Descripción"
						Requerido={true}
						register={register}
					/>
					<br />
					<InputComponent
						LabelTexto="Puerto"
						Dato="Puerto"
						TipoInput="text"
						Placeholder="Puerto"
						Requerido={true}
						register={register}
					/>
					<br />
					<InputComponent
						LabelTexto="Velocidad de transmisión (ms)"
						Dato="Velocidad_Transmision"
						TipoInput="number"
						Minimo={15000} // 15 segundos
						Maximo={900000} // 15 minutos
						Steps={1000} // 1 segundo
						Placeholder="Velocidad de transmisión en milisegundos"
						Requerido={true}
						register={register}
					/>
					<br />
					<InputComponent
						LabelTexto='Imagen (URL)'
						Dato='Imagen'
						TipoInput='text'
						Placeholder='Imagen URL'
						Requerido={true}
						register={register}
					/>
					<br /><br />
					<ButtonComponent Tipo="submit" Texto="Agregar Sensor" />
				</form>
				
			</div>
		</div>
	);
}

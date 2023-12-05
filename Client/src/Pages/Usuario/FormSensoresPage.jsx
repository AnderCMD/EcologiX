// ? Importaciones
import { useForm } from 'react-hook-form';
import { UsarSensores } from '../../Context/SensoresContext';

// ? Importacion de Componentes
import InputComponent from '../../Components/InputComponent';
import ButtonComponent from '../../Components/ButtonComponent';
import NavComponent from '../../Components/Usuario/NavComponent';

export default function FormSensoresPage() {
	const { register, handleSubmit } = useForm();
	const { CrearSensor } = UsarSensores();

	const onSubmit = handleSubmit((data) => {
		CrearSensor(data);
	});

	return (
		
		<div className='flex flex-row'>
			<NavComponent />
			<div className="shadow-xl p-8 max-h-screen overflow-y-auto static w-full">
				<h1 className="text-3xl font-semibold mb-4 text-white">
					Agregar sensor
				</h1>
				<br />
				<form onSubmit={onSubmit} className='w-1/2 bg-gray-900 p-8 rounded-xl'>
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
					<ButtonComponent Tipo="submit" Texto="Agregar Sensor" />
				</form>
			</div>
		</div>
	);
}

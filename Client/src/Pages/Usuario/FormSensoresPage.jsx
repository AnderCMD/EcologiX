// ? Importaciones
import { useForm } from 'react-hook-form';
import { UsarSensores } from '../../Context/SensoresContext';

// ? Importacion de Componentes
import InputComponent from '../../Components/InputComponent';
import ButtonComponent from '../../Components/ButtonComponent';

export default function FormSensoresPage() {
	const { register, handleSubmit } = useForm();
	const { CrearSensor } = UsarSensores();

	const onSubmit = handleSubmit((data) => {
		CrearSensor(data);
	});

	return (
		<div>
			<h1 className="text-3xl font-semibold mb-4 text-green-700">
				Agregar sensor
			</h1>
			<br />
			<form onSubmit={onSubmit}>
				<InputComponent
					LabelTexto="Nombre"
					Dato="Nombre"
					TipoInput="text"
					Placeholder="Nombre"
					Requerido={true}
					register={register}
				/>
				<InputComponent
					LabelTexto="Descripción"
					Dato="Descripcion"
					TipoInput="text"
					Placeholder="Descripción"
					Requerido={true}
					register={register}
				/>
				<InputComponent
					LabelTexto="Puerto"
					Dato="Puerto"
					TipoInput="text"
					Placeholder="Puerto"
					Requerido={true}
					register={register}
				/>
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
				<ButtonComponent Tipo="submit" Texto="Agregar Sensor" />
			</form>
		</div>
	);
}

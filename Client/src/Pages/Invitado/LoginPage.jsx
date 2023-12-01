// TODO: Login de usuario invitado

// ? Importacion de las dependencias
import { useForm } from 'react-hook-form';

// ? Importacion de los componentes
import SpanComponent from '../../Components/SpanComponent';
import InputComponent from '../../Components/InputComponent';
import ButtonComponent from '../../Components/ButtonComponent';

export default function LoginPage() {
	// ? Funcion para validar los datos del formulario
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	// ? Funcion para enviar los datos del formulario
	const onSubmit = handleSubmit((data) => {
		console.log(data);
	});

	return (
		<div className="flex justify-center items-center h-screen">
			<div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
				<h1 className="text-4xl font-semibold mb-4 text-green-700">
					Iniciar sesión
				</h1>
				<br />
				<form onSubmit={onSubmit}>
					<div className="mb-4">
						<InputComponent
							LabelTexto="Correo"
							TipoInput="email"
							Placeholder="Correo"
							Dato='Correo'
							Requerido={true}
							register={register}
						/>
						{errors.Correo && (
							<SpanComponent Texto="⚠️ Este campo es requerido" />
						)}
					</div>

					<div className="mb-4">
						<InputComponent
							LabelTexto="Contraseña"
							TipoInput="password"
							Placeholder="Contraseña"
							Dato='Password'
							Requerido={true}
							register={register}
						/>
						{errors.Password && (
							<SpanComponent Texto="⚠️ Este campo es requerido" />
						)}
					</div>

					<div className="mb-6 text-green-700">
						<a href="#" className="hover:underline">
							¿Olvidaste tu contraseña?
						</a>
					</div>
					<br />
					<ButtonComponent Tipo="submit" Texto="Iniciar sesión" />
				</form>

				<div className="mt-6 text-green-700 text-center">
					<a href="#" className="hover:underline">
						¿No tienes cuenta? Registrate ahora
					</a>
				</div>
			</div>

			<div className="w-1/2 h-screen hidden lg:block">
				<img
					src="/Images/EcologiX-Banner.png"
					alt="EcologiX Login"
					className="object-fill w-full h-full"
				/>
			</div>
		</div>
	);
}

// TODO: Login de usuario invitado

// ? Importacion de las dependencias
import { useForm } from 'react-hook-form';
import { UsarAutenticador } from '../../Context/AutenticadorContext';
import { Link, useNavigate } from 'react-router-dom'; // Para navegar entre paginas

// ? Importacion de los componentes
import SpanComponent from '../../Components/SpanComponent';
import InputComponent from '../../Components/InputComponent';
import ButtonComponent from '../../Components/ButtonComponent';
import { useEffect } from 'react';

export default function LoginPage() {
	// ? Funcion para validar los datos del formulario
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	// ? Importar el contexto de Autenticador
	const { Login, errors: LoginErrors, Autenticado } = UsarAutenticador();
	const Navegacion = useNavigate();

	// ? Funcion para enviar los datos del formulario
	const onSubmit = handleSubmit((data) => {
		Login(data);
	});

	// ? Si el usuario esta autenticado, redirigirlo a la pagina de inicio
	useEffect(() => {
		if (Autenticado) {
			Navegacion('/Usuario/Inicio');
		}
	}, [Autenticado, Navegacion]);

	return (
		<div className="flex justify-center items-center h-screen">
			<div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
				<h1 className="text-4xl font-semibold mb-4 text-emerald-700">
					Iniciar sesión
				</h1>
				<br />

				{
					LoginErrors.map((error, i) => (
						<div
							className="bg-red-600 p-2 text-white rounded-md mb-4"
							key={i}
						>
							{error}
						</div>
					)) // Se muestran los errores de registro
				}

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

					<div className="mb-6 text-emerald-700">
						<a href="#" className="hover:underline">
							¿Olvidaste tu contraseña?
						</a>
					</div>
					<ButtonComponent Tipo="submit" Texto="Iniciar sesión" />
				</form>

				<div className="mt-6 text-emerald-700 text-center">
					<Link to="/Registro" className="hover:underline">
						¿No tienes cuenta? Registrate ahora
					</Link>
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

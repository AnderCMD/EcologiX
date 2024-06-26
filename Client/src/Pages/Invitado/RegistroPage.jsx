// TODO: Pagina de registro de usuarios

// ? Importaciones de dependencias
import { useForm } from 'react-hook-form';
import { UsarAutenticador } from '../../Context/AutenticadorContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// ? Importaciones de componentes
import InputComponent from '../../Components/InputComponent';
import SpanComponent from '../../Components/SpanComponent';
import ButtonComponent from '../../Components/ButtonComponent';
import NavComponent from '../../Components/Invitado/NavComponent';

// ? Pagina de registro de usuarios
export default function RegistroPage() {
	// ? Hook para el manejo de formularios
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	// ? Hook para el manejo de la autenticacion
	const {
		Registro,
		Autenticado,
		errors: RegistroErrors,
	} = UsarAutenticador();

	// ? Hook para el manejo de rutas
	const Navegacion = useNavigate();

	// ? Efecto para redirigir al usuario a la pagina de tareas si ya esta autenticado
	useEffect(() => {
		if (Autenticado) {
			Navegacion('/Usuario/Inicio');
		}
	}, [Autenticado, Navegacion]); // Si el usuario esta autenticado, se redirige a la pagina de tareas

	// ? Funcion para registrar un usuario
	const onSubmit = handleSubmit(async (Valores) => {
		Registro(Valores);
	});

	// ? Renderizado del componente
	return (
		<div className="flex flex-col h-screen lg:overflow-hidden">
			<NavComponent />
			<div className="flex justify-center items-center h-full">
				<div className="w-1/2 h-screen hidden lg:block">
					<img
						src="/Images/Banners/EcologiX-Banner-4.png"
						alt="EcologiX Login"
						className="object-fill w-full h-full"
					/>
				</div>

				<div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
					<h1 className="text-4xl font-semibold mb-4 text-white max-sm:text-3xl">
						Registrarse
					</h1>
					<p className='text-gray-400 tracking-widest'>¡Bienvenido a <span className='text-emerald-600 font-semibold'>EcologiX</span>, la vanguardia en monitoreo ambiental! En un mundo donde la protección de nuestro entorno es esencial,
					te brinda acceso a un sistema integral de monitoreo ambiental.</p>
					<br />

					{
						RegistroErrors.map((error, i) => (
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
								LabelTexto="Usuario"
								TipoInput="text"
								Placeholder="Usuario"
								Dato="Usuario"
								Requerido={true}
								register={register} // Se registra el campo Usuario con la validacion de requerido
							/>
							{
								// ? Validacion de errores
								errors.Usuario && (
									// ? Validacion de errores
									<SpanComponent Texto="⚠️ Este campo es requerido" />
								) // Si el campo Usuario tiene errores, se muestra un mensaje de error
							}
						</div>

						<div className="mb-4">
							<InputComponent
								LabelTexto="Correo"
								TipoInput="email"
								Placeholder="Correo"
								Dato="Correo"
								Requerido={true}
								register={register} // Se registra el campo Correo con la validacion de requerido
							/>
							{errors.Correo && (
								// ? Validacion de errores
								<SpanComponent Texto="⚠️ Este campo es requerido" />
							)}
						</div>

						<div className="mb-4">
							<InputComponent
								LabelTexto="Contraseña"
								TipoInput="password"
								Placeholder="Contraseña"
								Dato="Password"
								Requerido={true}
								register={register} // Se registra el campo Password con la validacion de requerido
							/>
							{errors.Password && (
								// ? Validacion de errores
								<SpanComponent Texto="⚠️ Este campo es requerido" />
							)}
						</div>
						<ButtonComponent Tipo="submit" Texto="Registrarse" />
					</form>

					<div className="mt-6 text-emerald-700 text-center font-semibold hover:scale-105 transition-all">
						<a href="/Login" className="hover:underline">
							¿Ya tienes una cuenta? Inicia sesión
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

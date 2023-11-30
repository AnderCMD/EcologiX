// TODO: Pagina de registro de usuarios

// ? Importaciones de dependencias
import { useForm } from 'react-hook-form';
import { UsarAutenticador } from '../Context/AutenticadorContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
			Navegacion('/Tareas');
		}
	}, [Autenticado, Navegacion]); // Si el usuario esta autenticado, se redirige a la pagina de tareas

	// ? Funcion para registrar un usuario
	const onSubmit = handleSubmit(async (Valores) => {
		Registro(Valores);
	});

	// ? Renderizado del componente
	return (
		<div className="bg-zinc-800 max-w-md p-10 rounded-md">
			{
				RegistroErrors.map((error, i) => (
					<div className="bg-red-500 p-2 text-white" key={i}>
						{error}
					</div>
				)) // Se muestran los errores de registro
			}
			<form onSubmit={onSubmit}>
				<input
					type="text"
					{...register('Usuario', { required: true })} // Se registra el campo Usuario con la validacion de requerido
					className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
					placeholder="Usuario"
				/>
				{
					// ? Validacion de errores
					errors.Usuario && (
						<span className="text-red-500">
							⚠️ Este campo es requerido
						</span>
					) // Si el campo Usuario tiene errores, se muestra un mensaje de error
				}
				<input
					type="email"
					{...register('Correo', { required: true })}
					className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
					placeholder="Correo"
				/>
				{errors.Correo && (
					// ? Validacion de errores
					<span className="text-red-500">
						⚠️ Este campo es requerido
					</span>
				)}
				<input
					type="password"
					{...register('Password', { required: true })}
					className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
					placeholder="Contraseña"
				/>
				{errors.Password && (
					// ? Validacion de errores
					<span className="text-red-500">
						⚠️ Este campo es requerido
					</span>
				)}
				<button
					type="submit"
					className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 hover:bg-zinc-600 transition-all"
				>
					Registrarse
				</button>
			</form>
		</div>
	);
}

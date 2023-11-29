import { useForm } from 'react-hook-form';
import { UsarAutenticador } from '../Context/AutenticadorContext';

export default function RegistroPage() {
	const { register, handleSubmit } = useForm();
	const { Registro, Usuario } = UsarAutenticador();

	console.log(Usuario);

	return (
		<div className="bg-zinc-800 max-w-md p-10 rounded-md">
			<form
				onSubmit={handleSubmit(async (Valores) => {
					Registro(Valores);
				})}
			>
				<h1 className="text-white text-center font-bold text-2xl">
					Iniciar Sesion
				</h1>
				<input
					type="text"
					{...register('Usuario', { required: true })} // El primer parametro es el nombre del input, el segundo es un objeto con las validaciones
					className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
					placeholder="Usuario"
				/>
				<input
					type="email"
					{...register('Correo', { required: true })}
					className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
					placeholder="Correo"
				/>
				<input
					type="password"
					{...register('Password', { required: true })}
					className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
					placeholder="Contraseña"
				/>
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

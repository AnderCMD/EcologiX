// TODO: Componente de boton reutilizable

// ? Importaciones de dependencias
import PropTypes from 'prop-types';

// ? Exportacion del componente
export default function ButtonComponent(props) {
	const { Tipo, Texto } = props; // Destructuracion de las props

	return (
		<button
			type={ Tipo }
			className="bg-emerald-700 hover:bg-emerald-600 transition-all text-white font-semibold rounded-md py-2 px-4 w-full my-2"
		>
			{ Texto }
		</button>
	);
}

// ? Definicion de las props del componente
ButtonComponent.propTypes = {
	Tipo: PropTypes.string.isRequired,
	Texto: PropTypes.string.isRequired,
};

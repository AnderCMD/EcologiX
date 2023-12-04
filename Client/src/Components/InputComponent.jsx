// TODO: Componente de input para formulários

// ? Importaciones de dependencias
import PropTypes from 'prop-types';

// ? Exportacion del componente
export default function InputComponent(props) {
    const { LabelTexto, TipoInput, Placeholder, register, Dato, Requerido, Minimo, Maximo, Steps } = props; // Destructuracion de las props

	return (
		<>
			<label
				htmlFor={ Dato }
				className="block text-gray-600 font-semibold mb-2"
			>
				{ LabelTexto }:
			</label>
			<input
				id={ Dato }
				type={ TipoInput }
				className="w-full border border-gray-300 rounded-md py-2 px-3 mb-2 focus:outline-none focus:border-emerald-700"
				placeholder={ Placeholder }
				required={ Requerido }
				{ ...register(Dato, {Requerido}) }
				{ ...(TipoInput === 'number' ? { min: Minimo, max: Maximo, step: Steps } : {})}
			/>
		</>

	);
}

// ? Definicion de las props del componente
InputComponent.propTypes = {
	// Requeridos
	LabelTexto: PropTypes.string.isRequired,
	Dato: PropTypes.string.isRequired,
    TipoInput: PropTypes.string.isRequired,
    Placeholder: PropTypes.string.isRequired,
	Requerido: PropTypes.bool.isRequired,
	register: PropTypes.func.isRequired,

	// Opcionales
	Minimo: PropTypes.number,
	Maximo: PropTypes.number,
	Steps: PropTypes.number,
};


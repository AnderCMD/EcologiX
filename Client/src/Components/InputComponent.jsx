// TODO: Componente de input para formulários

// ? Importaciones de dependencias
import PropTypes from 'prop-types';

// ? Exportacion del componente
export default function InputComponent(props) {
    const { LabelTexto, TipoInput, Placeholder, register, Dato, Requerido } = props; // Destructuracion de las props

	return (
		<>
			<label
				className="block text-gray-600 font-semibold mb-2"
			>
				{ LabelTexto }:
			</label>
			<input
				type={ TipoInput }
				className="w-full border border-gray-300 rounded-md py-2 px-3 mb-2 focus:outline-none focus:border-green-700"
				placeholder={ Placeholder }
				required={ Requerido }
				{ ...register(Dato, {Requerido}) }
			/>
		</>

	);
}

// ? Definicion de las props del componente
InputComponent.propTypes = {
	LabelTexto: PropTypes.string.isRequired,
    TipoInput: PropTypes.string.isRequired,
    Placeholder: PropTypes.string.isRequired,
	Dato: PropTypes.string.isRequired,
	Requerido: PropTypes.bool.isRequired,
	register: PropTypes.func.isRequired,
};


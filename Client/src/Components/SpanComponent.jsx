// TODO: Componente de span para mostrar errores

// ? Importaciones de dependencias
import PropTypes from 'prop-types';

// ? Exportacion del componente
export default function SpanComponent(props) {
	const { Texto } = props;

	return (
		// ? Validacion de errores
		<span className="text-red-600 font-medium">{Texto}</span>
	);
}

// ? Definicion de las props del componente
SpanComponent.propTypes = {
	Texto: PropTypes.string.isRequired,
};

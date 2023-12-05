// TODO: Página de inicio para el usuario invitado

// ? Importaciones de componentes
import CarrouselComponent from '../../Components/CarrouselComponent';
import NavComponent from '../../Components/Invitado/NavComponent';

// ? Arreglo de datos para el carrousel
const DatosCarrousel = [
    {
        ID: 1,
        Imagen: '/Images/EcologiX-Banner.png',
        Descripcion: "EcologiX Banner",
        Activo: true
    },
    {
        ID: 2,
        Imagen: '/Images/EcologiX-Banner.png',
        Descripcion: "EcologiX Banner",
        Activo: false
    }
];

// ? Exportación principal
export default function IndexPage() {
	return (
		<div className="flex flex-col">
            <NavComponent />
			<CarrouselComponent DatosCarrousel={DatosCarrousel} />
		</div>
	);
}

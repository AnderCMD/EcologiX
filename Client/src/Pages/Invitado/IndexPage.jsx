// TODO: Página de inicio para el usuario invitado

// ? Importaciones de componentes
import CarrouselComponent from '../../Components/CarrouselComponent';
import FooterComponent from '../../Components/Invitado/FooterComponent';
import NavComponent from '../../Components/Invitado/NavComponent';

// ? Arreglo de datos para el carrousel
const DatosCarrousel = [
    {
        ID: 1,
        Imagen: '/Images/Banners/EcologiX-Banner-1.png',
        Descripcion: "EcologiX Banner 1",
        Activo: true
    },
    {
        ID: 2,
        Imagen: '/Images/Banners/EcologiX-Banner-2.png',
        Descripcion: "EcologiX Banner 2",
        Activo: false
    },
    {
        ID: 3,
        Imagen: '/Images/Banners/EcologiX-Banner-3.png',
        Descripcion: "EcologiX Banner 3",
        Activo: false
    },
    {
        ID: 4,
        Imagen: '/Images/Banners/EcologiX-Banner-4.png',
        Descripcion: "EcologiX Banner 4",
        Activo: false
    }
];

// ? Exportación principal
export default function IndexPage() {
	return (
		<div className="flex flex-col h-screen">
            <NavComponent />
			<CarrouselComponent DatosCarrousel={DatosCarrousel} />
            <FooterComponent />
		</div>
	);
}

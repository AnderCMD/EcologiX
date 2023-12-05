import propTypes from 'prop-types';

export default function CarrouselComponent({DatosCarrousel}) {
    return(
        <div id="default-carousel" className="relative w-full z-0" data-carousel="slide" >
            {/* <!-- Carousel wrapper --> */}
            <div className="relative h-56 overflow-hidden md:h-96">
                { // Items
                    DatosCarrousel.map((Datos) => {
                        return (
                            <div key={ Datos.ID } className="hidden duration-700 ease-in-out transition-all" data-carousel-item>
                                <img src={ Datos.Imagen } className="absolute block object-cover w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={ Datos.Descripcion } />
                            </div>
                        );
                    })
                }
            </div>
            {/* <!-- Slider indicators --> */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {
                    DatosCarrousel.map((Datos) => {
                        return (
                            <button type="button" className="w-3 h-3 rounded-full" aria-current={ Datos.Activo } aria-label={`Slide ${ Datos.ID }`} data-carousel-slide-to={ Datos.ID } key={ Datos.ID }></button>
                        );
                    })
                }
            </div>
            {/* <!-- Slider controls --> */}
            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                    <svg className="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span className="sr-only">Anterior</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                    <svg className="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="sr-only">Siguiente</span>
                </span>
            </button>
        </div>

    );
}

CarrouselComponent.propTypes = {
    DatosCarrousel: propTypes.array.isRequired,
};
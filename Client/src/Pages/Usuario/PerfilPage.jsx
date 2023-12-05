// ? Importaciones de dependencias
import { UsarAutenticador } from '../../Context/AutenticadorContext';

// ? Importaciones de componentes
import NavComponent from '../../Components/Usuario/NavComponent';

// import '../../Assets/CSS/PerfilPages.css';

export default function PerfilPage() {
    const { Usuario } = UsarAutenticador();

	return (
        <div className="flex flex-row">
            <NavComponent />
            <div className="shadow-xl p-8 max-h-screen overflow-y-auto static w-full">
                <div className="flex items-center gap-8">
                    <h1 className="text-4xl font-semibold text-white">Perfil</h1>
                </div>
                <hr className='border-solid border-emerald-700 border-4 my-6 rounded-full'/>
                <div className="flex flex-row items-center max-sm:flex-col max-sm:items-center gap-8 bg-gray-800 border-gray-400 p-8 rounded-xl mb-8">
                    <h1 className='text-3xl font-semibold'>¡Bienvenido de vuelta<span className='text-emerald-400'> { Usuario.Usuario }</span>!</h1>
                </div>
                <div className="flex flex-row gap-8 max-lg:flex-col">
                    <div className="flex flex-row items-center max-xl:flex-col max-sm:items-center gap-8 bg-gray-800 border-gray-400 p-8 rounded-xl w-1/2 max-lg:w-full">
                        <img className="w-52 rounded-full border-4 border-emerald-700" src="/Images/Foto-Perfil.png" alt="Rounded avatar" />
                        <div className="flex flex-col gap-4">
                            <h1 className='text-3xl font-semibold tracking-wider'>Datos del usuario</h1>
                            <hr className='border-2 rounded-full border-emerald-600'/>
                            <h2 className='text-2xl font-semibold tracking-wider'><i className="fa-solid fa-user mr-2"></i>Usuario: <span className='text-emerald-500'> { Usuario.Usuario }</span></h2>
                            <h2 className='text-2xl font-semibold tracking-wider'><i className="fa-solid fa-envelope mr-2"></i>Correo: <span className='text-emerald-500'> { Usuario.Correo }</span></h2>
                        </div>
                    </div>
                    <div className="flex flex-row items-center max-sm:flex-col max-sm:items-center gap-8 bg-gray-800 border-gray-400 p-8 rounded-xl w-1/2 max-lg:w-full">
                        <div className="flex flex-col gap-4">
                            <h1 className='text-3xl font-semibold tracking-wider'>¿Quiza te pueda interesar?</h1>
                            <hr className='border-2 rounded-full border-emerald-600'/>
                            <h2 className='text-2xl font-semibold tracking-wider text-emerald-500'><i className="fa-solid fa-circle-question mr-2"></i>Como tener una buena temperatura en casa:</h2>
                            <h3 className='text-2xl font-semibold tracking-wider text-yellow-600'><i className="fa-solid fa-circle-info mr-2"></i>Aislamiento</h3>
                            <p className='text-xl font-medium tracking-wider'>Asegúrate de que tu casa esté bien aislada para retener el calor en invierno y mantenerlo fuera en verano.</p>
                            <h3 className='text-2xl font-semibold tracking-wider text-yellow-600'><i className="fa-solid fa-circle-info mr-2"></i>Ventilación adecuada</h3>
                            <p className='text-xl font-medium tracking-wider'>Ventila la casa regularmente para mejorar la calidad del aire, especialmente en climas más cálidos.</p>
                            <h3 className='text-2xl font-semibold tracking-wider text-yellow-600'><i className="fa-solid fa-circle-info mr-2"></i>Aprovecha la luz solar</h3>
                            <p className='text-xl font-medium tracking-wider'>Aprovecha la luz natural durante el día, pero cierra cortinas o persianas cuando el sol sea más intenso.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	);
}


{/* <div className="informacion">
<h1>¿Quiza te pueda interesar?</h1>
<div className="o">
<p>Como tener una buena temperatura en casa:</p>
</div>
<div className="texto1">
<ol>
<li>
<b>Usa cualquier fuente de calor:</b> sacale
maximo provecho a las fuentes de calor en el
hogar
</li>
<li>
<b>
Ventila tu casa durante un tiempo prudente:
</b>{' '}
es importante ventilar los ambientes de la casa
</li>
<li>
<b>Revierte la humedad:</b> Una humedad alta en
invierno puede provocar que la sensacion del
frio aumente
</li>
</ol>
</div>
<div className="o">
<p>Como tener una buena humedad en casa:</p>
<ol>
<li>Abrir las ventanas para que fluya el aire</li>
<li>
Mantener la calefacción a una temperatura más
baja
</li>
<li>Colocar plantas en la casa</li>
</ol>
</div> */}
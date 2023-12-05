import { Link } from "react-router-dom";
import { UsarAutenticador } from "../../Context/AutenticadorContext";

export default function NavComponent() {
    const { Logout } = UsarAutenticador(); // Obtener la funcion Logout del contexto de Autenticador

    return(
        <aside className="flex flex-col text-center items-center w-16 h-screen overflow-x-hidden py-8 overflow-y-auto bg-gray-900 border-gray-200 shadow-xl shadow-emerald-800 justify-between z-0">
            <div className="flex gap-6">
                <Link to="/Usuario/Inicio" className="flex flex-col gap-12">
                    <img className="w-auto h-12" src="/Icons/Ecologix-Icono.svg" alt="Logo EcologiX" />
                    <h1 className="text-2xl -rotate-90 tracking-wider font-semibold">EcologiX</h1>
                </Link>
            </div>

            <nav className="flex flex-col gap-4">
                <Link to="/Usuario/Inicio" className="p-1.5 focus:outline-nones transition-all duration-200 rounded-lg hover:bg-emerald-950 hover:scale-110 text-white text-2xl hover:text-emerald-600">
                    <i className="fa-solid fa-house"></i>
                </Link>
                
                <Link to="/Usuario/Perfil" className="p-1.5 focus:outline-nones transition-all duration-200 rounded-lg hover:bg-emerald-950 hover:scale-110 text-white text-2xl hover:text-emerald-600">
                    <i className="fa-solid fa-user"></i>
                </Link>

                <Link to="/Usuario/Sensores" className="p-1.5 focus:outline-nones transition-all duration-200 rounded-lg hover:bg-emerald-950 hover:scale-110 text-white text-2xl hover:text-emerald-600">
                    <i className="fa-solid fa-microchip"></i>
                </Link>
            </nav>

            <div className="flex flex-col gap-6">
                <Link to="/Logout" onClick={() => {
                    Logout(); // Cerrar sesion
                }}>
                    <i className="fa-solid fa-right-from-bracket text-emerald-600 text-2xl hover:text-emerald-500 transition-all hover:scale-110"></i>
                </Link>
                <Link to="/Usuario/Perfil">
                    <img className="object-cover w-12 h-12 rounded-full shadow-2xl border-4 border-emerald-600" src="/Images/Foto-Perfil.png" alt="Perfil" />
                </Link>
            </div>
        </aside>
    );
}
import { Link } from "react-router-dom";
import { UsarAutenticador } from "../../Context/AutenticadorContext";

export default function NavComponent() {
    const { Logout } = UsarAutenticador(); // Obtener la funcion Logout del contexto de Autenticador

    return(
        <aside className="flex flex-col text-center items-center w-16 h-screen py-8 overflow-y-auto bg-white shadow-xl justify-between max-lg::w-full">
            <div className="flex flex-col gap-6">
                <Link to="/Usuario/Inicio">
                    <img className="w-auto h-12 " src="/Icons/Ecologix-Icono.svg" alt="Logo EcologiX" />
                </Link>
            </div>

            <nav className="flex flex-col gap-4">
                <Link to="/Usuario/Inicio" className="p-1.5 text-gray-700 focus:outline-nones transition-all duration-200 rounded-lg hover:bg-gray-200">
                    <i className="fa-solid fa-house text-emerald-700 text-2xl"></i>
                </Link>
                
                <Link to="/Usuario/Perfil" className="p-1.5 text-gray-700 focus:outline-nones transition-all duration-200 rounded-lg hover:bg-gray-200">
                    <i className="fa-solid fa-user text-emerald-700 text-2xl"></i>
                </Link>

                <Link to="/Usuario/Sensores" className="p-1.5 text-gray-700 focus:outline-nones transition-all duration-200 rounded-lg hover:bg-gray-200">
                    <i className="fa-solid fa-microchip text-emerald-700 text-2xl"></i>
                </Link>
            </nav>

            <div className="flex flex-col gap-6">
                <Link to="/Logout" onClick={() => {
                    Logout(); // Cerrar sesion
                }}>
                    <i className="fa-solid fa-right-from-bracket text-emerald-700 text-2xl hover:text-emerald-600 transition-all"></i>
                </Link>
                <Link to="/Usuario/Perfil">
                    <img className="object-cover w-10 h-10 rounded-full shadow-2xl" src="/Images/Foto-Perfil.png" alt="Perfil" />
                </Link>
            </div>
        </aside>
    );
}
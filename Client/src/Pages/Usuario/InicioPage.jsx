// import { UsarAutenticador } from "../../Context/AutenticadorContext";

// ? Importacion de los componentes
import NavComponent from "../../Components/Usuario/NavComponent";

export default function InicioPage() {
    // const { Usuario } = UsarAutenticador();
    return (
        <div className="flex flex-row">
            <NavComponent />
            <div className="">
                <div className="">
                    <img src="/Images/Banners/EcologiX-Banner-1.png" alt="" className="w-screen h-screen object-fill"/>   
                </div>
            </div>
            
        </div>
    );
}
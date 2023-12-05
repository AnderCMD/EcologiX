import NavComponent from "../../Components/Usuario/NavComponent";
import '../../../public/CSS/PerfilPages.css'

export default function PerfilPage() {
    return (
        <>
            <div className="flex flex-row">
                <NavComponent />
                <div className="perfil">
                    <img className="foto" src="../../public/Images/Foto-perfil.png" /> 
                    <div className="editar">
                        <button>Cambiar foto</button>
                    </div> 
                    <div className="contenido"> 
                <div>
                    <div className="nc">
                        <p className="n">Nombre de usuario:</p>
                        <p className="us">AnderCMD</p>
                        <br />
                        <p className="n">Correo electronico:</p>
                        <p className="us">ander@gmail.com</p>
                    </div>
                </div>    
                </div>
                </div>
                <div className="informacion">
                    <h1>¿Quiza te pueda interesar?</h1>
                    <div className="o">
                        <p>Como tener una buena temperatura en casa:</p>
                    </div>
                    <div className="texto1">
                        <ol>
                            <li><b>Usa cualquier fuente de calor:</b> sacale maximo provecho a las fuentes de calor en el hogar</li>
                            <li><b>Ventila tu casa durante un tiempo prudente:</b> es importante ventilar los ambientes de la casa</li>
                            <li><b>Revierte la humedad:</b> Una humedad alta en invierno puede provocar que la sensacion del frio aumente</li>
                        </ol>
                    </div>
                    <div className="o">
                        <p>Como tener una buena humedad en casa:</p>
                        <ol>
                            <li>Abrir las ventanas para que fluya el aire</li>
                            <li>Mantener la calefacción a una temperatura más baja</li>
                            <li>Colocar plantas en la casa</li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    );
}
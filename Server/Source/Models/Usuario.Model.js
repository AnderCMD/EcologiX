// TODO: Modelo de la tabla Usuario

// ? Importaciones
import mongoose from "mongoose";

// ? Esquema de la tabla Usuario
const UsuarioSchema = new mongoose.Schema({ // Definir el esquema de la tabla
    Usuario: { // Nombre de usuario
        type: String, // Tipo de dato
        required: true, // Es obligatorio
        unique: true, // No se puede repetir
        trim: true, // Elimina espacios en blanco al inicio y al final
    },
    Correo: { // Correo electrónico
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    Password: { // Contraseña encriptada
        type: String,
        required: true,
        trim: true,
    },
}, { // Opciones
    timestamps: true, // Para agregar la fecha de creación y actualización de cada registro
});

// ? Exportaciones
export default mongoose.model('Usuario', UsuarioSchema);
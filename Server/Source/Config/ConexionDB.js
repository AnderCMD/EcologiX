import mongoose from 'mongoose';

const ConexionDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/EcologiX');
        console.log('✅ ¡Base de datos conectada exitosamente!');
        console.log('===============================================\n');
    } catch (error) {
        console.log('❌ ¡Error al conectar la base de datos!');
        console.log('===============================================\n');
        console.error(error);
    }
};

export default ConexionDB;
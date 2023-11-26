import mysql from 'mysql2';

const ConexionDB = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'EcologiX',
});

ConexionDB.connect((err) => {
	if (err) {
        console.log('● ¡Error al conectar a la base de datos!\n');
        console.log('============================================\n');
		console.error(err, '\n');
		return;
	}
	console.log('● ¡Conexión exitosa a la base de datos!\n');
    console.log('============================================\n');
});

export default ConexionDB;

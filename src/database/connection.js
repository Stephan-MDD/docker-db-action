const sql = require('mssql');

const dbConfig = {
	server: process.env.SERVER_IP,
	database: process.env.DATABASE,
	user: process.env.DATABASE_USERNAME,
	password: process.env.PASSWORD,
	port: parseInt(process.env.PORT),
	options: {
		encrypt: false,
		enableArithAbort: true,
	},
};

let pool;

async function getPool() {
	if (pool === undefined) {
		pool = new sql.ConnectionPool(dbConfig);

		await pool.connect();
		pool.on('error', console.error);
	}

	return pool;
}

module.exports = { getPool };
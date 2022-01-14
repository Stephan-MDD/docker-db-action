const sql = require('mssql');

const dbConfig = {
	server: 'localhost', //process.env.SERVER_IP,
	database: 'master', //process.env.DATABASE,
	user: 'sa', //process.env.DATABASE_USERNAME,
	password: 'Pass1234', //process.env.PASSWORD,
	port: 1433, //parseInt(process.env.PORT),
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

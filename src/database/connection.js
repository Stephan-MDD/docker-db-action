/*
const { Client } = require('pg');

let client;

const connectionOptions = {
	production: {
		host: 'localhost',
		database: 'test',
		port: 5432,
	},

	development: {
		host: 'localhost',
		database: 'test',
		port: 5432,
	},

	test: {
		host: process.env.POSTGRES_HOST,
		port: process.env.POSTGRES_PORT,
		user: 'postgres',
		password: 'postgres',
		database: 'postgres',
	},
};

async function getClient() {
	// singleton
	if (client === undefined) {
		const { NODE_ENV } = process.env;
		client = new Client(connectionOptions[NODE_ENV] ?? connectionOptions.development);
		await client.connect();
	}

	return client;
}
*/

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

module.exports = { getClient, getPool };

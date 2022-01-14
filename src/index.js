const { getPool } = require('./database/connection');

async function getPersons() {
	const pool = await getPool();

	try {
		const result = await pool.query`SELECT * FROM Persons`;
		return result.recordset;
	} catch (error) {
		console.error(error);
	} finally {
		await pool.close();
	}
}

module.exports = { getPersons };

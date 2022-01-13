const { getClient } = require('./database/connection');

async function getPersons() {
	const client = await getClient();

	try {
		const result = await client.query('SELECT * FROM Persons');
		return result.rows;
	} catch (error) {
		console.error(error);
	} finally {
		await client.end();
	}
}

module.exports = { getPersons };

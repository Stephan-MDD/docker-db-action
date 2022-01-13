const { getClient } = require('./database');

async function getPosts() {
	const client = await getClient();

	try {
		const result = await client.query(`
            SELECT * FROM posts
        `);

		return result.rows;
	} catch (error) {
        console.error(error);
	} finally {
        await client.end();
    }
}

module.exports = { getPosts };

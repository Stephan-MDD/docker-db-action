const { getClient } = require('./connection');

(async () => {
    const client = await getClient();

    try {
        // drop table
		const result = await client.query(`
            CREATE TABLE Persons (
                name varchar(255),
                age int
            );

            INSERT INTO Persons
            VALUES ('Stephan', 26), ('Melissa', 25);
        `);

		return result.rows;
	} catch (error) {
		console.error(error);
	} finally {
		await client.end();
	}
})()
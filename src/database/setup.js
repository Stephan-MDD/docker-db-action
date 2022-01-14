// const { getClient } = require('./connection');
const { getPool } = require('./connection');

// /*
//     1. create tables
//     2. add simple data
// */

// async function dbSetup() {
// 	const client = await getClient();

//     await client.query(`
//         CREATE TABLE Persons (
//             name varchar(255),
//             age int
//         );

//         INSERT INTO Persons
//         VALUES ('Stephan', 26), ('Melissa', 25);
//     `);

//     await client.end();
// }

async function dbSetup() {
	const pool = await getPool();

	await pool.query`
        CREATE TABLE Persons (
            name varchar(255),
            age int
        );
        
        INSERT INTO Persons
        VALUES ('Stephan', 26), ('Melissa', 25);
    `;
}

module.exports = { dbSetup };

const { Client } = require('pg')

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
        // database: 'postgres',
        port: process.env.POSTGRES_PORT,
    }
}


async function getClient() {
    // singleton
    if (client === undefined) {
        const { NODE_ENV } = process.env
        client = new Client(connectionOptions[NODE_ENV] ?? connectionOptions.development)
        await client.connect()
    }

    return client
}


module.exports = { getClient }
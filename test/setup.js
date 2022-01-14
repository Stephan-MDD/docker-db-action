const { dbSetup } = require('../src/database/setup');

module.exports = async () => {
    await dbSetup();
}
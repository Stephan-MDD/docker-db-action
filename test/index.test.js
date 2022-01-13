const { getPersons } = require('../src/index');
const { setup } = require('../src/database/setup');

// move to global before
beforeAll(async () => {
	await setup();
	// populate database
});

// move to global after
afterAll(async () => {
	// destroy database
});

test('get persons and validate amount', async () => {
	const persons = await getPersons();
	expect(persons.length).toBe(2);
});

const { getPersons } = require('../src/index');

// move to global before
beforeAll(async () => {
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

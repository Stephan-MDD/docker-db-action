const { getPosts } = require('../src/index')

// move to global before
beforeAll(() => {
    // populate database
})

// move to global after
afterAll(async () => {
    // destroy database
})

test('get posts and validate amount', async () => {
    const posts = await getPosts()
    expect(posts.length).toBe(2);
});
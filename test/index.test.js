const { getPosts, getTime } = require('../src/index')

// move to global before
beforeAll(() => {
    // populate database
})

// move to global after
afterAll(async () => {
    // destroy database
})

// test('get posts and validate amount', async () => {
//     const posts = await getPosts()
//     expect(posts.length).toBe(2);
// });

test('get posts and validate amount', async () => {
    const time = await getTime()
    console.log(time);
    expect(time.length).toBe(1);
});
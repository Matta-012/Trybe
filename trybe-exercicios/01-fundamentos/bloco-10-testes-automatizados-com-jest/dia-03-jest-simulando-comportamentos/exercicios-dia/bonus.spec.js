const fetch = require('node-fetch');
const fetchJoke = require('./bonus');

jest.mock('node-fetch');

test('should fetch jokes', async () => {
  const joke = {
    "id": "7h3oGtrOfxc",
    "joke": "Whiteboards ... are remarkable.",
    "status": 200
  };

  fetch.mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve(joke),
  }));

  await expect(fetchJoke.fetchJokes()).resolves.toEqual("Whiteboards ... are remarkable.")
});
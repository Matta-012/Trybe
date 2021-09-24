const fetchDog = require('./exercicio-6');

describe('Mockando requisição API', () => {
  fetchDog.fetchAPI = jest.fn();
  afterEach(fetchDog.fetchAPI.mockReset);

  it('testa a requisição quando a promise se resolve', async () => {
    fetchDog.fetchAPI.mockResolvedValue('request success');
    fetchDog.fetchAPI();

    expect(fetchDog.fetchAPI).toHaveBeenCalled();
    expect(fetchDog.fetchAPI).toHaveBeenCalledTimes(1);
    await expect(fetchDog.fetchAPI()).resolves.toBe('request success');
    expect(fetchDog.fetchAPI).toHaveBeenCalledTimes(2);
  });

  it('testa a requisição quando a promise é rejeitada', async () => {
    fetchDog.fetchAPI.mockRejectedValue('request failed');
    fetchDog.fetchAPI();

    expect(fetchDog.fetchAPI).toHaveBeenCalled();
    expect(fetchDog.fetchAPI).toHaveBeenCalledTimes(1);
    await expect(fetchDog.fetchAPI()).rejects.toBe('request failed');
    expect(fetchDog.fetchAPI).toHaveBeenCalledTimes(2);
  });
});


const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

describe('Testa se getRepos() busca o repositório correto', () => {
  const url = "https://api.github.com/orgs/tryber/repos";
  it('Testa se getRepos("https://api.github.com/orgs/tryber/repos") contém o repositório "sd-01-week4-5-project-todo-list" e "sd-01-week4-5-project-meme-generator"', async () => {
      const data = await getRepos(url);
      expect(data).toContainEqual('sd-01-week4-5-project-todo-list');
      expect(data).toContainEqual('sd-01-week4-5-project-meme-generator');
  });
  // Implementa resolução do gabarito
  it('gets a list of repositories names', () => {
    const url = 'https://api.github.com/orgs/tryber/repos';
  
    return getRepos(url).then(result => {
      expect(result).toContain('sd-01-week4-5-project-todo-list');
      expect(result).toContain('sd-01-week4-5-project-meme-generator');
    });
  });
});

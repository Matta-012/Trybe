const APIURL = 'https://economia.awesomeapi.com.br/json/all';

async function currencyAPI() {
  const request = await fetch(APIURL);
  const response = await request.json();

  return response;
}

export default currencyAPI;

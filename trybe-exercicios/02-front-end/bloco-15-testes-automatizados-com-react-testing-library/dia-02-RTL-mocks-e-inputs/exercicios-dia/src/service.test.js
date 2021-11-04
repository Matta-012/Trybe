const service = require("./service");

  it("Testa se a função foi chamada", () => {
    service.randomNumber = jest.fn().mockReturnValue(10);

    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });

  it('Testa o comportamento modificado da função, tornando-a uma função de divisão entre dois números', () => {
    service.randomNumber = jest.spyOn(service, "randomNumber").mockImplementationOnce((a, b) => a / b);

    expect(service.randomNumber(4, 2)).toBe(2);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    service.randomNumber.mockRestore();
    service.randomNumber = jest.fn().mockReturnValue(10)
    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });

  it('Testando os requerimentos do exercício 3', () => {
    service.randomNumber = jest.spyOn(service, "randomNumber").mockImplementationOnce((a, b, c) => a * b * c);

    expect(service.randomNumber(2, 2, 2)).toBe(8);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    service.randomNumber.mockRestore();
    service.randomNumber = jest.spyOn(service, "randomNumber").mockImplementationOnce((a) => a * 2);
    expect(service.randomNumber(5)).toBe(10);
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });

  it('Testes do exercício 5', () => {
    service.stringToUpperCase = jest.spyOn(service, "stringToUpperCase").mockImplementationOnce((str) => str.toLowerCase());

    expect(service.stringToUpperCase('XABLAU')).toBe('xablau');
    expect(service.stringToUpperCase).toHaveBeenCalledTimes(1);

    service.getFirstLetter = jest.spyOn(service, "getFirstLetter").mockImplementationOnce((str) => str[str.length - 1]);
    expect(service.getFirstLetter('xablau')).toBe('u');
    expect(service.getFirstLetter).toHaveBeenCalledTimes(1);

    service.concatStrings = jest.spyOn(service, "concatStrings").mockImplementationOnce((str1, str2, str3) => str1.concat(str2, str3));
    expect(service.concatStrings('xa', 'bla', 'u')).toBe('xablau');
    expect(service.concatStrings).toHaveBeenCalledTimes(1);
  });

  it('Mocka a requisição resolvida do exercício 5.', async () => {
    service.fetchDogAPI = jest.fn();
    service.fetchDogAPI.mockResolvedValue('request sucess');

    await expect(service.fetchDogAPI()).resolves.toBe('request sucess');
  });

  it('Mocka a requisição rejeitada do exercício 5.', async () => {
    service.fetchDogAPI = jest.fn();
    service.fetchDogAPI.mockRejectedValue('request failed');

    await expect(service.fetchDogAPI()).rejects.toBe('request failed');
  });
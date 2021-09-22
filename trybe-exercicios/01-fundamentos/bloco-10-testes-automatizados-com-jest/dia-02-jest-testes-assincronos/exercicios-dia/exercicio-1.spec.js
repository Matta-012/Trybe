const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

describe('Testa uppercase()', () => {
  it('Deve deixar a string em uppercase', (done) => {
    uppercase('xablau', callback => {
      try {
        expect(callback).toBe('XABLAU');
        done();
      } catch (error) {
        done(error);
      }
    })
  });
});
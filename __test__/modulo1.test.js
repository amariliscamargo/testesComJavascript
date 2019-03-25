const modulo1 = require('../modulo1');

describe('Testando as funções do modulo 1',() => {
  it('Esperar que a função FunctionA retorne a soma correta',() => {
    expect(modulo1.func1(2,2)).toBe(4);
  })
});
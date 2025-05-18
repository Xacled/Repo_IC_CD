//Este sera el test automatizado para comprobar que la funcion suma pase las pruebas

const sum = require('../src/prueba.js');
// Realizo una prueba de la función sum

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

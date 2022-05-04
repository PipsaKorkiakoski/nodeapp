const { calculate } = require('.././calculate');

test('adds 1 + 2 + 3 to equal 6', () => {
  expect(calculate(1, 2, 3).result).toBe(6);
});

test('adds 1 + 2 to equal 3', () => {
  expect(calculate(1, 2).result).toBe(3);
});
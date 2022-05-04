const { prime } = require('.././prime');

test('Number 1 is not prime number', () => {
  expect(prime(1).isPrime).toBe(false);
});

test('Number 5 is prime number', () => {
  expect(prime(5).isPrime).toBe(true);
});
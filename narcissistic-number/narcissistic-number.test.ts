import { assertStrictEquals } from 'https://deno.land/std@0.148.0/testing/asserts.ts';
import { narcisisticNumber } from './narcissistic-number.ts';
Deno.test('valid narcissistic number', () => {
  const numbers = [7, 153, 1634];
  numbers.forEach((num) => {
    console.log('num ::>', num);
    assertStrictEquals(narcisisticNumber(num), true, `${num} is narcissistic`);
  });
});

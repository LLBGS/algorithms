import { assertEquals } from 'https://deno.land/std@0.148.0/testing/asserts.ts';
import { verifyTriangle } from './verify-if-is-triangle.ts';

Deno.test('Should be return true when the triangle exists', () => {
  const mocks = [
    {
      a: 2,
      b: 2,
      c: 1,
    },
    {
      a: 8,
      b: 3,
      c: 10,
    },
    {
      a: 4,
      b: 8,
      c: 7,
    },
  ];
  mocks.forEach((mock) => {
    assertEquals(verifyTriangle(mock.a, mock.b, mock.c), true);
  });
});

Deno.test('Should be return false when the triangle not exists', () => {
  const mocks = [
    {
      a: -1,
      b: 9,
      c: 9,
    },
    {
      a: 0,
      b: 2,
      c: 9,
    },
    {
      a: 3,
      b: 1,
      c: 10,
    },
  ];
  mocks.forEach((mock) => {
    assertEquals(verifyTriangle(mock.a, mock.b, mock.c), false);
  });
});

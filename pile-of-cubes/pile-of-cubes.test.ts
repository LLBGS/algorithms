import { assertEquals } from 'https://deno.land/std@0.148.0/testing/asserts.ts';
import { buildPileOfCube } from './pile-of-cubes.ts';
Deno.test('Test pine of cubes', () => {
  const mocks = [
    { value: 4183059834009, result: 2022 },
    { value: 24723578342962, result: -1 },
    { value: 135440716410000, result: 4824 },
    { value: 40539911473216, result: 3568 },
  ];
  mocks.forEach((mock) => {
    assertEquals(buildPileOfCube(mock.value), mock.result);
  });
});

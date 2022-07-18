export function buildPileOfCube(m: number): number {
  let n = 0;
  let result = 0;
  while (result < m) {
    n += 1;
    result += Math.pow(n, 3);
  }
  return result !== m ? -1 : n;
}

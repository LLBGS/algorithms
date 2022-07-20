export const verifyTriangle = (a: number, b: number, c: number) => {
  if (a < 1 || b < 1 || c < 1) return false;
  const triangleArr = [a, b, c].sort((a, b) => a - b);
  const sum = triangleArr[0] + triangleArr[1];
  return triangleArr[2] < sum;
};

export function narcisisticNumber(num: number): boolean {
  const len = num.toString().length;
  let result = 0;
  num
    .toString()
    .split('')
    .forEach((unit) => {
      result += Math.pow(Number(unit), len);
    });
  return result === num;
}

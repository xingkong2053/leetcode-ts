/**
 *
 * @param {array<number>} nums
 * @param {*} target
 * @returns
 */
 export function twoSum(nums: number[], target: number) {
  const sorted = [...nums].sort((a, b) => a - b);
  let p = 0,
    q = nums.length - 1,
    result: number;
  while (p < q) {
    result = sorted[p] + sorted[q];
    if (result > target) {
      q--;
    } else if (result < target) {
      p++;
    } else {
      return [
        nums.findIndex((n) => n === sorted[p]),
        nums.findIndex((n) => n === sorted[q]),
      ];
    }
  }
  return [-1, -1];
}
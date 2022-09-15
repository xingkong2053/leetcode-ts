export function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) {
    return [];
  }
  const sorted = nums.sort((a, b) => a - b);
  let p = 0,
    q = 0,
    sum = 0;
  const result: number[][] = [];
  for (let i = 0; i < sorted.length; i++) {
    p = i + 1;
    q = sorted.length - 1;
    while (p < q) {
      sum = sorted[i] + sorted[p] + sorted[q];
      if (sum === 0) {
        result.push([i, p, q]);
      } else if (sum > 0) {
        q--;
      } else {
        p++;
      }
    }
  }
  return result;
}
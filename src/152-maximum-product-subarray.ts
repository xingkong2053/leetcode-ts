/*
152. 乘积最大子数组
给你一个整数数组 nums ，请你找出数组中乘积最大的非空连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

测试用例的答案是一个 32-位 整数。

子数组 是数组的连续子序列。

 

示例 1:

输入: nums = [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。
示例 2:

输入: nums = [-2,0,-1]
输出: 0
解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
 

提示:

1 <= nums.length <= 2 * 104
-10 <= nums[i] <= 10
nums 的任何前缀或后缀的乘积都 保证 是一个 32-位 整数
*/
export function maxProduct(nums: number[]): number {
  let max = nums[0];
  const max_dp: number[] = [nums[0]];
  const min_dp: number[] = [nums[0]];
  for(let i=1; i < nums.length; i++){
    // 一个足够小的负数和另一个负数相乘可能为最大的数
    max_dp[i] = Math.max(max_dp[i-1] * nums[i], min_dp[i-1] * nums[i], nums[i]);
    min_dp[i] = Math.min(max_dp[i-1] * nums[i], min_dp[i-1] * nums[i], nums[i]);
    max = Math.max(max, max_dp[i]);
  }
  return max;
};
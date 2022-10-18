/* 
53. 最大子数组和
给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

子数组 是数组中的一个连续部分。

 

示例 1：

输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
示例 2：

输入：nums = [1]
输出：1
示例 3：

输入：nums = [5,4,-1,7,8]
输出：23
 

提示：

1 <= nums.length <= 105
-104 <= nums[i] <= 104
 

进阶：如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的 分治法 求解。
*/
export function maxSubArray(nums: number[]): number {
  // return dynamicProgramming(nums);
  return divide(nums, 0, nums.length - 1).mSum;
};

function dynamicProgramming(nums: number[]): number{
  // 动态规划
  const n = nums.length;
  let max = nums[0];
  for(let i = 1; i < n; i++){
    // f(i) = max{ f(i-1) + nums[i], nums[i] }
    nums[i] += Math.max(0, nums[i-1]);
    max = Math.max(max, nums[i]);
  }
  return max;
}

interface Status{
  lSum: number,
  rSum: number,
  mSum: number,
  iSum: number
}

// 分治算法, 线段树思想
// https://leetcode.cn/problems/maximum-subarray/solution/zui-da-zi-xu-he-by-leetcode-solution/
function divide(nums: number[], l: number, r: number): Status{
  if(l === r) return { lSum: nums[l], rSum: nums[l], mSum: nums[l], iSum: nums[l]};
  const mid = (l+r)>>1;
  const lStatus = divide(nums, l, mid);
  const rStatus = divide(nums, mid+1, r);
  return {
    lSum: Math.max(lStatus.lSum, lStatus.iSum + lStatus.rSum), 
    rSum: Math.max(rStatus.rSum, rStatus.iSum + lStatus.lSum), 
    mSum: Math.max(lStatus.mSum, rStatus.mSum, lStatus.rSum + rStatus.lSum), 
    iSum: lStatus.iSum + rStatus.iSum,
  }
}



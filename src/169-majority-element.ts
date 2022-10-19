/*
169. 多数元素
给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

 

示例 1：

输入：nums = [3,2,3]
输出：3
示例 2：

输入：nums = [2,2,1,1,1,2,2]
输出：2
 

提示：
n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
*/
export function majorityElement(nums: number[]): number {
  // 摩尔投票法
  // 多数元素和其他元素两两相抵消，最后多数元素的个数 >= 1
  const len = nums.length;
  let candidate = nums[0], count = 1;
  for(let i = 1; i < len; i++){
    if(nums[i] === candidate) count ++ ;
    else count --;
    if(!count){ // count == 0
      candidate = nums[i];
      count = 1;
    }
  }
  return candidate;
};
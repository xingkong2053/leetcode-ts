/*
215. 数组中的第K个最大元素
中等
2K
相关企业
给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。

 

示例 1:

输入: [3,2,1,5,6,4], k = 2
输出: 5
示例 2:

输入: [3,2,3,1,2,4,5,5,6], k = 4
输出: 4
 

提示：

1 <= k <= nums.length <= 105
-104 <= nums[i] <= 104
*/
function findKthLargest(nums: number[], k: number): number {
  const len = nums.length;
  const swap = (i: number, j: number) => {
    if(i === j) return;
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  const randomPartition = (left: number, right: number)=> {
    if(right <= left) return;
    const pivot =  left + Math.round(Math.random() * (right - left));
    swap(pivot, right);
    let p = left - 1;
    for(let i = left; i< right; i++){
      if(nums[i] <= nums[right]){
        swap(++p, i);
      }
    }
    swap(++p, right);
    if(p > len - k){
      randomPartition(left, p - 1);
    }
    if(p < len - k){
      randomPartition(p + 1, right);
    }
  }
  randomPartition(0, len-1);
  return nums[len - k]; 
};
/*
31. 下一个排列
整数数组的一个 排列  就是将其所有成员以序列或线性顺序排列。

例如，arr = [1,2,3] ，以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1] 。
整数数组的 下一个排列 是指其整数的下一个字典序更大的排列。更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，
那么数组的 下一个排列 就是在这个有序容器中排在它后面的那个排列。
如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。

例如，arr = [1,2,3] 的下一个排列是 [1,3,2] 。
类似地，arr = [2,3,1] 的下一个排列是 [3,1,2] 。
而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。
给你一个整数数组 nums ，找出 nums 的下一个排列。

必须 原地 修改，只允许使用额外常数空间。

 

示例 1：

输入：nums = [1,2,3]
输出：[1,3,2]
示例 2：

输入：nums = [3,2,1]
输出：[1,2,3]
示例 3：

输入：nums = [1,1,5]
输出：[1,5,1]
 

提示：

1 <= nums.length <= 100
0 <= nums[i] <= 100
*/
/**
 Do not return anything, modify nums in-place instead.
 */
export function nextPermutation(nums: number[]): void {
  doubleScan(nums);
};

// 两边扫描
function doubleScan(nums: number[]){
  let len = nums.length;
  if(len < 3){
    [nums[0], nums[len -1]] = [nums[len-1], nums[0]]
    return;
  }
  // 从后往前找到第一个不按逆序排列的数的下标
  // 则该下标后面的数全是逆序排列的
  //      ▼
  //  4 5 2 6 3 1
  let i = len - 2;
  while(i >= 0){
    if(nums[i] < nums[i+1]){break;}
    i--;
  }
  if(i >= 0) {
    //在逆序数中找到大于nums[i]的最小值下标
    //         ▼
    // 4 5 2 6 3 1
    let j = len - 1;
    while(j >= 0){
      if(nums[j] > nums[i]){break;}
      j--;
    }
    swap(nums, i, j);
  }
  reverse(nums, i+1);
}
function reverse(nums: number[], l?: number, r?: number){
  if(!l) l = 0;
  if(!r) r = nums.length -1;
  let mid = Math.floor((l + r)/2)
  for(let i = 0; i <= mid - l; i++){
    swap(nums, l + i, r - i);
  }
}
function swap(nums: number[], i: number, j: number){
  [nums[i], nums[j]] = [nums[j], nums[i]]
}
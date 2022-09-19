/*
46. 全排列
给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

 

示例 1：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
示例 2：

输入：nums = [0,1]
输出：[[0,1],[1,0]]
示例 3：

输入：nums = [1]
输出：[[1]]
 

提示：

1 <= nums.length <= 6
-10 <= nums[i] <= 10
nums 中的所有整数 互不相同

*/
export function permute(nums: number[]): number[][] {
  // 回溯
  let result: number[][] = [];
  backtrace(nums, [], 0, item=>result.push(item));
  return result;
};
function backtrace(nums: number[], cur: number[], p: number, cb: (item: number[])=>void){
  let n = nums.length;
  if(p === n){ cb(cur);return; }
  for(let i = 0; i< n; i++){
    if(cur.includes(nums[i])) continue;
    backtrace(nums, [...cur, nums[i]], p+1, cb);
  }
}
/**
 * 55. 跳跃游戏
给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个下标。

 

示例 1：

输入：nums = [2,3,1,1,4]
输出：true
解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
示例 2：

输入：nums = [3,2,1,0,4]
输出：false
解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。
 

提示：

1 <= nums.length <= 3 * 104
0 <= nums[i] <= 105
 */
// 回溯 - 超出时间限制
export function canJump(nums: number[]): boolean {
  return canJump0(nums);
};

// 贪心
function canJump0(nums: number[]): boolean{
  const len = nums.length;
  if(len === 1) return true;
  let max = 0;
  for(let i = 0; i< len - 1; i++){
    if(i <= max){ // 
      max = Math.max(max, i + nums[i]);
      if(max >= len - 1){
        return true;
      }
    }
  }
  return false;
}

// 动态规划
function dynamicPlanning(nums: number[]): boolean{
  const len = nums.length, dp: boolean[] = new Array(len);
  dp.fill(false);
  dp[0] = true;
  for(let i = 1; i< len; i++){
    for(let j = 0; j< i; j++){
      if(dp[j] && nums[j] >= i - j){
        dp[i] = true;
        break;
      } 
    }
  }
  return dp[len -1];
}

function backtrace0(nums: number[]): boolean{
  let len = nums.length;
  function backtrace(idx: number): boolean{
    if(idx >= len) return false;
    if(idx === len - 1) return true;
    else {
      let cur = nums[idx];
      for(let i = 1; i<= cur; i++){
        if(backtrace(idx + i)){
          return true;
        }
      }
      return false;
    }
  }
  return backtrace(0);
}
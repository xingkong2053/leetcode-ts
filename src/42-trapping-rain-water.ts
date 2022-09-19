/*
42. 接雨水
给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

 

示例 1：



输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
输出：6
解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
示例 2：

输入：height = [4,2,0,3,2,5]
输出：9
 

提示：

n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105
*/
export function trap(height: number[]): number {
  return dynamicPlaning(height);
};

function dynamicPlaning(height: number[]){
  const len = height.length;
  const sum = (nums: number[]) => nums.reduce((s, n)=>s+n,0);
  //计算总体积
  let vTotal = 0, 
    ltr: number[] = new Array(len), 
    rtl: number[] = new Array(len),
    // 充满雨水之后的数组
    rain: number[] = new Array(len);
  ltr[0] = height[0]; 
  for(let i = 1; i< len; i++){  
    // tmp[i] = 下标i左侧数组最大值
    ltr[i] = Math.max(height[i], height[i-1], ltr[i-1]);
  }
  rtl[len - 1] = height[len -1];
  for(let i = len -2; i>=0; i--){
    rtl[i] = Math.max(height[i], height[i+1], rtl[i+1]);
  }
  for(let i = 0; i< len; i++){
    rain[i] = Math.min(ltr[i], rtl[i]);
  }
  return sum(rain) - sum(height);
}
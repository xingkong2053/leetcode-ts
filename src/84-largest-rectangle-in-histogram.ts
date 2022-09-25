/**
 * 84. 柱状图中最大的矩形
给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

求在该柱状图中，能够勾勒出来的矩形的最大面积。

 

示例 1:



输入：heights = [2,1,5,6,2,3]
输出：10
解释：最大的矩形为图中红色区域，面积为 10
示例 2：



输入： heights = [2,4]
输出： 4
 

提示：

1 <= heights.length <=105
0 <= heights[i] <= 104
 */
export function largestRectangleArea(heights: number[]): number {
  return monoStack(heights);
};

// 中心拓展法
// 使用单调栈求一个位置向左向右拓展的极限
function monoStack(heights: number[]): number{
  let len = heights.length;
  let stack: [number, number][] = [];
  const top = ()=>stack[stack.length-1];
  // 左
  const leftMax: number[] = new Array(len); // 向左延申最远下标
  leftMax[0] = -1;
  stack.push([heights[0], 0]);
  for(let i= 1; i< len; i++){
    while(stack.length && heights[i] <= top()[0]){
      stack.pop();
    }
    leftMax[i] = stack.length ? top()[1]: -1;
    stack.push([heights[i], i]);
  }
  stack = [];
  // 右
  const rightMax: number[] = new Array(len);
  rightMax[len-1] = len;
  stack.push([heights[len -1], len-1]);
  for(let i= len-2; i >= 0; i--){
    while(stack.length && heights[i] <= top()[0]){
      stack.pop();
    }
    rightMax[i] = stack.length ? top()[1]: len;
    stack.push([heights[i], i]);
  }
  // 综合
  let max = heights[0];
  for(let i= 0; i< len; i++){
    max = Math.max(max, heights[i] * (rightMax[i] - leftMax[i] -1));
  }
  return max
}

// 暴力解法, O(n^2) 超出时间限制
function simple(heights: number[]): number {
  const len = heights.length;
  let max = heights[0];
  for(let i = 0; i< len; i++){
    let minWidth = heights[i];
    for(let j = i; j>= 0; j--){
      minWidth = Math.min(minWidth, heights[j]);
      max = Math.max(max, minWidth * (i - j +1));
    }
  }
  return max;
};
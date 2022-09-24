/**
 * https://leetcode.cn/problems/unique-paths/?favorite=2cktkvj
 62. 不同路径
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

问总共有多少条不同的路径？

 

示例 1：


输入：m = 3, n = 7
输出：28
示例 2：

输入：m = 3, n = 2
输出：3
解释：
从左上角开始，总共有 3 条路径可以到达右下角。
1. 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右
3. 向下 -> 向右 -> 向下
示例 3：

输入：m = 7, n = 3
输出：28
示例 4：

输入：m = 3, n = 3
输出：6
 

提示：

1 <= m, n <= 100
题目数据保证答案小于等于 2 * 109
 */
export function uniquePaths(m: number, n: number): number {
  return dynamicPlanning1(m, n);
};

// 动态规划, 双数组
function dynamicPlanning1(m: number, n: number): number{
  let row = m, col = n;
  if(m > n){
    row = n;
    col = m;
  }
  let dp: number[] = new Array(row)
  dp.fill(1);
  while(--col > 0){
    dp[0] = 1;
    for(let i=1; i<row; i++){
      dp[i] = dp[i - 1] + dp[i];
    }
  }
  return dp[row - 1];
}

// 动态规划: dp[i,j] = dp[i-1, j] + dp[i, j-1]
function dynamicPlanning0(m: number, n: number): number{
  const dp: number[][] = new Array(m);
  for(let i = 0; i< m; i++){
    dp[i] = new Array(n);
    dp[i][0] = 1;
  }
  for(let i = 0; i< n; i++){
    dp[0][i] = 1;
  }
  for(let i = 1; i< m; i++){
    for(let j = 1; j< n; j++){
      dp[i][j] = dp[i-1][j] + dp[i][j-1]
    }
  }
  return dp[m-1][n-1];
}


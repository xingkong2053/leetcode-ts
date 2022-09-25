/**
 * 85. 最大矩形
给定一个仅包含 0 和 1 、大小为 rows x cols 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。

 

示例 1：


输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
输出：6
解释：最大矩形如上图所示。
示例 2：

输入：matrix = []
输出：0
示例 3：

输入：matrix = [["0"]]
输出：0
示例 4：

输入：matrix = [["1"]]
输出：1
示例 5：

输入：matrix = [["0","0"]]
输出：0
 

提示：

rows == matrix.length
cols == matrix[0].length
1 <= row, cols <= 200
matrix[i][j] 为 '0' 或 '1'
 */
export function maximalRectangle(matrix: string[][]): number {
  return dynamicPlanning(matrix);
};

// 通过dp记录每一个点位左侧连续1的数量
// 遍历所有点位, 求以该点位为右下角矩形的面积
// 动态规划, 贪心
function dynamicPlanning(matrix: string[][]): number{
  const row = matrix.length, col = matrix[0].length;
  // dp[i][j] i,j 下标对应的点中左边连续1的数量
  const dp: number[][] = new Array(row);
  for(let i= 0; i<row; i++){
    dp[i] = new Array(col);
    dp[i][0] = matrix[i][0] === '1'? 1: 0;
    for(let j= 1; j<col; j++){
      dp[i][j] = matrix[i][j] === '1'? dp[i][j-1]+1: 0;
    }
  }
  let max = dp[0][0];
  for(let i =0; i< row; i++){
    for(let j =0; j< col; j++){
      // TODO 使用单调栈和中心拓展法求解, 参考84题
      let width = dp[i][j];
      for(let k = i; k>=0; k--){
        // width = dp[i][j],dp[i-1][j]...dp[k][j] 最小值
        width = Math.min(width, dp[k][j]);
        max = Math.max(max, width * (i-k+1))
      }
    }
  }
  return max;
}
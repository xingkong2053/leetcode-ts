/* 
48. 旋转图像
给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。

你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。

 

示例 1：


输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[[7,4,1],[8,5,2],[9,6,3]]
示例 2：


输入：matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
输出：[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 

提示：

n == matrix.length == matrix[i].length
1 <= n <= 20
-1000 <= matrix[i][j] <= 1000
*/
/**
 Do not return anything, modify matrix in-place instead.
 */
/* 
  [来源](https://leetcode.cn/problems/rotate-image/comments/)
  情况一：顺时针转 90 度：先转置再左右镜像
  1 2 3               7 4 1
  4 5 6               8 5 2
  7 8 9               9 6 3
  情况二：顺时针转 180 度:先上下镜像，再左右镜像（先左右再上下也可）
  1 2 3               9 8 7
  4 5 6               6 5 4
  7 8 9               3 2 1
  情况三：顺时针转 270 度：先转置再上下镜像
  1 2 3              3 6 9
  4 5 6              2 5 8
  7 8 9              1 4 7
*/
export function rotate(matrix: number[][]): void {
  rotate1(matrix);
};

function simple(matrix: number[][]): void{
  const swap = (coor0: [number, number], coor1: [number, number]) => {
    [matrix[coor0[0]][coor0[1]], matrix[coor1[0]][coor1[1]]] = [matrix[coor1[0]][coor1[1]] ,matrix[coor0[0]][coor0[1]]]
  } 
  // 先按对角线交换, 再垂直交换
  let len = matrix.length;
  for(let i = 0; i < len-1; i++){
    for(let j=0; j < len - i- 1; j++){
      swap([i, j], [len - j -1, len - i - 1])
    }
  }
  for(let i = 0; i < Math.floor(len/2); i++){
    for(let j=0; j < len; j++){
      swap([i, j], [len -i -1, j])
    }
  }
}

// 四数交换
function rotate1(matrix: number[][]): void {
  let n = matrix.length;
  const fourNumSwap = (x: number, y: number) =>{
    const c0 = [x, y],
      c1 = [y, n-x-1],
      c2 = [n-x-1, n-y-1],
      c3 = [n-y-1, x];
    [
      matrix[c0[0]][c0[1]],
      matrix[c1[0]][c1[1]],
      matrix[c2[0]][c2[1]],
      matrix[c3[0]][c3[1]],
    ] = [
      matrix[c3[0]][c3[1]],
      matrix[c0[0]][c0[1]],
      matrix[c1[0]][c1[1]],
      matrix[c2[0]][c2[1]],
    ];
  }
  for(let i =0; i< Math.floor(n/2); i++){
    for(let j = i; j< n -1 -i ;j++){
      fourNumSwap(i, j)
    }
  }
}
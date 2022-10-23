/*
200. 岛屿数量
给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

此外，你可以假设该网格的四条边均被水包围。

 

示例 1：

输入：grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
输出：1
示例 2：

输入：grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
输出：3
 

提示：

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] 的值为 '0' 或 '1'
*/
export function numIslands(grid: string[][]): number {
  return iteration(grid);
};

function recursive(grid: string[][]): number {
  const row = grid.length,
    col = grid[0].length;
  function dfs(r: number, c: number){ 
    if(r < 0 || c < 0 || r === row || c === col) return;
    if(['0', '2'].includes(grid[r][c])) return;
    grid[r][c] = '2'  // 已遍历标识
    dfs(r, c + 1);
    dfs(r, c - 1);
    dfs(r + 1, c);
    dfs(r - 1, c);
  }
  let cnt = 0;
  for(let i = 0; i < row; i++){
    for(let j = 0; j < col; j++){
      if(grid[i][j] === '1') {
        dfs(i, j);
        cnt ++ ;
      };
    }
  }
  return cnt;
}

function iteration(grid: string[][]): number {
  const row = grid.length,
    col = grid[0].length,
    stack: [number, number][] = [];
  let cnt = 0;
  for(let i = 0; i< row; i++){
    for(let j = 0; j< col; j++){
      if(grid[i][j] === '1'){
        cnt ++;
        stack.push([i, j]);
        while(stack.length){
          const [r, c] = stack.pop() as [number, number];
          if(r < 0 || c < 0 || r === row || c === col) continue;
          if(['0', '2'].includes(grid[r][c])) continue;
          grid[r][c] = '2';
          stack.push([r, c + 1], [r, c-1], [r + 1, c], [r - 1, c]);
        }
      }
    }
  }
  return cnt;
}
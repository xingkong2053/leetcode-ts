/*
212. 单词搜索 II
给定一个 m x n 二维字符网格 board 和一个单词（字符串）列表 words， 返回所有二维网格上的单词 。

单词必须按照字母顺序，通过 相邻的单元格 内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母在一个单词中不允许被重复使用。

 

示例 1：


输入：board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
输出：["eat","oath"]
示例 2：


输入：board = [["a","b"],["c","d"]], words = ["abcb"]
输出：[]
 

提示：

m == board.length
n == board[i].length
1 <= m, n <= 12
board[i][j] 是一个小写英文字母
1 <= words.length <= 3 * 104
1 <= words[i].length <= 10
words[i] 由小写英文字母组成
words 中的所有字符串互不相同
*/
export function findWords(board: string[][], words: string[]): string[] {
  const m = board.length,
    n = board[0].length;
  const res: string[] = [];
  let trace: [number, number][] = [];
  function dfs(word: string, len: number, idx: number, r: number, c: number, d: string){
    if(idx > len || r < 0 || r>=m || c < 0 || c>=n) return;
    if(trace.findIndex(item => item[0] === r && item[1] === c)!==-1) return;
    if(board[r][c] !== word[idx]) return;
    if(idx === len - 1){
      res.push(word);
      return;
    } 
    trace.push([r , c]);
    d !== 'r-' && dfs(word, len, idx + 1, r+1, c, 'r+');
    d !== 'r+' && dfs(word, len, idx + 1, r-1, c, 'r-');
    d !== 'c-' && dfs(word, len, idx + 1, r, c+1, 'c+');
    d !== 'c+' && dfs(word, len, idx + 1, r, c-1, 'c-');
  }
  for(let word of words){
    trace = [];
    for(let i = 0; i < m; i++ ){
      if(res.includes(word)) break;
      for(let j = 0; j < n; j++){
        if(res.includes(word)) break;
        dfs(word, word.length, 0, i, j, '');
      }
    }
  }
  return res;
};
/**
22. 括号生成
数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

 

示例 1：

输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]
示例 2：

输入：n = 1
输出：["()"]
 

提示：

1 <= n <= 8
 */
export function generateParenthesis(n: number): string[] {
  return backtrace(n);
};

// 暴力法
// 1. 生成所有可能的序列
// 2. 判断序列的有效性
function simple(n: number){
  // 验证是否为有效括号
  function isValid(s: string): boolean{
    let cnt = 0
    for (const c of s) {
      if(c === '('){
        cnt ++;
      } else { // )
        cnt --;
      }
      if(cnt < 0) return false;
    }
    return cnt === 0;
  }

  // 递归生成所有可能
  function genRecursive(arr: string[], s: string, n: number){
    if(n == 0) {
      if(isValid(s))
        arr.push(s);
    } else {
      genRecursive(arr, s + '(', n-1);
      genRecursive(arr, s + ')', n-1);
    }
  }

  let result: string[] = [];
  genRecursive(result, '', n * 2);
  return result;
}

// 回溯法: 在递归的过程中判断左右括号的数量
// --- 终止条件 ---
// 左括号数量小于n
// 右括号数量小于左括号数量
function backtrace(n: number){
  // cntL, cntR, 左右括号数量
  function genRecursive(s: string, n: number, cntL: number, cntR: number, cb: (s: string)=>void){
    if(cntL < n){
      genRecursive(s + '(', n, cntL + 1, cntR, cb);
    }
    if(cntR < cntL){
      genRecursive(s + ')', n, cntL, cntR + 1, cb);
    }
    if(cntL === n && cntR === n) cb(s);
  }
  let result : string[] = []
  genRecursive('', n, 0, 0, s=>result.push(s));
  return result;
}


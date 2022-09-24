/**
 * 39. 组合总和
给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，并以列表形式返回。你可以按 任意顺序 返回这些组合。

candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。 

对于给定的输入，保证和为 target 的不同组合数少于 150 个。

 

示例 1：

输入：candidates = [2,3,6,7], target = 7
输出：[[2,2,3],[7]]
解释：
2 和 3 可以形成一组候选，2 + 2 + 3 = 7 。注意 2 可以使用多次。
7 也是一个候选， 7 = 7 。
仅有这两种组合。
示例 2：

输入: candidates = [2,3,5], target = 8
输出: [[2,2,2,2],[2,3,3],[3,5]]
示例 3：

输入: candidates = [2], target = 1
输出: []
 

提示：

1 <= candidates.length <= 30
1 <= candidates[i] <= 200
candidate 中的每个元素都 互不相同
1 <= target <= 500
 */
export function combinationSum(candidates: number[], target: number): number[][] {
  const len = candidates.length;
  candidates.sort((a,b)=>a-b);
  let result: number[][] = [];
  // backtrace([], 0, { candidates, target, result });
  backtrace2(candidates, [], result, 0, target);
  return result;
};

interface Env{
  candidates: number[],
  target: number,
  result: number[][]
}

// startIdx: 保持temp元素位置有序, 避免重复情况
function backtrace(temp: number[], startIdx: number, env: Env){
  const sum = (arr: number[]) => arr.reduce((s, i)=>s+i, 0);
  const s = sum(temp);
  if(s === env.target){
    env.result.push([...temp]);
  } else if(s < env.target){
    for (let i = startIdx, len = env.candidates.length; i < len; i++) {
      backtrace([...temp, env.candidates[i]], i, env);    
    }
  }
}

// 
function backtrace2(candidates: number[], combine: number[], result: number[][], idx: number, target: number){
  if(idx === candidates.length) return;
  if(0 === target){
    result.push([...combine]);
    return;
  }
  // 跳过该数, 从下一个数开始
  backtrace2(candidates, combine, result, idx + 1, target);
  let cur = candidates[idx];
  if(target >= cur){
    backtrace2(candidates, [...combine, cur], result, idx, target - cur);
  }
}
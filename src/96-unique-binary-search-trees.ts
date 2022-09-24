/**
 * 96. 不同的二叉搜索树
给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数。

 

示例 1：


输入：n = 3
输出：5
示例 2：

输入：n = 1
输出：1
 

提示：

1 <= n <= 19
 */
export function numTrees(n: number): number {
  // 动态规划
  // dp[i] 长度为 i 二叉搜索树种数
  // dp[i] 在以下标 j (0 <= j < i) 为父节点的情况下, 有 dp[j] * dp[i-1-j] 种情况
  const dp: number[] = new Array(n + 1);
  dp.fill(0);
  dp[0] = dp[1] = 1;
  for(let i = 2; i<= n; i++){
    for(let j = 0; j< i; j++){
      // 以下标 j 为顶点的二叉搜索数数量
      dp[i] += dp[j] * dp[i - j - 1]
    }
  }
  return dp[n];
};
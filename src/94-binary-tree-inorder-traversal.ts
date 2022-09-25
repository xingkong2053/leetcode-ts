/**
 * 94. 二叉树的中序遍历
给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。

 

示例 1：


输入：root = [1,null,2,3]
输出：[1,3,2]
示例 2：

输入：root = []
输出：[]
示例 3：

输入：root = [1]
输出：[1]
 

提示：

树中节点数目在范围 [0, 100] 内
-100 <= Node.val <= 100
 */
import { TreeNode } from "data-stucture";
export function inorderTraversal(root: TreeNode | null): number[] {
  return iteration(root);
};

// 迭代
function iteration(root: TreeNode | null): number[]{
  if(!root) return [];
  const result: number[] = [], stack: TreeNode[] = [];
  while(root || stack.length){
    while(root){
      stack.push(root);
      root = root.left;
    }
    root = stack.pop() as TreeNode;
    result.push(root.val);
    root = root.right;
  }
  return result;
} 


// 递归
function recursive(root: TreeNode | null): number[]{
  const result: number[] = [];
  function walk(node: TreeNode | null){
    if(node === null) return;
    walk(node.left);
    result.push(node.val);
    walk(node.right);
  }
  walk(root);
  return result;
}
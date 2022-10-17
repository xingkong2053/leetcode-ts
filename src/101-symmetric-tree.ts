/**
 * 101. 对称二叉树
给你一个二叉树的根节点 root ， 检查它是否轴对称。

 

示例 1：


输入：root = [1,2,2,3,4,4,3]
输出：true
示例 2：


输入：root = [1,2,2,null,3,null,3]
输出：false
 

提示：

树中节点数目在范围 [1, 1000] 内
-100 <= Node.val <= 100
 */
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import { TreeNode } from "data-structure";

export function isSymmetric(root: TreeNode | null): boolean {
  root = root as TreeNode;
  // return recursive(root.left, root.right);
  return iteration(root);
};

function recursive(nodeL: TreeNode| null, nodeR: TreeNode | null): boolean{
  if(!nodeL && !nodeR) return true;
  if(!nodeL || !nodeR) return false;
  return nodeL.val === nodeR.val 
    && recursive(nodeL.left, nodeR.right)
    && recursive(nodeL.right, nodeR.left);
}

function iteration(root: TreeNode): boolean{
  const queue: (TreeNode | null)[] = [];
  queue.push(root.left);
  queue.push(root.right);
  while(queue.length >= 2){
    let o1 = queue.shift();
    let o2 = queue.shift();
    if(!o1 && !o2){ continue; }
    if(!o1 || !o2){ return false; }
    if(o1.val !== o2.val) return false;
    queue.push(o1.left);
    queue.push(o2.right);
    queue.push(o1.right);
    queue.push(o2.left);
  }
  return true;
}
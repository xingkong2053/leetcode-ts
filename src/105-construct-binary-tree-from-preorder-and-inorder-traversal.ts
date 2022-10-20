/*
105. 从前序与中序遍历序列构造二叉树
给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。

 

示例 1:


输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
输出: [3,9,20,null,null,15,7]
示例 2:

输入: preorder = [-1], inorder = [-1]
输出: [-1]
 

提示:

1 <= preorder.length <= 3000
inorder.length == preorder.length
-3000 <= preorder[i], inorder[i] <= 3000
preorder 和 inorder 均 无重复 元素
inorder 均出现在 preorder
preorder 保证 为二叉树的前序遍历序列
inorder 保证 为二叉树的中序遍历序列
*/
import { TreeNode } from "data-structure";
export function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  let n = preorder.length;
  const m: Record<number, number> = {};
  let i = 0;
  while(i<n){m[inorder[i]] = i++;}
  const build = (pl: number, pr: number, il: number, ir: number) => {
    if(pl === pr) return null;
    const node = new TreeNode(preorder[pl]);
    const im = m[preorder[pl]];
    node.left = build(pl + 1, im - il + pl +1, il, im);
    node.right = build(im - il + pl +1, pr, im + 1, ir);
    return node;
  }
  return build(0, n, 0, n);
};
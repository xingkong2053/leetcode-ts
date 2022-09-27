import { TreeNode } from "data-structure";
import { levelOrder } from "102-binary-tree-level-order-traversal";

test('1', ()=>{
  const root = TreeNode.fromArray([3,9,20,null,null,15,7]);
  expect(levelOrder(root)).toEqual([[3],[9,20],[15,7]]);
})

test('2', ()=>{
  const root = TreeNode.fromArray([1]);
  expect(levelOrder(root)).toEqual([[1]]);
})

test('3', ()=>{
  const root = TreeNode.fromArray([]);
  expect(levelOrder(root)).toEqual([]);
})
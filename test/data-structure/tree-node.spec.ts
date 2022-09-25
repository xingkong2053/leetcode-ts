import { TreeNode } from "data-structure";

test('empty', ()=>{
  expect(TreeNode.fromArray([])).toEqual(null);
  expect(TreeNode.fromArray([null])).toEqual(null);
})

test('one number', ()=>{
  const arr = [1]
  const node = TreeNode.fromArray(arr)
  expect(node).toEqual(new TreeNode(1));
  expect(node?.toArray()).toEqual(arr);
})

test('complete binary tree', ()=>{
  const arr = [2,1,3,4]
  const node = TreeNode.fromArray(arr)
  expect(node?.toArray()).toEqual(arr);
})

test('other', ()=>{
  const arr = [5,1,4,null,null,3,6]
  const node = TreeNode.fromArray(arr)
  expect(node?.toArray()).toEqual(arr);
})
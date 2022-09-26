import { TreeNode } from "data-structure";
import { isValidBST } from "98-validate-binary-search-tree";

test('1', ()=>{
  const root = TreeNode.fromArray([2,1,3]);
  expect(isValidBST(root)).toEqual(true);
})

test('2', ()=>{
  const root = TreeNode.fromArray([5,1,4,null,null,3,6]);
  expect(isValidBST(root)).toEqual(false);
})

test('3', ()=>{
  const root = TreeNode.fromArray([5,3,null,null,6]);
  expect(isValidBST(root)).toEqual(false);
})

test('4', ()=>{
  const root = TreeNode.fromArray([1]);
  expect(isValidBST(root)).toEqual(true);
})
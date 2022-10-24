import { BinarySearchTree } from "data-structure";

test('insert and inorder traverse', ()=>{
  const arr = [5, 2, 8, 3, 6, 1, 4, 7];
  const bst = new BinarySearchTree();
  bst.insertAll(arr);
  const res: number[] = [];
  bst.inOrderTraverse(key=>res.push(key));
  expect(res).toEqual([1,2,3,4,5,6,7,8]);
})

test('preorder', ()=>{
  const bst = new BinarySearchTree();
  bst.insertAll([11,7,15,5,9,13,20,3,6,8,10,12,14,18,25]);
  const res: number[] = [];
  bst.preOrderTraverse(k=>res.push(k));
  expect(res).toEqual([11,7,5,3,6,9,8,10,15,13,12,14,20,18,25]);
})
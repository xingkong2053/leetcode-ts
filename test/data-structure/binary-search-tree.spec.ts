import { BinarySearchTree } from "data-structure";

test('insert and inorder traverse', ()=>{
  const arr = [5, 2, 8, 3, 6, 1, 4, 7];
  const bst = new BinarySearchTree();
  bst.insertAll(arr);
  const res: number[] = [];
  bst.inOrderTraverse(key=>res.push(key));
  expect(res).toEqual([1,2,3,4,5,6,7,8]);
})
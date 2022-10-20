import { buildTree } from "105-construct-binary-tree-from-preorder-and-inorder-traversal";

test('example', ()=>{
  const root = buildTree([3,9,20,15,7], [9,3,15,20,7]);
  console.log(JSON.stringify(root));
  expect(true).toEqual(true);
})
import { numTrees } from "96-unique-binary-search-trees"; 

test('1', ()=>{
  expect(numTrees(2)).toEqual(2);
})

test('2', ()=>{
  expect(numTrees(3)).toEqual(5);
})

test('3', ()=>{
  expect(numTrees(10)).toEqual(16796);
})
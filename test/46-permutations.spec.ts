import { permute } from "../src/46-permutations"

test('1', ()=>{
  expect(permute([1,2,3])).toEqual([[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]);
})

test('2', ()=>{
  expect(permute([0, 1])).toEqual([[0, 1], [1, 0]]);
})
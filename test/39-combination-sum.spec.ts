import { combinationSum } from "../src/39-combination-sum";

test('1', ()=>{
  expect(combinationSum([2,3,6,7], 7)).toEqual([[2,2,3],[7]])
})

test('2', ()=>{
  expect(combinationSum([2,3,5], 8)).toEqual([[2,2,2,2],[2,3,3],[3,5]])
})
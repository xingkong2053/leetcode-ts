import { maximalRectangle } from "85-maximal-rectangle";

test('1', ()=>{
  expect(maximalRectangle([
    ["1","0","1","0","0"],
    ["1","0","1","1","1"],
    ["1","1","1","1","1"],
    ["1","0","0","1","0"]])).toEqual(6);
})

test('2', ()=>{
  expect(maximalRectangle([['1']])).toEqual(1);
})
import { numIslands } from "200-number-of-islands";

test('1', ()=>{
  expect(numIslands(
    [["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]]
  )).toEqual(1);
})
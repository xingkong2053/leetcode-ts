import { uniquePaths } from "62-unique-paths";

test('1', ()=>{
  expect(uniquePaths(3, 7)).toEqual(28);
})

test('2', ()=>{
  expect(uniquePaths(3, 1)).toEqual(1);
})

test('3', ()=>{
  expect(uniquePaths(1, 7)).toEqual(1);
})
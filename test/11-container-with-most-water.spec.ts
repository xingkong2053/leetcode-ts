import { maxArea } from "../src/11-container-with-most-water";

test('1', ()=>{
  expect(maxArea([1,8,6,2,9,4,8,3,7])).toEqual(49);
})

test('2', ()=>{
  expect(maxArea([1,1])).toEqual(1);
})

test('3', ()=>{
  expect(maxArea([1,3,2,5,25,24,5])).toEqual(24);
})
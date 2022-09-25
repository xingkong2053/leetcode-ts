import { largestRectangleArea } from "84-largest-rectangle-in-histogram";

test('1', ()=>{
  expect(largestRectangleArea([2,1,5,6,2,3])).toEqual(10);
})

test('2', ()=>{
  expect(largestRectangleArea([2, 4])).toEqual(4);
})

test('3', ()=>{
  expect(largestRectangleArea([1, 1])).toEqual(2);
})
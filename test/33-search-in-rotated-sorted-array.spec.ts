import { search } from "../src/33-search-in-rotated-sorted-array";

test('1', ()=>{
  expect(search([4,5,6,7,0,1,2], 0)).toEqual(4);
})

test('2', ()=>{
  expect(search([4,5,6,7,0,1,2], 3)).toEqual(-1);
})

test('3', ()=>{
  expect(search([1], 0)).toEqual(-1);
})

test('4', ()=>{
  expect(search([3,5,1], 1)).toEqual(2);
})
import { nextPermutation } from "../src/31-next-permutation";

test('1', ()=>{
  let arr = [1];
  nextPermutation(arr);
  expect(arr).toEqual([1]);
})

test('1', ()=>{
  let arr = [1, 2];
  nextPermutation(arr);
  expect(arr).toEqual([2, 1]);
})

test('1', ()=>{
  let arr = [1,2,3];
  nextPermutation(arr);
  expect(arr).toEqual([1,3,2]);
})

test('1', ()=>{
  let arr = [4,5,2,6,3,1];
  nextPermutation(arr);
  expect(arr).toEqual([4,5,3,1,2,6]);
})

test('1', ()=>{
  let arr = [6,5,4,3,2,1];
  nextPermutation(arr);
  expect(arr).toEqual([1,2,3,4,5,6]);
})

test('1', ()=>{
  let arr = [4,5,2,6,2,1];
  nextPermutation(arr);
  expect(arr).toEqual([4,5,6,1,2,2]);
})
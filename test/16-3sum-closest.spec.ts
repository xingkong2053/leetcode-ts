import { threeSumClosest } from "../src/16-3sum-closest";

test('1', ()=>{
  expect(threeSumClosest([-1,2,1,-4], 1)).toEqual(2)
})

test('2', ()=>{
  expect(threeSumClosest([0, 0, 0], 1)).toEqual(0)
})

test('3', ()=>{
  expect(threeSumClosest([4,0,5,-5,3,3,0,-4,-5], -2)).toEqual(-2)
})
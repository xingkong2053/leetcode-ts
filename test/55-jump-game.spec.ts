import { canJump } from "../src/55-jump-game";

test('1', ()=>{
  expect(canJump([2,3,1,1,4])).toBeTruthy()
})

test('2', ()=>{
  expect(canJump([3,2,1,0,4])).toBeFalsy()
})
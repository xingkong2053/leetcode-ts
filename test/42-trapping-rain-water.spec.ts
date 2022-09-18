import { trap } from "../src/42-trapping-rain-water";

test('1', ()=>{
  expect(trap([0,1,0,2,1,0,1,3,2,1,2,1])).toEqual(6);
})
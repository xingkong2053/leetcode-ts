import { minDistance } from "72-edit-distance";

test('1', ()=>{
  expect(minDistance('horse', 'ros')).toEqual(3);
})

test('2', ()=>{
  expect(minDistance('intention', 'execution')).toEqual(5);
})
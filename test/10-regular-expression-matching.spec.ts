import { isMatch } from "../src/10-regular-expression-matching";

test('1', ()=>{
  expect(isMatch('aa', 'a*')).toEqual(true);
})
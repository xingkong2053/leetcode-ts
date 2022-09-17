import { generateParenthesis } from "../src/22-generate-parentheses";

test('1', ()=>{
  expect(generateParenthesis(1)).toEqual(['()']);
})

test('2', ()=>{
  expect(generateParenthesis(3)).toEqual(["((()))","(()())","(())()","()(())","()()()"]);
})
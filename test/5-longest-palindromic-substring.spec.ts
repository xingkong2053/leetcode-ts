import { longestPalindrome } from "../src/5-longest-palindromic-substring";

test('1', ()=>{
  expect(longestPalindrome('a')).toEqual('a');
  expect(longestPalindrome('aa')).toEqual('aa');
  expect(longestPalindrome('cd')).toEqual('c');
})

test('2', ()=>{
  expect(['aba', 'bab'].includes(longestPalindrome('babad'))).toBeTruthy();
  expect(longestPalindrome('cbbd')).toEqual('bb');
})

test('same letter', ()=>{
  expect(longestPalindrome('aaaa')).toEqual('aaaa');
})
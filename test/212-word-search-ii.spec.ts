import { findWords } from "212-word-search-ii";
import { difference } from "lodash";

test('1', ()=>{
  const board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]];
  const words = ["oath","pea","eat","rain"];
  expect(difference(findWords(board, words), ["eat","oath"])).toEqual([]);
})

test('2', ()=>{
  const board = [["a","a"],["a","a"]];
  const words = ["aaaaa"];
  expect(difference(findWords(board, words), [])).toEqual([]);
})

test('3', ()=>{
  const board = [["a","b","c"],["a","e","d"],["a","f","g"]];
  const words = ["abcdefg","gfedcbaaa","eaabcdgfa","befa","dgc","ade"];
  expect(difference(findWords(board, words), ["abcdefg","befa","eaabcdgfa","gfedcbaaa"])).toEqual([]);
})
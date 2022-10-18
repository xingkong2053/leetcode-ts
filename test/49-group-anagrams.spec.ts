import { groupAnagrams } from "49-group-anagrams";

test('1', ()=>{
  expect(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
    .toEqual([['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]);
})
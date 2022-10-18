/*
49. 字母异位词分组
给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。

 

示例 1:

输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
示例 2:

输入: strs = [""]
输出: [[""]]
示例 3:

输入: strs = ["a"]
输出: [["a"]]

提示：

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] 仅包含小写字母
*/
export function groupAnagrams(strs: string[]): string[][] {
  return _count(strs);
};

function _sort(strs: string[]): string[][]{
  let len = strs.length;
  let m: Record<string, string[]> = {}
  for(let i = 0; i< len; i++){
    const key = [...strs[i]].sort((a, b)=>a.charCodeAt(0) - b.charCodeAt(0)).join('');
    m[key] = [...(m[key] || []), strs[i]];
  }
  return Object.values(m);
}

// 记录字母的数目
function _count(strs: string[]): string[][]{
  const len = strs.length;
  const nums = new Array(26), 
    m: Record<string, string[]> = {};
  for(let i = 0; i< len; i++){
    nums.fill(0);
    const s = strs[i], 
      sLen = s.length;
    for(let j = 0; j< sLen; j++){
      nums[s.charCodeAt(j) - 97] ++;
    }
    const key = nums
      .map((n, idx)=>[idx, n])
      .filter(item=>item[1])
      .map(item=>String.fromCharCode(97+item[0])+'#'+item[1])
      .join('');
    m[key] = [...(m[key] || []), s];
    console.log(`${key}\t${s}`);
  }
  return Object.values(m);
}
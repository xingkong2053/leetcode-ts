import { Trie } from "208-implement-trie-prefix-tree";

function printTrie(trie: Trie){
  let arr: string[] = [];
  function collect(trie: Trie | null, level = 0, chr = ''){
    if(!trie) return;
    let s = '\t'.repeat(level);
    arr.push(`${s}====> ${chr}`)
    let i = 0;
    for(let item of trie.children){
      collect(item, level + 1, String.fromCharCode('a'.charCodeAt(0) + i++));
    }
  }
  collect(trie);
  console.log(arr.join('\n'));
}

test('1', ()=>{
  const trie = new Trie();
  expect(trie.insert("apple"));
  expect(trie.search("apple")).toBeTruthy();   // 返回 True
  expect(trie.search("app")).toBeFalsy();     // 返回 False
  expect(trie.startsWith("app")).toBeTruthy(); // 返回 True
  expect(trie.insert("app"));
  expect(trie.search("app")).toBeTruthy();     // 返回 True
  trie.insert("apply")
  trie.insert("abppe")
  printTrie(trie);
})
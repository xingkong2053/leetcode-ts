/*
146. LRU 缓存
请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
实现 LRUCache 类：
LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。

 

示例：

输入
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
输出
[null, null, null, 1, null, -1, null, -1, 3, 4]

解释
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1);    // 返回 -1 (未找到)
lRUCache.get(3);    // 返回 3
lRUCache.get(4);    // 返回 4
 

提示：

1 <= capacity <= 3000
0 <= key <= 10000
0 <= value <= 105
最多调用 2 * 105 次 get 和 put
*/
class LNode<T>{
  val?: T;
  prev: LNode<T> | null
  next: LNode<T> | null
  constructor(val?: T){
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

/**
 * 双向链表
 */
class List<T>{
  head: LNode<T>;
  tail: LNode<T>;
  _size: number;
  constructor(){
    this._size = 0;
    this.head = new LNode();
    this.tail = new LNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  unshift(nodeOrVal: T | LNode<T>){
    let node;
    if(nodeOrVal instanceof LNode){
      node = nodeOrVal
    } else {
      node = new LNode(nodeOrVal);
    }
    ;(this.head.next as LNode<T>).prev = node;
    node.next = this.head.next;
    this.head.next = node;
    node.prev = this.head;
    this._size ++;
    return node;
  }
  pop(){
    if(!this._size) return null;
    const target = this.tail.prev as LNode<T>
    const prevNode = target.prev as LNode<T>;
    prevNode.next = this.tail;
    this.tail.prev = prevNode;
    this._size--;
    return target.val as T
  }
  del(node: LNode<T>){
    const next = node.next as LNode<T>;
    const prev = node.prev as LNode<T>;
    next.prev = prev;
    prev.next = next;
    this._size -- ;
  }
  get size(){
    return this._size;
  }
}

interface KeyVal{
  key: number;
  value: number;
}

export class LRUCache {
  private keys: List<KeyVal>;
  private m : Map<number, LNode<KeyVal>>;
  private cap : number;
  constructor(capacity: number) {
    this.keys = new List();
    this.m = new Map();
    this.cap = capacity;
  }
  get(key: number): number {
    const node = this.m.get(key)
    if(node){
      this.keys.del(node);
      this.keys.unshift(node);
      return (node.val as KeyVal).value;
    } else {
      return -1;
    }
  }
  put(key: number, value: number): void {
    if(!this.m.has(key)) { //新增
      if(this.keys.size === this.cap){  // 满
        const target = this.keys.pop() as KeyVal;
        this.m.delete(target.key);
      }
      const node = this.keys.unshift({key, value});
      this.m.set(key, node);
    } else {
      const node = this.m.get(key) as LNode<KeyVal>;
      ;(node.val as KeyVal).value = value
      // 将node提到列表的前面
      this.keys.del(node);
      this.keys.unshift(node);
    }
  }
}
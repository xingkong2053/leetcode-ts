export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
  static fromArray(arr: (number | null)[]){
    return recursive(arr, 0);
  }
  toArray(){
    const queue: (TreeNode | null)[] = [];
    const result: (number | null)[] = [];
    queue.push(this);
    while(queue.length){
      let item = queue.shift();
      result.push(item?.val || null);
      if(item){
        queue.push(item.left);
        queue.push(item.right);
      }
    }
    while(result.length && !result[result.length-1]){
      result.pop();
    }
    return result;
  }
}

function recursive(arr: (number | null)[], idx: number): TreeNode | null{
  const len = arr.length;
  if(idx < 0 || idx >= len || !arr[idx]) return null;
  const node = new TreeNode(arr[idx] as number);
  node.left = recursive(arr, (idx + 1) * 2 -1);
  node.right = recursive(arr, (idx + 1) * 2);
  return node;
}
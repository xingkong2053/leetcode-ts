class TreeNode<T>{
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
  constructor(value: T){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
export class BinarySearchTree{
  root: TreeNode<number> | null;
  compFn: (n1: number, n2: number)=>number;
  constructor(compFn: (n1: number, n2: number)=>number = (n1, n2)=>n1-n2){
    this.root = null;
    this.compFn = compFn;
  }
  insert(key: number):void{
    if(this.root){
      this.insertNode(this.root, key);
    } else {
      this.root = new TreeNode(key);
    }
  }
  insertAll(keys: number[]):void{
    const n = keys.length;
    for(let i = 0; i< n; i++){this.insert(keys[i])}
  }
  private insertNode(node: TreeNode<number>, key: number):void{
    const comp = this.compFn(node.value, key);
    if(comp > 0){
      if(node.left){
        this.insertNode(node.left, key);
      } else {
        node.left = new TreeNode(key);
      }
    } else {
      if(node.right){
        this.insertNode(node.right, key);
      } else {
        node.right = new TreeNode(key);
      }
    }
  }
  search(key: number):boolean{return false;}
  inOrderTraverse(callback: (key: number)=>void):void{
    if(!this.root) return;
    const nodeStack: TreeNode<number>[] = []; 
    let ptr: TreeNode<number> | null = this.root as TreeNode<number>;
    while(nodeStack.length || ptr){
      while(ptr){
        nodeStack.push(ptr);
        ptr = ptr.left;
      }
      const node = nodeStack.pop() as TreeNode<number>;
      callback(node.value)
      ptr = node.right;
    }
  }
  preOrderTraverse(callback: (key: number)=>void):void{
    if(!this.root) return;
    const stack: TreeNode<number>[] = [this.root];
    while(stack.length){
      const node = stack.pop() as TreeNode<number>;
      callback(node.value);
      node.right && stack.push(node.right);
      node.left && stack.push(node.left);
    }
  }
  postOrderTraverse():void{}
  min():number{return 0;}
  max():number{return 0;}
  remove(key: number){}
}
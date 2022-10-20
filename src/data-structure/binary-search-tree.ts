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
  insert(key: number):void{}
  search(key: number):boolean{return false;}
  inOrderTraverse():void{}
  preOrderTraverse():void{}
  postOrderTraverse():void{}
  min():number{return 0;}
  max():number{return 0;}
  remove(key: number){}
}
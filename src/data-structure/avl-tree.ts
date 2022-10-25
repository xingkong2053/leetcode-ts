import { BinarySearchTree, TreeNode } from "./binary-search-tree";

export class AVLTree extends BinarySearchTree{
  root: TreeNode<number> | null;
  compFn: (n1: number, n2: number)=>number;
  constructor(compFn: (n1: number, n2: number)=>number = (n1, n2)=>n1-n2){
    super(compFn);
    this.compFn = compFn;
    this.root = null;
  }
  insert(key: number): void {
    
  }
}
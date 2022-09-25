import { ListNode } from "./data-structure";

export function removeNthFromEnd(head: ListNode, n: number) {
  if (!head || n < 1) {
    return;
  }
  const dummyHead = new ListNode();
  dummyHead.next = head;
  let p: ListNode | null = dummyHead,
    q: ListNode | null = dummyHead,
    cnt = 0;
  while (q) {
    if (cnt > n) {
      p = (p as ListNode).next;
    }
    q = q.next;
    cnt++;
  }
  p = p as ListNode
  p.next = (p.next as ListNode).next;
  return dummyHead.next;
}
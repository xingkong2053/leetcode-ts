/*
56. 合并区间
以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

 

示例 1：

输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
示例 2：

输入：intervals = [[1,4],[4,5]]
输出：[[1,5]]
解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
 

提示：

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
*/
export function merge(intervals: number[][]): number[][] {
  const len = intervals.length;
  // 对intervals按左端点排序
  intervals.sort((pair1, pair2)=>pair1[0] - pair2[0]);
  const result: [number, number][] = [];
  result.push(intervals[0] as [number, number]);

  for(let i = 1; i<len; i++){
    const last = result[result.length-1];
    if(intervals[i][0] <= last[1]){
      last[1] = Math.max(last[1], intervals[i][1]);
    } else {
      result.push(intervals[i] as [number, number]);
    }
  }
  return result;
};
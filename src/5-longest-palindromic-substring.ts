
/* 5. 最长回文子串
给你一个字符串 s，找到 s 中最长的回文子串。

 

示例 1：

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
示例 2：

输入：s = "cbbd"
输出："bb"
 

提示：

1 <= s.length <= 1000
s 仅由数字和英文字母组成 */
export function longestPalindrome(s: string): string {
  return central_expansion(s);
};

// 动态规划
function dynamic_planning_1(s: string): string{
  const len = s.length;
  if(len <2 ) {return s;}
  let maxLen = 1, start = 0;

  // 初始化dp
  const dp: boolean[][] = new Array(len);
  for(let i = 0; i< len; i++){
    dp[i] = new Array(len);
  }

  // 长度为1都为true
  for(let i = 0; i< len; i++){ 
    dp[i][i] = true; 
  }
  for(let l = len -2 ; l>=0 ; l --){  // 从后往前
    for(let r = l +1 ; r < len; r ++ ){
      if(r-l ===1){ // 判断是否为长度为2回文
        dp[l][r] = s[l] === s[r]
      } else {
        dp[l][r] = dp[l+1][r-1] && s[l] === s[r]
      }
      if(dp[l][r] && r - l + 1 > maxLen){
        // 记录回文的最大长度和位置
        maxLen = r - l + 1
        start = l
      }
    }
  }
  return s.substring(start, start + maxLen);
}

// 动态规划：将二维数组简化为两个一维数组
function dynamic_planning_2(s: string): string{
  const len = s.length;
  if(len <2 ) {return s;}
  let maxLen = 1, start = 0;
  let arr1: boolean[] = new Array(len);
  let arr2: boolean[] = new Array(len);
  arr2[len -1] = true;

  for(let l = len - 2; l>=0 ; l --){  // 从后往前
    for(let r = l; r < len; r ++ ){
      /*

      状态转义方程
      p(i,i) = true
      p(i,i+1) = s[i] == s[i + 1]
      p(i,j) = p(i+1,j-1) and s[i] == s[j]
       */
      if(r === l){  
        arr1[r] = true
      } else if(r === l + 1) {
        arr1[r] = s[l] === s[r];
      } else {
        arr1[r] = arr2[r - 1] && s[l] === s[r]
      }
      if(arr1[r] && r - l + 1 > maxLen){
        maxLen = r - l + 1
        start = l
      }      
    }
    // 将arr1结果转移到arr2中，进行下一轮循环
    arr1.forEach((val, i)=>{
      arr2[i] = val
    })
  }
  return s.substring(start, start + maxLen);
}

// 中心拓展算法
function central_expansion(s: string){
  const len = s.length;
  if(len <2 ) {return s;}
  let maxLen = 1, start = 0;

  // 奇数长度
  for(let i = 1; i< len - 1; i++){
    let r = 1; // 半径
    while(i-r>=0 && i+r<len && s[i-r]===s[i+r]){
      let len = r * 2 + 1;
      if(len > maxLen){
        start = i-r;
        maxLen = len;
      }
      r++;
    }
  }

  // 偶数长度
  for(let i = 0; i<len -1; i++){
    let r = 0;
    while(i-r>=0 && i+1+r<len && s[i-r] === s[i+1+r]){
      let len = r * 2 + 2;
      if(len > maxLen){
        start = i-r;
        maxLen = len;
      }
      r++;
    }
  }
  return s.substring(start, start + maxLen);
}
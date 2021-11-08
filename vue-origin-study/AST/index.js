// 算连续重复次数；
let a = 'aaaabbbbbbcccccccdddddddddd'
var i = 0;
var j = i+1;
var obj = {};
function compute(str) {
  if (!str[j]) {
    obj[str[i]] = j-i;
    return;
  };
  if (str[i] == str[j]) {
    j++;
    compute(str)
  } else { 
    obj[str[i]] = j-i;
    i = j;
    j++
    compute(str)
  }
}
compute(a);
// 更优的解决思路；
// while(i < a.length) {
//   if(a[i] != a[j]) {

//   }
// }


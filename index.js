let str='hello world';
let strEdit=str.split(' ').join('');
// console.log(strEdit);
let arr=Array.from(strEdit);
console.log(arr);
let arrSec=[];
for(let i=0; i<strEdit.length; i++){
arrSec[i]= Array.of(str.charCodeAt(i));
}
console.log(arrSec.flat());

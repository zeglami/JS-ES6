//let var const

//Named Function
console.log("Named Function")
function varFunc(){
  const m=6
  let s=0;
 for(i=0;i<m;i++){
   console.log(i)
   s++
 }

 s=s+1
 return {s,m}
}
const r=varFunc()
console.log("r="+r.s)
console.log("r="+r.m)

//Anonymous function ES5
const anon = function(a) {
  console.log('I am anonymous');
  return a*2
}
let p=anon(2);
console.log("p="+p)
// Arrow function ES6
const arw =(a)=> {
  console.log('I am Arrow');
  return a*3
}
console.log("arw="+arw(2))

//practical example arrow function


//for loop
console.log("for classic")
var arr=[1,7,"A"]
for(let i=0;i<arr.length;i++){
  console.log(arr[i])
}
console.log("for with of key word")
for (let elmt of arr){
  console.log(elmt)
}






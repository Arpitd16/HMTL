var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
//using map
// function double(x){
//   return (x*2);
// }
// const newnumber=numbers.map(double);
// console.log(newnumber);

//using javascript
// var newnumber=[];
// function double(x){
//   newnumber.push(x*2);
// }
// numbers.forEach(double);
// console.log(newnumber);

//function direct using in
// const newnumber=numbers.map(function(x){
//   return (x*2);
// });
// console.log(newnumber);

//Filter - Create a new array by keeping the items that return true.
//using filter
// const newnumber=numbers.filter(function(x){
//   return x>10;
// });
// console.log(newnumber);

//using foreach
// var newnumber=[];
// numbers.forEach(function(x){
//   if(x>10)
//   newnumber.push(x);
// });
// console.log(newnumber);

//Reduce - Accumulate a value by doing something to each item in an array.
//foreach using
// var newnumber=0;
// numbers.forEach(function(x){
//   newnumber+=x;
// });
// console.log(newnumber);

//using reduce function
// var newnumber=numbers.reduce(function(Accumulate,x){
//   console.log("accumalator " + Accumulate);
// console.log("num "+ x);
//   return Accumulate+x;
// });
// console.log(newnumber);

//Find - find the first item that matches from an array.
//using find
// const find=numbers.find(function(x){
//   return x>10;
// });
// console.log(find);

//FindIndex - find the index of the first item that matches.
//using findindex
// const findindex=numbers.findIndex(function(x){
//   return x>10;
// });
// console.log(findindex);
import emojipedia from "./emojipedia.js";
const newemoji = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});
console.log(newemoji);

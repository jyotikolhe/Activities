// ////Reducing values
// ////Array Sum
//  [2].reduce(function(a,b){
//    console.log(a,b);
//     return a+b;
// },1);

// ////Flatten array of objects
//  var array = [{
//  key: 'one',
//   value: 1
//  }, {
//   key: 'two',
//   value: 2
//  }, {
//   key: 'three',
//   value: 3
//  }];

//  array.reduce(function(obj, current) {
//   obj[current.key] = current.value;
//   return obj;
//  }, {})

// //Find Min Value
//  var arr = [4, 2, 1, -10, 9];
//  arr.reduce(function(a, b) {
// return a < b ? a : b;  
//  });


// ////Sorting Arrays
// ///Sorts the array in UNICODE order.
// ['s', 't', 'a', 34, 'K', 'o', 'v', 'E', 'r', '2', '4', 'o', 'W', -1, '-4'].sort();

// //String sorting by length (longest first)
// ["zebras", "dogs", "elephants", "penguins"].sort(function(a, b) {
//  return b.length - a.length;
// });

// //String sorting by length (shortest first)
// ["zebras", "dogs", "elephants", "penguins"].sort(function(a, b) {
//  return a.length - b.length;
// });

// //Numerical Sort (ascending)
// [100, 1000, 10, 10000, 1].sort(function(a, b) {
//  return a - b;
// });

// //Sorting array by even and odd numbers
// [10, 21, 4, 15, 7, 99, 0, 12].sort(function(a, b) {
//  return (a & 1) - (b & 1) || a - b;
// });

// ///// Removing duplicate elements
// var uniqueArray = ['a', 1, 'a', 2, '1', 1].filter(function(value, index, self) {
//     return self.indexOf(value) === index;
//    });
// ////Destructuring an array
// const triangle = [3, 4, 5];
// const [length, height, hypotenuse] = triangle;
// length === 3; 
// height === 4; 
// hypotenuse === 5; 
//******************************************************** */
// ////Iteration

// //for loop
// for (var i = 0, length = 10; i < length; i++) {
//     console.log(i);
//    }

// //while
// let myArray = [1, 2, 3, 4];
// var key = 0;
// while(value = myArray[key++]){
//  console.log(value);
// }
///for...in
// let myArray = [1, 2, 3, 4];
// for (i in myArray) {
//     console.log(myArray[i]);
//    }
///for...of
// let myArray = [1, 2, 3, 4];
//    for (let value of myArray) {
//     let twoValue = value * 2;
//     console.log("2 * value is: %d", twoValue);
// }

// //for each
// [1, 2, 3, 4].forEach(function(value, index, arr) {
//     var twoValue = value * 2;
//     console.log("2 * value is: %d", twoValue);
//    });

// //some
// // [].some stops once it finds a false result
// // thus, this iteration will stop on value 7 (since 7 % 2 !== 0)
// [2, 4, 7, 9].some(function(value, index, arr) {
//     console.log(value);
//     return value === 7; // iterate until we find value 7
//    });

// ////Reverse array
// var arr1 = [11, 22, 33];
// var arr2 = arr1.reverse();
// console.log(arr2); 
// console.log(arr1); 

// ////Concatenating Arrays
// var array1 = [1, 2];
// var array2 = [3, 4, 5];
// var array3 = array1.concat(array2);
// console.log(array3);

// ///Multiple Arrays
// var array1 = ["a", "b"],
//  array2 = ["c", "d"],
//  array3 = ["e", "f"],
//  array4 = ["g", "h"];
// var arrConc = array1.concat(array2, array3, array4);
// console.log(arrConc);

// //Removing items from an array
// //Shift

// var array = [1, 2, 3, 4];
// console.log(array.shift());

// //Pop

// var array = [1, 2, 3];
// console.log(array.pop());

// //Delete
// var array = [1, 2, 3, 4, 5];
// console.log(array.length); 
// delete array[3];
// console.log(array); 
// console.log(array.length);

// ///Joining array elements in a string
// console.log(["Hello", " ", "world"].join(" ")); 








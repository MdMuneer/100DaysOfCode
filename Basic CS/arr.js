function greater(arr1){
  let newArr1 = [];
for (let i=0;i < arr1.length; i++) {
  if(arr1[i] > 10){
    newArr1.push(arr1[i]);
  }
}
  return newArr1

}
console.log(greater([20, 12, 14, 80, 0, ]));

// Sort an Array Alphabetically in Javascript

var nonSortedArray = ['h', 'y', 'w', 'b', 'l'];
var sortedArray = nonSortedArray.sort(function (a, b) {
      if (a < b) return -1;
      else if (a > b) return 1;
      return 0;
    });

console.log(sortedArray)


// Sort an array of numbers in descending order
var nonSortedArray1 = ['1', '5', '6', '87', '2'];
var sortedArray1 = nonSortedArray1.sort(function (a, b) {
      if (a > b) return -1;
      else if (a < b) return 1;
      return 0;
    });
console.log(sortedArray1)


// return 5  last elements in an array

var arr = [1,2,3,4,5,6,7,17,8,11];

console.log(arr.slice((arr.length - 5), arr.length))

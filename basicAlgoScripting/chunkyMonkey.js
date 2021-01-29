// Write a function that splits an array (first argument) into 
// groups the length of size (second argument) and returns them 
// as a two-dimensional array.

function chunkArrayInGroups(arr = [], size = 0) {
    let newArr = [];
    while(arr.length > size) {
      newArr.push(arr.splice(0,size));
    }
    newArr.push(arr);
    return newArr;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);
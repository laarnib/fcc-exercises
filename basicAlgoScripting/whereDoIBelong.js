function sort(arr) {
    // Sorting array using Insertion sort. 
    // Not sure if my insertion sort is correct.
    for (let i = 1; i < arr.length; i++) {
        let index;
        let min = arr[i];
        index = i;

        for (let j = i - 1; j >= 0; j--) {
            if (min < arr[j]) {
              arr[index] = arr[j];
              arr[j] = min;
              index--;
            }
            else {
              break;
            }
        }
    }

    return arr;
}

function getIndexToIns(arr, num) {

    sort(arr);
    
    // Traverse through array to find the position of num
    if (num && arr.length === 0) {
      return 0;
    } 
    else {
        for (let i = 0; i < arr.length; i++)
        {
            if (arr[i] < num && arr[i + 1] > num) {
                return i + 1;
            } 
            else if (num === arr[i]){
                return i;        
            }
            else if (num < arr[i]) {
                return i;
            }
            else if (i === arr.length - 1 && num > arr[i]) {
                return i + 1;
            }
            else if (arr[i] < num && arr[i + 1] > num){
                return i + 1;
            }
        }
    }
}
  
getIndexToIns([40, 60], 50); //1
getIndexToIns([10, 20, 30, 40, 50], 35); //3
getIndexToIns([10, 20, 30, 40, 50], 30); //2
getIndexToIns([3, 10, 5], 3); //0
getIndexToIns([5, 3, 20, 3], 5); //2
getIndexToIns([2, 20, 10], 19); //2
getIndexToIns([2, 5, 10], 15); //3
getIndexToIns([], 1); //0
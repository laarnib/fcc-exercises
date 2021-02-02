// Return true if the string in the first element of the array contains 
// all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the 
// letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string 
// "hello" does not contain a "y".
// Lastly, ["Alien", "line"], should return true because all of the letters 
// in "line" are present in "Alien".

function removeDuplicateLetters(arr) {
    // Split the strings into an array of characters split into 
    let charArr = arr.split('');

    //find duplicate strings and remove from the array
    for (let i = 0; i < charArr.length; i++) {
        for (let j = i + 1; j < charArr.length; j++) {
            if (charArr[i] === charArr[j]) {
                charArr.splice(j,1);
                j -= 1;
            }
        }
    }
    return charArr;
}

function mutation(arr) {

    // Remove duplicate letters in the strings;
    let word1 = removeDuplicateLetters(arr[0]);
    let word2 = removeDuplicateLetters(arr[1]);
    let counter = 0;
    // Check if word 1 contains all letters of word2
    for (let i = 0; i < word2.length; i++) {
        for (let j = 0; j < word1.length; j++) {
            if(word1[j].toLowerCase() === word2[i].toLowerCase()) {
                //Increment counter if character is the same
                counter++;
            }
        }
    }
    
    // Return true if counter is equal to length of the second element
    if (counter === word2.length) {
        return true;
    } else {
        return false;
    }
}

mutation(["hello", "Hello"]);
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
mutation(["Mary", "Army"]);
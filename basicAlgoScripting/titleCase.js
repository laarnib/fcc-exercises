// Return the provided string with the first letter of each word capitalized. 
// Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting 
// words like "the" and "of".

function titleCase(str) {
    str = str.toLowerCase();
    let strArr = str.split(' ').map(function(word) { 
        return word.replace(word[0], word[0].toUpperCase());

    })
    
    return strArr.join(' ');
  }
  
  titleCase("I'm a little tea pot");
  titleCase("sHoRt AnD sToUt");
  titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");

// Return the length of the longest word in the provided sentence.
//Your response should be a number.

function findLongestWordLength(str) {
    try {
        // Break the string into substrings
        let subStrArr = str.split(' ');

        // Save character count of first element in mostCharCount
        let mostCharCount = subStrArr[0].length;
  
        // Traverse through the array comparing the length of each element
        // to the value in mostCharCount
        for (let word of subStrArr) {
            if (word.length >= mostCharCount) {
                mostCharCount = word.length;
            }
        }
  
        return mostCharCount;
    } catch(e) {
        console.log("You forgot to include a string.")
        console.log(e);
    }
  }
  
  //Testing
  findLongestWordLength("The quick brown fox jumped over the lazy dog");  //6
  findLongestWordLength("May the force be with you"); //5
  findLongestWordLength("Google do a barrel roll"); //6
  findLongestWordLength("What is the average airspeed velocity of an unladen swallow"); //8
  findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"); //19
  findLongestWordLength();




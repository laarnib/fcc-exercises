//Repeat a given string str (first argument) for num times (second argument). 
//Return an empty string if num is not a positive number. For the purpose of 
//this challenge, do not use the built-in .repeat() method.

function repeatStringNumTimes(str = undefined, num = 0) {
    if (str === undefined || num <= 0) {
      return "";
    } 
    else {
        if (num === 1) {
          return str;
        } 
        else {
            return str + repeatStringNumTimes(str, num -1);
        }
    }
}
  
repeatStringNumTimes("abc", 3);
repeatStringNumTimes("*", 3);
repeatStringNumTimes("abc", 4);
repeatStringNumTimes("abc", 1);
repeatStringNumTimes("*", 8);
repeatStringNumTimes("abc", -2);
repeatStringNumTimes("abc", 0);
repeatStringNumTimes();
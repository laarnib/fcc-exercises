//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
//Return the truncated string with a ... ending.

function truncateString(str = "", num = 0) {
    if (num >= str.length) {
      return str;
    }
    else {
    return str.substring(0,num)+"...";
    }
  
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);
  truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
  truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
  truncateString();
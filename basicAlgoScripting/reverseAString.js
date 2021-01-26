// Reverse the provided string.

function reverseString(str) {
    let strArr = [...str];
    str = strArr.reverse().join('');
    return str;
  }
  
reverseString("hello");   //"olleh"
reverseString("Howdy");   //"ydwoH"
reverseString("Greetings from Earth");  //"htraE morf sgniteerG"

//Check if a string (first argument, str) ends with the given 
//target string (second argument, target).
//This challenge can be solved with the .endsWith() method, 
//which was introduced in ES2015. But for the purpose of this challenge, 
//we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
    if (str == null || target == null) {
      return "Error: No string found";
    }
    else {
      if (str.substring(str.length - target.length) === target) {
        return true;
      }
      return false;
    }
  }
  
  //testing
  confirmEnding("Bastian", "n");
  confirmEnding("Congratulation", "on");
  confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");
  confirmEnding("He has to give me a new name", "name");
  confirmEnding("Open sesame", "same");
  confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain");
  confirmEnding("Open sesame", "game");
  confirmEnding("Open sesame", "sage");
  confirmEnding("Abstraction", "action");
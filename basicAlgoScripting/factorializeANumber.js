// Return the factorial of the provided integer


function factorialize(num) {
    if (num === 0 || num === 1) {
      return 1;
    }
    else {
      return num * factorialize(num - 1);
    }
  }
  
  factorialize(5);     //120
  factorialize(10);    //3628800
  factorialize(20);   //2432902008176640000
  factorialize(0);   //1
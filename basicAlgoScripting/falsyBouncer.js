//Remove all falsy values from an array.
//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
    let newArr = arr.filter((elem) => {
      if (Boolean(elem) === true) {
        return elem;
      }
    })
    arr = newArr
    return arr;
  }
  
  bouncer([7, "ate", "", false, 9]);
  bouncer(["a", "b", "c"]);
  bouncer([false, null, 0, NaN, undefined, ""]);
  bouncer([null, NaN, 1, 2, undefined]);
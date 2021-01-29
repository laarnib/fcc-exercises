function titleCase(str) {
    let regex = /\s+/;
    let strArr = str.split(regex);
    console.log(strArr);
    let capitalizedStr = [];
    for (let i = 0; i < strArr.length; i++) {
        let newStr = "";
        for (let j = 0; j < strArr[i].length; j++) {
            if (j === 0) {
                newStr += strArr[i][j].toUpperCase();
            }
            else {
                newStr += strArr[i][j].toLowerCase();
            }
        }
        capitalizedStr.push(newStr);
    }
    
    return capitalizedStr.join(' ');;
  }
  
  titleCase("I'm a little tea pot");
  titleCase("sHoRt AnD sToUt");
  titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");

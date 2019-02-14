function checkAB(num) {
    // you can only write your code here!
    var indexA = [];
    var indexB = [];

    for (var i = 0; i < num.length; i++) {
        if (num[i] === 'a') {
            indexA.push(i);
        }
    }

    for (var j = 0; j < num.length; j++) {
        if(num[j] === 'b') {
            indexB.push(j);
        }
    }
    // console.log('indexA -->' + indexA)
    // console.log('indexB -->' + indexB)

    if (indexA.length === 0 || indexB.length === 0) {
        return false;
    } 
    
    if (indexA.length > 0 && indexB.length > 0) {
        for (var k = 0; k < indexA.length; k++) {
            for (var l = 0; l < indexB.length; l++) {
                if (Math.abs(indexA[k]-indexB[l]) === 4) {
                    return true;
                } else if (Math.abs(indexB[l]-indexA[k]) === 4) {
                    return true;
                }
            }
        }
    }
    return false;
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false
function fpb(angka1, angka2) {
    // you can only write your code here!
    var tempAngka1 = [];
    var tempAngka2 = [];
    var output = 0;

    for (var i = 0; i < angka1+1; i++) {
        if (angka1%i === 0) {
            tempAngka1.push(i)
        }
    }

    for (var j = 0; j < angka2+1; j++) {
        if(angka2%j === 0) {
            tempAngka2.push(j)
        }
    }

    //return tempAngka1 + ' ' + tempAngka2;
    
    for (var k = 0; k < tempAngka1.length; k++) {
        for (var l = 0; l < tempAngka2.length; l++) {
            if (tempAngka1[k] === tempAngka2[l]) {
                output = tempAngka1[k];
            }
        }
    }
    return output;
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1
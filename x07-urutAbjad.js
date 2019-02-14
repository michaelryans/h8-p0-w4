function urutkanAbjad(str) {
    // you can only write your code here!
    var temp = '';
    var arrayStr = [];

    for (var i = 0; i < str.length; i++) {
        arrayStr.push(str[i])
    }
    //return arrayStr;

    var counter = 1;
    for (var j = 0; j < arrayStr.length-1; j++) {
        for (var k = 0; k < arrayStr.length - counter; k++) {
            if (arrayStr[k] > arrayStr[k+1]) {
                temp = arrayStr[k];
                arrayStr[k] = arrayStr[k+1];
                arrayStr[k+1] = temp;
            }
        }
        counter ++;
    }
    //return arrayStr;
    var output = '';
    for (var l = 0; l < arrayStr.length; l++) {
        output = output + arrayStr[l];
    }

    return output;
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'
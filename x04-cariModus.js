function cariModus(arr) {
    // you can only write your code here!
    var output = [];

    for (var i = 0; i < arr.length; i++) {
      var flag = false;
      for (var j = 0; j < output.length; j++) {
        if (output[j][0] === arr[i]) { 
          output[j][1] += 1;
          flag = true;
        }
      }
      if (flag === false) {
        output.push([arr[i], 1])
      }
    }
    // return output; //sudah oke

    var max = 1;
    for (var k = 0; k < output.length; k++) {
      if (max < output[k][1]) {
        max = output[k][1]
      }
    }
    //return max;

    //return output[0][1]

    if (output.length === 1) {
      return -1;
    } else if (max === 1) {
      return -1;
    } else if (true) {
      for (var m = 0; m < output.length; m++) {
        if (max === output[m][1]) {
          return output[m][0];
        }
      }
    }

  }
 
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1
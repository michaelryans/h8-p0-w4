function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    var abjad = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var flag = false;
    var indexCounter = 0;
    var output = ''

    for (var i = 0; i < kalimat.length; i++) {
        indexCounter = -1;
        for (var j = 0; j < abjad.length; j++) {
            if (abjad[j] === kalimat[i]) {
                indexCounter = j;
            }
        }
        //console.log(indexCounter);

        if (indexCounter === -1) {
            output = output + kalimat[i];
        } else if (indexCounter <= 25) {
            output = output + abjad[indexCounter+26];
        } else if (indexCounter > 25) {
            output = output + abjad[indexCounter-26]
        }

    }
    return output;
  } 
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
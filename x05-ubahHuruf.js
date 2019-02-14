function ubahHuruf(kata) {
    // you can only write your code here!
    var temp = '';
    var abjad = 'abcdefghijklmnopqrstuvwxyz'


    for ( i = 0; i < kata.length; i++) {
        for (var j = 0; j< abjad.length - 1; j++) {
            if (kata[i] === abjad[j]) {
                temp = temp + abjad[j+1]
            }
        }
    }

 /*   for (i = 0; i<kata.length; i ++) {
        switch (kata[i]) {
            case 'a': temp = temp + 'b'; break;
            case 'b': temp = temp + 'c'; break;
            case 'c': temp = temp + 'd'; break;
            case 'd': temp = temp + 'e'; break;
            case 'e': temp = temp + 'f'; break;
            case 'f': temp = temp + 'g'; break;
            case 'g': temp = temp + 'h'; break;
            case 'h': temp = temp + 'i'; break;
            case 'i': temp = temp + 'j'; break;
            case 'j': temp = temp + 'k'; break;
            case 'k': temp = temp + 'l'; break;
            case 'l': temp = temp + 'm'; break;
            case 'm': temp = temp + 'n'; break;
            case 'n': temp = temp + 'o'; break;
            case 'o': temp = temp + 'p'; break;
            case 'p': temp = temp + 'q'; break;
            case 'q': temp = temp + 'r'; break;
            case 'r': temp = temp + 's'; break;
            case 's': temp = temp + 't'; break;
            case 't': temp = temp + 'u'; break;
            case 'u': temp = temp + 'v'; break;
            case 'v': temp = temp + 'w'; break;
            case 'w': temp = temp + 'x'; break;
            case 'x': temp = temp + 'y'; break;
            case 'y': temp = temp + 'z'; break;
        }*/

    return temp;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
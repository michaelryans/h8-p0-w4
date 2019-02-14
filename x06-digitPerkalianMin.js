function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var array = []; //untuk menyimpan faktor perkalian

    for ( var i = 0; i <= angka; i ++) {
        if (angka%i === 0) {
            array.push(i)
        }
    }
    //return array; (seluruh faktor)
    /*
    [ 1, 2, 3, 4, 6, 8, 12, 24 ]
    [ 1, 2, 3, 5, 6, 9, 10, 15, 18, 30, 45, 90 ]
    [ 1, 2, 4, 5, 10, 20 ]
    [ 1, 179 ]
    [ 1 ]
    */
    var arrayPerkalian = [];
    for (var j = 0; j < (array.length/2); j++) {
        arrayPerkalian.push([array[j], array[array.length-1-j]])
    }

    //return arrayPerkalian; (faktor perkalian yang menghasilkan 'angka')
    /*
    [ [ 1, 24 ], [ 2, 12 ], [ 3, 8 ], [ 4, 6 ] ]
    [ [ 1, 90 ], [ 2, 45 ], [ 3, 30 ], [ 5, 18 ], [ 6, 15 ], [ 9, 10 ] ]
    [ [ 1, 20 ], [ 2, 10 ], [ 4, 5 ] ]
    [ [ 1, 179 ] ]
    [ [ 1, 1 ] ]
    */


    var min = 0;
    var x = arrayPerkalian.length;
    min = (arrayPerkalian[x-1][0].toString() + arrayPerkalian[x-1][1].toString())
    
    //return min; pada array[array.length] --> digit minimum
    /*  46
        910
        45
        1179
        11
    */

    return min.length;

}
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2
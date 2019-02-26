function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var finalOutput = [];
    var objekOutput = {}; 
    var naikDari = 0;
    var turunDari = 0;

    for (var i = 0; i < arrPenumpang.length; i++) {
        objekOutput = {};
        objekOutput['penumpang'] = arrPenumpang[i][0];
        objekOutput['naikDari'] = arrPenumpang[i][1];
        objekOutput['tujuan'] = arrPenumpang[i][2];

        

        var flag = false;
        for (var j = 0; j < rute.length; j++) {
            if (rute[j] === arrPenumpang[i][1]) {
                naikDari = j;
            }
            
            if ( rute[j] === arrPenumpang[i][2]) {
                turunDari = j
            }

        }

        objekOutput['bayar'] = Math.abs(naikDari-turunDari) * 2000;
        finalOutput.push(objekOutput)
       
    }
    return finalOutput;
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]
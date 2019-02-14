function countProfit(shoppers) {
    var listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
  
    // you can only write your code here!
    

    var katalog = [];
    var item = {};
    for (var i = 0; i < listBarang.length; i++) {
        item = {};
        item.product = listBarang[i][0];
        item.shoppers = [];
        item.leftOver = listBarang[i][2];
        item.totalProfit = 0;
        katalog.push(item)
      }
    //return item; ok
    
    for (var j = 0; j < shoppers.length; j++) {
      for (var k = 0; k < listBarang.length; k ++) {
        if (shoppers[j]['product'] === katalog[k]['product']) {
          //console.log(shoppers[j]['product'] + katalog[k]['product'])
          
          if (katalog[k]['leftOver'] >= shoppers[j]['amount']) {
            katalog[k]['leftOver'] -= shoppers[j]['amount']
            katalog[k]['shoppers'].push(shoppers[j]['name'])
            switch(shoppers[j]['product']) {
              case 'Sepatu Stacattu': katalog[k]['totalProfit'] += 1500000*shoppers[j]['amount']; break;
              case 'Baju Zoro': katalog[k]['totalProfit'] += 500000*shoppers[j]['amount'];break;
              case 'Sweater Uniklooh': katalog[k]['totalProfit'] += 175000*shoppers[j]['amount']; break;
            }
          }
          //console.log(katalog[k]['product'] + ' ' + katalog[k]['leftOver'])
        }
      }
    }



    if (shoppers.length === 0) {
      return '[]'
    }

    return katalog;
  }
  
  // TEST CASES
  console.log(countProfit(
      [{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, 
        {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, 
        {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  console.log(countProfit(
    [{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, 
      {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, 
      {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, 
      {name: 'Devi', product: 'Baju Zoro', amount: 1}, 
      {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
  console.log(countProfit([])); //[]
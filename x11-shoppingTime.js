function shoppingTime(memberId, money) {
    // you can only write your code here!
    
    if (memberId === '' || memberId === undefined) {
        return "Mohon maaf, toko X hanya berlaku untuk member saja"
    }
    
    var sale = [
        ['Sepatu Stacattu' , 1500000],
        ['Baju Zoro', 500000],
        ['Baju H&N', 250000],
        ['Sweater Uniklooh', 175000],
        ['Casing Handphone', 50000]
    ]

    //return sale;
    var change = money;
    var listPurchased = [];
    for (var i = 0; i < sale.length; i++) {
        if (change >= sale[i][1]) {
            change = change - sale[i][1]
            listPurchased.push(sale[i][0])
        } else if (money < 50000) {
            return "Mohon maaf uang tidak cukup";
        }
    }

    //return listPurchased;
    // [ 'Sepatu Stacattu',
    //     'Baju Zoro',
    //     'Baju H&N',
    //     'Sweater Uniklooh',
    //     'Casing Handphone' ]
    // [ 'Casing Handphone' ]
    // [ 'Sepatu Stacattu',
    //     'Baju Zoro',
    //     'Baju H&N',
    //     'Sweater Uniklooh',
    //     'Casing Handphone' ]
    // []
    // []

    
    var person = {};

    person.memberId = memberId;
    person.money = money;
    person.listPurchased = listPurchased;
    person.changeMoney = change;

    return (person)
  }
  
  // TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
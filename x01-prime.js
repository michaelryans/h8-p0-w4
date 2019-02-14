function angkaPrima(angka) {
  // you can only write your code here!
  var remaining = angka;
  var array = [];

  if (angka === 2 || angka === 3) {
    return true;
  } else if (angka <= 1) {
    return false;
  }

  for (var i = 0; i < Math.sqrt(angka) +1; i++) {
    if (angka%i === 0) {
      array.push(i)
      remaining = remaining/i;
    }
  }
  array.push(remaining);
  
  /*array:
    true (3 is prime)
    [ 1, 7 ]
    [ 1, 2, 3, 1 ]
    [ 1, 23 ]
    [ 1, 3, 11 ]
  */

  if (array.length === 2) {
    return true;
  }
  return false;
}
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false
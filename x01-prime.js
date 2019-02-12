function angkaPrima(angka) {
    // you can only write your code here!
    for (var i = 0; i < Math.sqrt(angka) +1; i++) {
      if (angka === 2 || angka === 3) {
        return true;
      } else if (angka%2 === 0 || angka%3 === 0) {
        return false;
      } else if (angka%i === 0) {
          return false;
      } 
      return true;
    }
  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false
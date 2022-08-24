function reverseString(str) {
    var stringAwal = str;
    var stringBaru = '';
   for (let i = str.length - 1; i >= 0; i--) {
     stringBaru = stringBaru + stringAwal[i];}
    return stringBaru;
   }
   console.log(reverseString('abcde'));
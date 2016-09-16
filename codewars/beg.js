// 1.
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// My solution - return true if a string has the same number of 'o' as 'x';
var str1 = "x"
function XO(str) {
    //code here
    string = str.toLowerCase();
    var countero = 0;
    var counterx = 0;


    if (str === string) {
        if (str.indexOf('o') < 0 && str.indexOf('x') < 0 ) {
              return true;
        }

    }
    for (var i = 0; i < str.length; i++) {

            if (str.charAt(i) === 'o') {
                  countero = countero + 1;

            } else if (str.charAt(i) === 'x') {
                  counterx = counterx + 1;

            }
    }
        if (countero === counterx) {
            return true;


        } else {
          return false;

        }

}

str1.charCodeAt(0)

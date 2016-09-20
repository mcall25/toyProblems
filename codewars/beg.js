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


// problem 2
// The numberOfOccurrences function must return the number of occurrences of an element in an array.
var a1 = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9];

 function numberOfOccurrences(num) {
    	var str = '';
    for (var i = 0; i < a1.length; i++) {
        str = a1[i] + str;
    }
      var num2 = str.split(num).join('')
      var num3 = str.length - num2.length;
		  return num3;
}

numberOfOccurrences(1);


// 3. Welcome. In this kata, you are asked to square every digit of a number.
// For example, if we run 9119 through the function, 811181 will come out.
// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
  var array = [];
  var num2 = '';
 var num3 = '';
  array.push(num);
  num2 = num2 + array[0];

  for (var i = 0; i < num2.length; i++) {
     var t  =  Math.pow(num2.charAt(i), 2);
     	num3 = num3 + t;

      }
        return Number(num3);
}

// Write a function that takes a single string (word) as argument.
// The function must return an ordered list containing the indexes of all capital letters in the string.
// // Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
var capitals = function (word) {
	var array = [];
	word = word.split('')

  for (var i = 0; i < word.length; i++) {
        if(word[i] === word[i].toUpperCase()) {
          array.push(i);
        }
  }
  return array;

}

// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all
// even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased.
// The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be
// upper cased.


var str = "i love you"

function toWeirdCase(str) {

    var str2 = str.split('')

    for (var i = 0; i < str2.length; i++) {
              if (i % 2 == 0) {
                str[i].toUpperCase();


              }
    }

}




// problem replace the first letter of each word if its a noun
function pigLatinizer(str){
	return str.split(' ').map(function(word){
		return word.search(/^[aeiouAEIOU]/) > -1 ?
		word + 'way' :
		word.substr(1,word.length) + word[0] + 'ay';
	}).join(' ');
}

// problem
Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.

Example:

Input:  [ 1, 3, 5, 1, -10]
Output:  [ 2, 4, 3, -4.5]
If the array has 0 or 1 values or is null or None, your method should return an empty array



var obj = {
  this.aver: function(num) {
      if (true) {

      }


  }

}

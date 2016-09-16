Function.prototype.newBind = function() {
  var _this = this
  // assign arg to the varible the context
  var context = arguments[0]
  var args = []
  for (var i = 1; i < arguments.length; i++) {
    args.push(arguments[i])
  }

  return function() {
    var innArgs = []
    for (var i = 1; i < arguments.length; i++) {
      innerArgs.push(arguments[i])
    }

    return _this.call(context, args.concat(innerArgs))
  }
}



// problem 2 -

// What is an anagram? Well, two words are anagrams of each other if they both
// contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false
// Write a function that will find all the anagrams of a word from a list.
// You will be given two inputs a word and an array with words. You should
// return an array of all the anagrams or an empty array if there are none.
// For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []


function anagrams(word, array) {

	var a1 = [];
	var a2 = [];
	var word2 = word.split('').sort(' ').join('');

	for (var i = 0; i < array.length; i++) {
		   var letters = array[i].split('').sort(' ');
		   		a1.push(letters.join(''));

		  if (a1[i] === word2) {
		  		a2.push(a1[i]);

		  }

	}

	return a2;

}



// 3) toy - return the first number in the array that occurs an even number of times

var a1 = [1, 2, 3, 1];

function func(array) {
 var a2 = []


  for (var i = 0; i < array.length; i++) {
              var test = array[i];
        for (var j = i + 1; j < array.length; j++) {
          if (test === array[j]) {
                     a2.push(test);

                  }
                }

              }

  return a2;

}

console.log(func([1, 2, 3, 1]));

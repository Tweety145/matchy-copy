/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = 'Dog';
animal['name'] = 'Bandit';
animal.noises = [];

console.log(animal);



//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = 'quack';
noises.push('honk');
noises.unshift('sneeze');
noises[noises.length] = 'chirp';
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
///////////////////////////////////////////////////////////////////
/* *******************************************************************
animal['noises'] = noises;
animal.noises.push('woosh');
console.log(animal);

* Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *bracket or dot notation
 * 2. What are the different ways of accessing elements on arrays?
 *by using square bracket notation or by using the at() method * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);
let duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck);
console.log(animals); 
let frog = { species: 'frog', name: 'Jim', noises: ['rabut', 'hops'] };
let turtle = { species: 'turtle', name: 'Jack', noises: ['crickety', 'noew'] };
animals.push(frog, turtle);
console.log(animals);
console.log(animals.length);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var friends = [];
function getRandom(arr){
  return Math.floor(Math.random() * arr.length);

}
 var randomINdex = getRandom(animals);
 var randomFriendName = animals[randomIndex].name;
 friends.push(randomFriendName);
 console.log(friends);
 animals[0]['friends'] = friends;
 console.log(animals[0]);
 console.log(animals);


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
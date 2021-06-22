'use strict';
 
///////////////////////////////////////////////////////////////////////
// Maps - maps are more useful than Sets.
// A map is a data structure that we can use to map values to keys
// The difference between maps and objects is that maps' keys can be any other data type whereas for objects the keys must be string types

const pizzeria = new Map();
pizzeria.set('name', 'Classico Italiano');
pizzeria.set(1, 'Firenze, Italy');
console.log(pizzeria.set(2, 'Lisbon, Portugal'));

// we can chain set methods
pizzeria.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
.set('open', 11)
.set('close', 23)
.set(true, 'We are open :D')
.set(false, 'We are closed :(');

console.log(pizzeria.get('name'));
console.log(pizzeria.get(true));

// This is clever but not very readable - comparisons without using if/else or ternary
const time = 21;
console.log(pizzeria.get(time > pizzeria.get('open') && time < pizzeria.get('close')));

// Check if a map contains a certain key
console.log(pizzeria.has('categories'));
pizzeria.delete(2);
// pizzeria.clear();
console.log(pizzeria);
console.log(pizzeria.size);

// Can use arrays as Object keys
const arr = [1,2];
pizzeria.set(arr, 'Test');
console.log(pizzeria.get(arr));

// Can also use it to handle DOM elements
pizzeria.set(document.querySelector('h1'), 'Heading');
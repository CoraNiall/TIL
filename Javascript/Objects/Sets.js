'use strict';
////////////////////////////////////////////////////////////////////////////////////////////
// Sets - sets are for Unique Values
const ordersSet = new Set([
    'Pasta',
    'Pizza',
    'Risotto',
    'Tagliatelle',
    'Garlic Bread'
  ]);
  
  console.log(ordersSet);
  console.log(new Set('Caroline'));
  
  console.log(ordersSet.size);
  console.log(ordersSet.has('Pizza'));
  console.log(ordersSet.has('Bread'));
  
  // sets have to be unique so the second one will be ignored
  ordersSet.add('Lasagne');
  ordersSet.add('Lasagne');
  ordersSet.delete('Risotto');
  console.log(ordersSet);
  
  // Sets do NOT have indexes so no way of getting values out of sets. All values are unique, so we only want /
  // to know if an element is in the set using 'has()'
  console.log(ordersSet[1]);
  
  for (const order of ordersSet) console.log(order);
  
  // Example: Main use of sets is to remove duplicate values from an array
  const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
  
  const staffUnique = [...new Set(staff)];
  console.log(staffUnique);
  console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);
  console.log(new Set('Caroline Reiss').size);
  
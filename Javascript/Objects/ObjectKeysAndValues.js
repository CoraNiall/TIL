'use strict';

// Using Object.keys() and Object.values() to iterate over an object
const openingHours = {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  };
  
  const properties = Object.keys(openingHours);
  console.log(properties);
  
  let openStr = `We are open on ${properties.length} days: `;
  for (const day of properties) {
    openStr += `${day}, `;
  }
  console.log(openStr);
  
  const values = Object.values(properties);
  console.log(values);

 // Entries object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
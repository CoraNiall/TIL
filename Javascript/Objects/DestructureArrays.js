'use strict';

let dogsJulia;
let dogsKate;
function checkDogs(dogsJulia, dogsKate) {
  let copyDogsJulia = [...dogsJulia];
  let [, dog2, dog3, ...rest] = copyDogsJulia;
  let allDogs = [dog2, dog3, ...dogsKate];
  for (let i = 0; i < allDogs.length; i++) {
    if (allDogs[i] >= 3) {
      console.log(
        `Dog number ${i + 1} is an adult, and is ${allDogs[i]} years old`
      );
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  }
}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

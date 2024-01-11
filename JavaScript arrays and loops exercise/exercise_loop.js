/*
for (let x = 0; x <= 10; x += 2) {
  console.log(x);
}

for (let y = 5; y >= 0; y--) {
  console.log(y);
}

let z = 0;
while (z <= 10) {
  console.log(z);
  z = z + 2;
}

let t = 5;
while (t >= 0) {
  console.log(t);
  t--;
}

const main = [1, 2, 3];
const result = [];

function arrayChange(array) {
  for (let i = 0; i < array.length; i++) {
    result.push(array[i] + 1);
  }
}

arrayChange(main);

console.log(result);
*/

const arrayMain = [1, 2, 3];
const number = 3;

function addNumber(array, num) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(array[i] + num);
  }
  return result;
}

console.log(addNumber(arrayMain, number));

function addArrays(array1, array2) {
  let result = [];

  for(let i = 0; i < array1.length; i++){
    result.push(array1[i] + array2[i]);
  }

  return result;
}
console.log(addArrays([5, 1, 3], [1, 8, 3]));


function greaterThan(nums) {
  let result = 0;
  for(let i = 0; i < nums.length; i++){
    if(nums[i] > 0){
      result += 1;
    }
  }
  return result;
}


console.log(greaterThan([5, -1, 3]));
console.log(greaterThan([-2, -1, 9]));
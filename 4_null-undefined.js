/*
undefined results:- 
1. variable value not assigned
2. function but didn't write return anything
3.function with null return or return not defined
4. parameter that isn't passed
5. property in a object isn't exists
6. array out of index is undefined
7. accessing deleted array element value is undefined
8. variable is define as undefined or explicitly set value to undefined
*/

// 1
let first; 
// console.log(first);

// 2
function secoond(x, y){
    const sum =  x + y;
}
const result = secoond(4, 3);
// console.log(result);

// 3
function add (a, b){
    const addition = a + b;
    result;
}
const additionResult = add(3, 7);
// console.log(additionResult);

const fifth = {
    name: 'sogir', age: 26, location:'bandorban'
};
// console.log(fifth.address);

const sixth = [10, 54, 54, 57];
// console.log(sixth[5]);

delete sixth[2]; //7th
// console.log(sixth[2]);

const eighth = undefined;
console.log(eighth);


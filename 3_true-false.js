/* 
Falsy:
false
0
empty srting
undefined
null
NaN

.....................
Truthy:
true
any number (positive & neg both without 0)
any string including single white space (but without empty string)
array[] even empty array truthy
{} is truthy
anything else that is not falsy will be truthy
.....................
kono ekta variable er value jodi define na kora hoy tahole seta undefined hobe & undefined is a falsy variable
*/
let x ={};
console.log('value of x is ' , x);
if(x){
    console.log('variable is truthy');
}
else{
    console.log('variable is falsy');
}
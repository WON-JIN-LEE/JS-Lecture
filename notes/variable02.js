//number. string, boolean, null. undefined 
let number = 2;
let number2 = number;
console.log(number);
console.log(number2);

number2 = 3;

console.log(number);
console.log(number2);

//number. string, boolean, null. undefined 를 제외한 것이 오브젝트다.
//object 
let obj ={
    name: 'ellie',
    age :5,
}

console.log(obj.name);

let obj2 = obj;
console.log(obj2.name);

obj.name = 'james';

console.log('-----');
console.log(obj.name);
console.log(obj2.name);

let a = 2;
a = 5;

const num = 2;
num = 4;
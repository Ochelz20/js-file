// var y =10;

// let username = prompt('Enter your name')
// console.log(username);
// document.getElementById('name').innerHTML = username


// let school = prompt('Enter your school name')
// console.log(school);
// document.getElementById('school').innerHTML = school

// document.getElementById('message').innerHTML += 'Hello world<br>'

// let address = prompt('Enter your house address')
// console.log(address)
// document.getElementById('location').innerHTML = address

// let sex = prompt('Enter your gender')
// console.log(sex)
// document.getElementById('gender').innerHTML = sex

// // concatenation
// console.log('my name is ' + username + 'I attend' + school );  
// console.log('my name is ' , username , 'I attend' , school );

// // template literal `${}`
// console.log(`my name is ${username}. I attend ${school}`);
// document.getElementById('message').innerHTML += `my name is ${username}. I attend ${school}`

// operators
// arithmetic + - * / % ** ++ --
// assignment = += -= *= /= %= **= ++ -- -=
// logical && || !
// comparison == === != !== >= <=
// ternary ? :


// Assignment

// let firstNum = prompt('Enter the first number')
// console.log(firstNum)

// let secondNum = prompt('Enter the second number')
// console.log(secondNum)

// console.log(firstNum + secondNum)
// console.log(firstNum - secondNum)
// console.log(firstNum * secondNum)
// console.log(firstNum / secondNum)
// console.log(firstNum % secondNum)
// console.log(firstNum ** secondNum)
// console.log(firstNum++ )


let a = '5.4'
let b = '4'
console.log(a);

console.log(a+b);
console.log(Number(a + Number(b)));
console.log(parseInt(a) + parseInt(b));
console.log(parseFloat(a));

let c = '42.5abc'
let d = 5
console.log(Number(c));
console.log(parseInt(c) + d);
console.log(parseFloat(c) + d);

let answer = parseInt(c) + d
document.getElementById('message').innerHTML = `The answer is ${answer}`
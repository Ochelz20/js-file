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

//  let firstNum = prompt('Enter the first number')
// console.log(firstNum)

// let secondNum = prompt('Enter the second number')
// console.log(secondNum)

// let thirdNum = Number(firstNum) + Number(secondNum)
// console.log(thirdNum);



// // console.log(firstNum + secondNum)
// console.log(firstNum - secondNum)
// console.log(firstNum * secondNum)
// console.log(firstNum / secondNum)
// console.log(firstNum % secondNum)
// console.log(firstNum ** secondNum)
// console.log(firstNum++ )

// Assignment on IF CONDITION
 
// let firstNum = 70
//         if (firstNum == 20) {
//                 console.log('true');
                
//         }

//         else{
//                 console.log('false');
                
//         }


//         let secondNum = 60
//         if (secondNum = '60') {
//                 console.log('true')
//         }

//         else if (secondNum == 60 ){
//                 console.log('false');
                
//         }

//         else{
//                 console.log('none')
//         }

//         let thirdNum = 50
//         if(thirdNum == '60') {
//                 console.log(true);
                
//         }

//         else if (thirdNum === 60){
//                 console.log('false');
                
//         }

//         else {
//                 console.log('none');
                
//         }

//         let forthNum = 45
//         if (forthNum != '30') {
//                 console.log('false');
                
//         }

//         else{
//                 console.log('true');
                
//         }

//         let fifthNum = 40
//         if(fifthNum == '39' ) {
//                 console.log('false');
                
//         }

//         else if (fifthNum !== 40) {
//                 console.log('true');
                
//         }

//         else{
//                 console.log('none');
                
//         }


// let age = 19
// if(age == 18){
//     console.log('you are 18')
// }
// else if(age < 18){
//     console.log('you are not yet an adult');
// }
// else if(age > 70){
//     console.log('you are an oldie')
// }
// else if(age !=='19'){
//     console.log('you are 19')
// }
// else if(age === '16'){
//     console.log('you are 16')
// }
// else{
//     console.log('you are not 18')
// }

// let c = 54
// if(c == '35'){
//     console.log('c is 35')
// }

// else if(c > 2){
//     console.log('c is greater than 2')
// }

// else if(c === '54'){
//     console.log('c is 54')
// }

// else{
//     console.log('c is not 35')
// }


// let a = '5.4'
// let b = '4'
// console.log(a);

// console.log(a+b);
// console.log(Number(a + Number(b)));
// console.log(parseInt(a) + parseInt(b));
// console.log(parseFloat(a));

// let c = '42.5abc'
// let d = 5
// console.log(Number(c));
// console.log(parseInt(c) + d);
// console.log(parseFloat(c) + d);

// let answer = parseInt(c) + d
// document.getElementById('message').innerHTML = `The answer is ${answer}`



// if (condition){
//     //code to execute
// }

// let a = 5
// console.log(a==6);      //This is to check for true or false

// if(a=='5'){
//     console.log('The statement is true');
// }
// else if(a===5){
//     console.log('The statement is also true')
// }
// else{
//     console.log('The statement is not true')
// }

// if(a !='5'){
//     console.log('The statement is true');
// }
// else{
//     console.log('The statement is not true')
// }

//logical operators


//LOGICAL && (it only execute when both is true)
// let d = 15
// if (d > 10 && d < 20){
//     console.log('d is between 10 and 20')
// }

// if(d > 10 && d == 20){
//     console.log('This statement is not true')
// }

// if(d < 10 && d == 15){
//     console.log('This statement is also not true')
// }

// if(d < 10 && d > 25){
//     console.log('This statement is definitely not true')
// }

// if(d > 14 && d == 15){
//     console.log('This statement is true')
// }


// //LOGICAL || (it only execute when either of them is true)


// let e = 15

// if (e > 10 || e < 20){
//     console.log('d is between 10 and 20')
// }

// if(e > 10 || e == 20){
//     console.log('This statement is not true')
// }

// if(e < 10 || e == 15){
//     console.log('This statement is also not true')
// }

// if(e < 10 || e > 25){
//     console.log('This statement is definitely not true')
// }

// if(e > 14 || e == 15){
//     console.log('This statement is true')
// }

// let age = 27
// if(age >=13 && age < 20){
//     console.log('You are a teenager')
// }

// else if(age > 21 && age <= 40){
//     console.log('You are an adult')
// }

// else if(age >= 1 && age <= 3){
//     console.log('You are a toddler')
// }

// else{
//     console.log('You are not a teenager, adult, or toddler')
// }

// //LOGICAL NOT (!)

// let isLoggedIn = true
// if(isLoggedIn){
//     console.log('You are logged in')
// }

// else{
//     console.log('You are not logged in')
// }

// let isCompleted = false
// if(!isCompleted){
//     console.log('Your task is not completed')
// }

// else{
//     console.log('Your task is completed')
// }


// let grade1 = prompt('Enter value here')
//         let grades = Number(grade1) 

//         if (grades >= 70 || grades <= 100){
//             console.log('Excellent');
//             document.getElementById('result').innerHTML = (`${grades} is EXCELLENT`);           
//         }

//         else if(grades >= 60 || grades == 69){
//             console.log('very good');
//              document.getElementById('result').innerHTML = (`${grades} is Very Good`);
//         }
//          else if(grades >= 50 || grades == 59){
//             console.log('Good');
//              document.getElementById('result').innerHTML = (`${grades} is Good`) 
//         }

//          else if(grades >= 40 || grades == 49){
//             console.log('Pass');
//              document.getElementById('result').innerHTML = (`${grades} is Pass`)
//         }

//         else if(grades >=0 || grades == 39){
//             console.log('Fail');
//             document.getElementById('result').innerHTML = (`${grades} is Fail`)    
//         }

//         else if (grades < 0 && grades > 100){
//             console.log('Invalid Input');
//             document.getElementById('result').innerHTML = (`${grades} is an Invalid Input`)
//         }




        function greetings(){
            console.log('Good morning everyone');
            document.getElementById('myScreen').innerHTML = 'Good morning everyone'
        }
        greetings()

        function introduce(){
            let myName = prompt('Enter your name')
            console.log(`My name is ${myName}`);
            document.getElementById('myScreen').innerHTML += `My name is ${myName}`
        }

        introduce()

        function school(){
            console.log(`The name of my school is SQI college of ICT`)
        }
        school()

        function course(){
            console.log('I am studying software engineering at SQI');
        }
        course()
        

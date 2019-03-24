// // ES5
// /*var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';

// console.log(name5);

// // ES6
// const name6 = 'Jane Smith';

// let age6 = 23;

// name6 = 'Jane Miller';

// console.log(name6);*/


// // ES5
// function driversLicence5(passedTest){
//     if(passedTest){
//         var firstName = 'John';
//         var yearOfBirth =1990;
//     }

//     console.log(firstName + ', born in ' + yearOfBirth + ',is now officially allowed to drive a car');

// }

// driversLicence5(true);

// //ES6

// function driversLicence6(passedTest){

//     let firstName;
//     const yearOfBirth = 1990;

//     if(passedTest){
//         firstName = 'John';
//     }

//     console.log(firstName + ', born in ' + yearOfBirth + ',is now officially allowed to drive a car');
// }

// driversLicence6(true);


// // ES6
// {
//     const a = 1;
//     let b = 2;
//     var c = 3
// }

// // console.log(a+b);
// console.log(c);

// // ES5
// (function() {
//     var c =3;
// })();

// console.log(c);

// // Lecture: Strings

// // let firstName = 'john';
// // let lastName = 'Smith';
// // const yearOfBirth = 1990;

// // function calcAge(year){
// //     return 2016 - year;
// // }

// // ES5

// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function(){
//         var self = this;
//         document.querySelector('.green').addEventListener('click', function(){
//             var str = 'This is box number ' + self.position + ' and it is ' + self.color;
//             alert(str);
//         })
//     }
// }

// // box5.clickMe();

// // ES6
// const box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: function(){
//         document.querySelector('.green').addEventListener('click', ()=>{
//             var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//             alert(str);
//         })
//     }
// }

// box6.clickMe();

// // ES6
// const box66 = {
//     color: 'green',
//     position: 1,
//     clickMe: ()=>{
//         document.querySelector('.green').addEventListener('click', ()=>{
//             var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//             alert(str);
//         })
//     }
// }

// // box66.clickMe();

// function Person(name) {
//     this.name = name;
// }

// // ES5
// Person.prototype.myFriends = function(friends){
//     var arr = friends.map(function(el){
//         return this.name + ' is friends with ' + el;
//     }.bind(this));

//     console.log(arr);
// }

// var friends = ['Bob', 'Jane', 'Mark'];

// new Person('John').myFriends(friends);

// // ES6
// Person.prototype.myFriends = function(friends){
//     var arr = friends.map((el)=>{
//         return this.name + ' is friends with ' + el;
//     });

//     console.log(arr);
// }

// var friends = ['Bob', 'Jane', 'Mark'];

// new Person('Mike').myFriends(friends);


// // ES5
// var john = ['John', 26];
// //var name = john[0];
// //var age = john[1];


// // ES6
// const [name, age] = ['John', 26];

// console.log(name);
// console.log(age);

// const obj = {
//     firstName: 'John',
//     lastName: 'Smith'
// }

// const { firstName, lastName } = obj;

// console.log(firstName, lastName);

// const {firstName: a, lastName: b} =obj;

// console.log(a,b);

// function calcAgeRetirement(year){
//     const age = new Date().getFullYear() - year;
//     return [age, 65 - age];
// }

// const [age2, retirement] = calcAgeRetirement(1990);
// console.log(age2);
// console.log(retirement);

// // Lecture: Arrays

// const boxes = document.querySelectorAll('.box');

// // ES5

// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(cur){
//     cur.style.backgroundColor = 'dodgerblue';
// })

// // ES6
// const boxesArr6 = Array.from(boxes);

// boxesArr6.forEach( cur => {
//     cur.style.backgroundColor = 'dodgerblue';
// })

// // ES5
// /*
// for(var i =0; i < boxesArr5.length; i ++){
//   if(boxesArr5[i].className === 'box blue'){
//       //continue;
//       break;
//   } 
  
//   boxesArr5[i].textContent = 'I changed to blue!';
// }*/


// // ES6

// for( const box of boxesArr5)
// {
//     if(box.className.includes('blue'))
//         break;
//     box.textContent = 'I changed to blue!'
// }


// // ES5
// var ages = [12, 17, 8, 21, 14, 11];

// var fullAge = ages.map(function(cur){
//     return cur >= 18;
// });

// console.log(fullAge);
// console.log(fullAge.indexOf(true));
// console.log(ages[fullAge.indexOf(true)]);

// // ES6
// console.log(ages.findIndex(cur => {
//    return cur >= 18;
// }));

// console.log(ages.find(cur => cur >= 18));

// // Lecture: Spread operator

// function addFourAges (a, b, c, d){
//     return a + b + c + d;
// }

// var sum1 = addFourAges(18, 30, 12, 21)

// console.log(sum1);

// // ES5
// var ages = [18, 30, 12, 21]

// var sum2 = addFourAges.apply(null, ages);

// console.log(sum2);

// // ES6
// const sum3 = addFourAges(...ages);

// console.log(sum3);

// const familySmith = ['John', 'Jane', 'Mark'];
// const familyMiller = ['Mary', 'Bob', 'Ann'];

// const bigFamily = [...familySmith, 'Sayantan', ...familyMiller];

// console.log(bigFamily);


// const h = document.querySelector('h1');

// const box = document.querySelectorAll('.box');

// const all = [h, ...box];

// Array.from(all).forEach(cur => {
//     cur.style.color = 'purple';
// })

// // Lecture: Rest parameters

// /*
// // ES5
// function isFullAge5(){
//     // console.log(arguments);
//     var argsArr = Array.prototype.slice.call(arguments);
//     console.log(argsArr);
// }

// isFullAge5(1990, 1999, 1965);

// // ES6

// function isFullAge6(...years){
//     console.log(years);    
// }

// isFullAge6(1990, 1999, 1965);*/

// // ES6
// function isFullAge5(limit){
//     // console.log(arguments);
//     var argsArr = Array.prototype.slice.call(arguments, 1);
//     argsArr.forEach(cur=> console.log((2016 - cur) >= limit));
//     // console.log(argsArr);
// }

// isFullAge5(21, 1990, 1999, 1965);

// // ES6

// function isFullAge6(limit, ...years){
//     // console.log(years); 
//     // console.log(limit);   
// }

// isFullAge6(21, 1990, 1999, 1965);


// // Lecture: Default parameters

// // ES5
// /*function SmithPerson(firstName, yearOfBirth, lastName, nationality){
//     lastName === undefined ? lastName = 'Smith' : lastName = lastName;
//     nationality === undefined ? nationality = 'american' : nationality = nationality;
    
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }

// var john = new SmithPerson('John', 1998);*/

// // ES6

// function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american'){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }

// var john = new SmithPerson('John', 1998);

// // Lecture: Maps

// const question = new Map();

// question.set('question', 'What is the most popular language?');
// question.set(1, 'java');
// question.set(2, 'python');
// question.set(3, 'javascript');
// question.set(4, 'go');
// question.set('correct', 3);
// question.set(true, 'Correct answer :D');
// question.set(false, 'Wrong, please try again!');

// // console.log(question.get('question'));
// // console.log(question.size);

// if(question.has(4)){
//     // question.delete(4);
//     // console.log('Answer 4 is here');
// }

// // question.clear();

// question.forEach((value, key)=>{
//     // console.log(`this is ${key}, and it's value ${value}`)
// })

// for(let [key, value] of question.entries()){
//     // console.log(key);
//     // console.log(value);

//     // if(typeof(key) === 'number') {
//     //     console.log(`Anser ${key}: ${value}`)
//     // }
// }

// // const ans = parseInt(prompt('Write the correct answer'));

// // console.log(question.get(ans === question.get('correct')));

// // Lectures: Classes

// // ES5
// var Person5 = function(name, yearOfBirth, job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person5.prototype.calculateAge = function(){
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
// }

// var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals)
// {
//     Person5.call(this, name, yearOfBirth, job);
//     this.olympicGames = olympicGames;
//     this.medals = medals;
// }

// Athlete5.prototype = Object.create(Person5.prototype);

// Athlete5.prototype.wonMedal = function(){
//     this.medals++;
//     console.log(this.medals);

// }

// var john5 = new Person5('john', 1990, 'teacher');

// var johnAthlete5 = new Athlete5('john', 1990, 'teacher', 4, 10);

// johnAthlete5.calculateAge();
// johnAthlete5.wonMedal();



// // ES6

// class Person6{
//     constructor(name, yearOfBirth, job){
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     }

//     calculateAge(){
//         var age = new Date().getFullYear - this.yearOfBirth;
//         console.log(age);
//     }

//     static greeting(){
//         console.log('Hey there!');
//     }
// }

// class Athlete6 extends Person6
// {
//     constructor(name, yearOfBirth, job, olympicGames, medals){
//         super(name, yearOfBirth, job);
//         this.olympicGames = olympicGames;
//         this.medals = medals;
//     }

//     wonMedal(){
//         this.medals++;
//         console.log(this.medals);
//     }
// }

// const john6 = new Person6('john', 1990, 'teacher');

// const johnAthlete6 = new Athlete6('John', 1978, 'swimmer', 3, 12);

// johnAthlete6.wonMedal();


// Person6.greeting();

// Coding Challange 8

class Element {
    constructor(name, buildYear)
    {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element{
    constructor(name, buildYear, parkArea, numTree){
        super(name, buildYear);
        this.parkArea = parkArea;
        this.numTree = numTree;
    }

    treeDensity(){
        let density = this.numTree/this.parkArea;
        console.log(`${this.name} has a tree density of ${density} trees per square km`);
    }
}

class Street extends Element{
    constructor(name, buildYear, length, size = 3){
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet(){
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        

        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street`);
    }
}

function calc(arr){
    const sum = arr.reduce((prev, cur, index)=> prev + cur, 0);

    return [sum, sum/arr.length];
}

const allParks = [new Park("Green Park", 1987, 0.2, 215), new Park("National Park", 1894, 2.9, 3541), new Park("Oak Park", 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4), new Street('Evergreen Street', 2008, 2.7, 2),
                    new Street('4th Strret', 2015, 0.8), new Street('Sunset Boulevard', 1982, 2.5, 5)];

function reportParks(p){
    console.log('-----PARKS REPORT-----');
    
    // Density
    p.forEach(element => {
        element.treeDensity();
    });

    // Average age

    const ages = p.map(el => (new Date().getFullYear() - el.buildYear));
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} park have an average of ${avgAge} years`);
  
    //Which park has more than 1000 trees
    const i = p.map(el=> el.numTree).findIndex(el=> el>=1000);

    console.log(`${p[i].name} has more than 1000 trees`);
}

function reportStreets(s){
    console.log('-----STREETS REPORT-----');

    const [totalLength, avgLength] = calc(s.map(el => el.length));

    console.log(`Our ${s.length} streets have a total length of ${totalLength}km, with an average of ${avgLength}km`)

    s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);
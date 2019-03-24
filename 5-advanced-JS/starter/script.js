/*var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    // this.calculateAge = ()=>{
    //     console.log(2019-this.yearOfBirth)
    // }
}

Person.prototype.calculateAge = function(){
    console.log(2019-this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var mark = new Person('John', 1994, 'designer');
var jane = new Person('John', 1966, 'retired');

john.calculateAge();
mark.calculateAge();
jane.calculateAge();

console.log(john.lastName);
console.log(mark.lastName);
console.log(jane.lastName);*/

// console.log(typeof(typeof(typeof(john))));

//Object.create

/*var personProto = {
    calculateAge: function(){
        console.log(2019 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);

john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

john.calculateAge(this.yearOfBirth);

var jane = Object.create(personProto, {
    name: {value: 'Jane'},
    yearOfBirth: {value: 1969},
    job: { value: 'design'}
})*/

//Primitives vs objects
/*
var a =23;
var b=a;

a = 46;

console.log(a, b);*/
//Objects
/*var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;
obj1.age =30;

console.log(obj1.age, obj2.age);*/

//Functions
/*var age =27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
}

function change(a,b) {
    a = 30;
    b.city = 'San Francisco'
}

change(age, obj);

console.log(age, obj.city);*/

/*var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    var arrRes = [];
    for(var i = 0; i<arr.length; i++)
    {
        arrRes.push(fn(arr[i]));
    }

    return arrRes;
}

function isFullAge(el)
{
    return el>=18;
}

function maxHeartRate(el){
    if(el>= 18 && el<=81)
        return Math.round(206.9 - (0.67 * el));
    else   
        return -1;
}

function calculateAge(el){
    return 2019 - el;
}

var ages = arrayCalc(years, calculateAge);
var isFullAge = arrayCalc(years, isFullAge);
var rate = arrayCalc(years, maxHeartRate);
console.log(ages);
console.log(isFullAge);
console.log(rate);*/
/*
function interviewQuestion(job) {
    if(job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    }
    else if(job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?' );
        }
    }
    else{
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var techerQuestion = interviewQuestion('teacher');
techerQuestion('John');

interviewQuestion('designer')('Mark');

(function (goodluck){
    var score = Math.random() * 10;
    console.log(score >= (5 - goodluck));
})(6)

function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2019 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementIndia = retirement(60);

retirementUS(1990);
retirementIndia(1990);

retirement(66)(1990);


var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay){
        if(style === 'formal')
            console.log('Good ' + timeOfDay + 
                        ', Ladies and gentlemen! I\'m' + 
                        this.name + ', I\'m a' + this.job);
        else if(style === 'friendly'){
            console.log('Hey! What\'s up? I\'m' 
            + this.name + ', I\'m a' + this.job 
            + 'and I\'m' + this.age + ' years old.');
        }
    }
}

john.presentation('formal', 'morning')

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation.call(emily, 'friendly', 'afternoon');
// john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'formal');

johnFriendly('morning');
johnFriendly('night');
johnFriendly('dawn');*/

(function(){
    function Question(question, answers, correct)
    {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion = 
    function(){
        console.log(this.question);
        for(var i = 0; i<this.answers.length; i++)
        {
            console.log(i + ':' + this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = 
        function(ans, callback)
        {
            var sc;
            if(ans === this.correct)
            {
                console.log('Correct answer!')
                sc = callback(true);
            }
            else{
                console.log('Wrong answer. Try Again!!!');
                sc = callback(false);
            }

            this.displayScore(sc);
        }
    
    Question.prototype.displayScore = 
        function(score){
            console.log('Your current score is:' + score);
            console.log('------------------------------');
        }

    var q1 = new Question('Is JavaScript the coolest programing language in world',
                        ['Yes','No'], 0);
    
    var q2 = new Question('What is the name of course\'s teacher?',
                        ['John','Micheal', 'Jonas'], 2);
     
    var q3 = new Question('What does best describe coding?',
                        ['Boring','Hard', 'Fun', 'Tedious'], 2);

    function score(){
        var sc = 0;
        return function(correct){
            if(correct)
                sc++;
            return sc;
        }
    }

    var keepScore = score();

    function nextQuestion(){

        var questions = [q1, q2, q3]
        
        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();

        var answer = (prompt('Please select the correct answer.'));


        if(answer !== 'exit'){            
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }
    
    nextQuestion();
    
})();

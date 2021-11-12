// VALUES, VARIABLES AND DATA TYPES

/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Josh');
console.log(23);

let firstName = "Jonas";

console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1315;

// More descriptive
let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

// Less descriptive
let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'jonas');

javascriptIsFun = 'Yes!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);

console.log(typeof null);
*/

// CONST, VAR, LET

/*
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;
*/

// BASIC OPERATORS

/*
// Math operators
let currentYear = 2037;
const ageJosh = currentYear-1996;
const ageSarah = currentYear-2018;
console.log(ageJosh, ageSarah);

console.log(ageJosh * 2, ageJosh /10, 2**3);
// 2 ** 3 means 2 to the power of 3

const firstName = 'Josh';
const lastName = 'Stewart';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; //x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x); // should equal 99

// Comparison operators
console.log(ageJosh > ageSarah); // <, >, <=, >=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(currentYear - 1991 > currentYear - 2018);
*/

// Operator Precedence

/*
const now = 2037;
const ageJosh = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJosh + ageSarah) / 2;
console.log(ageJosh, ageSarah, averageAge);
*/

// Strings and template literals

/*
const firstName = 'Josh';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const josh = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(josh);

const joshNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(joshNew);

console.log(`just a regular string`);

console.log('string with \n\
multiple \n\
lines');

console.log(`string with
multiple
lines`);
*/

// If / Else Statements

/*
const age = 13;
if (age >= 18) {
    console.log('Sarah can start driving license!');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012; 
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

// Type Conversion and Coercion

/*
//conversion
let inputYear = '1991';
console.log(Number(inputYear), inputYear);
inputYear = Number(inputYear);
console.log(inputYear + 18);

console.log(Number('josh'));
console.log(typeof NaN);

console.log(String(23), 23);

//coercion
//when two values have different types
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' > '18');

let n = '1' + 1;
n = n - 1;
console.log(n);
*/

// Truthy and Falsey Values

// 5 falsey values: 0, '', undefined, null, NaN

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Josh'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log('You should get a job');
}

let height;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}
*/

// Equality operators

/*
const age = 18;
if(age === 18) console.log('You just became an adult :D (strict)');

if(age == 18) console.log('You just became an adult :D (loose)')

const favouriteNum = Number(prompt("What's your favourite number"));

console.log(favouriteNum);
console.log(typeof favouriteNum);

if (favouriteNum === 23) { // 22 === 23 -> FALSE
    console.log('Cool! 23 is an amazing number');
} else if (favouriteNum === 7) {
    console.log('7 is also a cool number');
} else {
    console.log('number is not 23 or 7');
}

if (favouriteNum !== 23) {
    console.log('why not 23!');
}
*/

////////////////////////////////

//ass 1 (variables)
const country = 'Australia';
const continent = 'Australia';
let populationInMillions = '27';
console.log(country, continent, populationInMillions);

//ass 2 (data types)
const isIsland = true;
let language;
console.log(isIsland, populationInMillions, country, language);

//ass 3 ()
language = 'english';

//ass 4 
let halfPopulationInMillions = populationInMillions /2;
halfPopulationInMillions++;
console.log(halfPopulationInMillions);

console.log(populationInMillions > 6);
console.log(populationInMillions < 33);

console.log(
    country + ' is in ' + continent + ', and its ' + 
    populationInMillions + ' million people speak ' + language
);

//ass 5 (if else)
if (populationInMillions > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33 - populationInMillions} million below average`);
}

//ass 6 (conversion and coercion)
'9' - '5'; // 4
'19' - '13' + '17'; // 617
'19' - '13' + 17; // 23
'123' < 57; // false
5 + 6 + '4' + 9 - 4 - 2; // 1143

//ass 7 (Equality operators)
const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

if (numNeighbours === 1) {
    console.log("Only 1 border!");
} else if (numNeighbours > 1) {
    console.log("more than 1 border");
} else {
    console.log("No borders");
}


////////////////////////////////

// CODING CHALLENGE #1
const mark = {
    firstName: 'Mark',
    height: 1.69,
    weight: 78,
    bmi: ''
};

const john = {
    firstName: 'John',
    height: 1.88,
    weight: 1000,
    bmi: ''
};

let people = [mark, john];

for(let i = 0; i < people.length; i++) {
    people[i].bmi = calculateBmi(people[i].weight, people[i].height);
}
// const markBmi = calculateBmi(mark.weight, mark.height);
// const johnBmi = calculateBmi(john.weight, john.height);

function calculateBmi(weight, height) {
    return weight / (height ** 2);
}

function checkIfPersonHasHigherBMI(personAPositionInArray, personBPositionInArray) {
    return people[personAPositionInArray].bmi > people[personBPositionInArray].bmi;
}

console.log(people[0].bmi, people[1].bmi, checkIfPersonHasHigherBMI(0, 1));
// markHigher


// CODING CHALLENGE #2 using code from challenge 1

function checkWhoHasHigherBMI(personAPositionInArray, personBPositionInArray) {
    if (people[personAPositionInArray].bmi > people[personBPositionInArray].bmi) {
        return personAPositionInArray;
    } else {
        return personBPositionInArray;
    }
}

function checkWhoHasLowerBMI(personAPositionInArray, personBPositionInArray) {
    if (people[personAPositionInArray].bmi < people[personBPositionInArray].bmi) {
        return personAPositionInArray;
    } else {
        return personBPositionInArray;
    }
}
console.log(checkWhoHasHigherBMI(0,1));
console.log(checkWhoHasLowerBMI(1,0));

console.log(`${people[checkWhoHasHigherBMI(0,1)].firstName}'s BMI (${people[checkWhoHasHigherBMI(0,1)].bmi}) is higher than ${people[checkWhoHasLowerBMI(0,1)].firstName}'s (${people[checkWhoHasLowerBMI(0,1)].bmi})!`);

// Strict Mode

'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;
*/

// Functions

/*
function logger() {
    console.log('My name is Josh');
}
// calling / running / invoking function
logger();
logger();
logger();

//functions can receive data and return data. Like machines.
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');

// --functions assignment
function describeCountry(country, population, capitalCity) {
    console.log(`${country} has ${population} million people and its capital city is ${capitalCity}`);
}

describeCountry('dad', 7, 'daddy');
describeCountry('mum', 4, 'mummy');
describeCountry('josh', 5, 'joshy');
*/

// Function Declarations vs Expressions

/*
//function declaration
function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
}

const age1 = calcAge1(1991);
console.log(age1);

//function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);

//we can call function declarations before they're defined in the code
//this is not possible with function expressions

// --function delcaration and expressions assignment

function percentageOfTheWorld1(population){
    return (population/7900)*10;
}

const percent1 = percentageOfTheWorld1(7);
const percent2 = percentageOfTheWorld1(983);
const percent3 = percentageOfTheWorld1(244);
console.log(percent1, percent2, percent3);

const percentageOfTheWorld2 = function (population) {
    return (population/7900)*10;
}

const percent11 = percentageOfTheWorld2(7);
const percent21 = percentageOfTheWorld2(983);
const percent31 = percentageOfTheWorld2(244);
console.log(percent11, percent21, percent31);
*/

// Arrow Function

/*
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1996, "josh"));
console.log(yearsUntilRetirement(1980, "bob"));

// --arrow functions assignment
*/
// const percentageOfTheWorld3 = (population) => {
//     return (population/7900)*10;
// }
/*
const percent12 = percentageOfTheWorld3(7);
const percent22 = percentageOfTheWorld3(983);
const percent32 = percentageOfTheWorld3(244);
console.log(percent12, percent22, percent32);

*/

// Functions Calling Other Functions

/*
function cutFruitPieces(fruit){
    return fruit*2;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces}
pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2,3));

// --functions calling other functions assignment

function describePopulation(country, population) {
    return `${country} has ${population} million people, which is about 
    ${percentageOfTheWorld3(population)} of the world.`
}

console.log(describePopulation('Australia', 28));
*/

// Reviewing Functions

/*
const calcAge = function(birthYear){
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName){
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;

    }
}

console.log(yearsUntilRetirement(1991, 'Josh'));
console.log(yearsUntilRetirement(1970, 'Mike'));
*/

// Intro to Arrays

/*
const friend1 = 'josh';
const friend2 = 'steven';
const friend3 = 'jack';

const friends = ['josh', 'steven', 'jack', 'trevor'];
console.log(friends);
const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] = 'jarrod';
console.log(friends);
// friends = ['bob', 'alice'];

const firstName = 'Josh';
const josh = [firstName, 'Stewart', 2037 -1996, 'teacher', friends];

console.log(josh);
console.log(josh.length);

const calcAge = function(birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2022, 1934, 1233];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])];
console.log(ages);
*/

// Array Methods

/*
// Add elements
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove Elements
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);
friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));

if (friends.includes('Steven')){
    console.log('You have a friend named Steven');
}
*/

// -- Array assignment

/*
const populations = [23, 4, 743, 64];
let populationsByWorldPercentile = [];

convertPopulationToWorldPercentage();
console.log(populationsByWorldPercentile);

function convertPopulationToWorldPercentage() {
    for(let i = 0; i< populations.length; i++) {
        populationsByWorldPercentile.push(percentageOfTheWorld1(populations[i]));
    }
}

function percentageOfTheWorld1(population){
    return (population/7900)*10;
}

//country iraq
const neighbours = ['Turkey', 'Iran', 'Syria', 'Jordan', 'Saudi Arabia', 'Kuwait'];
neighbours.push('Utopia');
neighbours.pop();
if (!neighbours.includes('Germany')) {
    console.log('Probably not a European country :D');
}
neighbours[neighbours.indexOf('Kuwait')] = 'Daddy';
console.log(neighbours);
*/

// Intro to Objects

const joshArray = [
    'Jonas',
    'Stewart',
    25,
    'Leader',
    ['Michael', 'Peter', 'Steven']
];

// obj literal
const josh = {
    firstName: 'Josh',
    lastName: 'Stewart',
    age: 25,
    job: 'leader',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(josh);
console.log(josh.lastName);
console.log(josh['lastName']);

const nameKey = 'Name';
console.log(josh['first' + nameKey]);
console.log(josh['last' + nameKey]);

// console.log(josh.'last' + nameKey);

const interestedIn = prompt('What do you want to know about Josh? Choose between friends, firstName, lastName, age, job and friends');

if(josh[interestedIn]) console.log(josh[interestedIn]);

josh.location = 'Australia';
josh['instagram'] = '@joshstewarthair';

//little random challenge
console.log(`${josh.firstName} has ${josh.friends.length} friends, and his best friend is ${josh.friends[0]}`)




///////////////////////////////////////////////////

// Coding challenge #1

/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const dolphinsAvgScore = calcAverage(85, 54, 41);
const koalasAvgScore = calcAverage(23, 34, 27);

checkWinner(dolphinsAvgScore, koalasAvgScore);

function checkWinner(finalScore1, finalScore2) {
    if(finalScore1 > (finalScore2*2)) {
        console.log(`Dolphins win (${finalScore1} vs. ${finalScore2})`);
    } else if(finalScore2 > (finalScore1*2)) {
        console.log(`Koalas win (${finalScore2} vs. ${finalScore1})`);
    } else {
        console.log('No team wins!');
    }
}

*/

// Coding challenge #2

/*
const bills = [125, 555, 44];
const tips = [];
const total = [];

cycleThroughBillsForTipAmount();
cycleThroughBillsForTotalAmount();

function cycleThroughBillsForTipAmount() {
    for(let i = 0; i < bills.length; i++) {
        tips.push(calculateTip(bills[i]));
    }
}

function cycleThroughBillsForTotalAmount() {
    if(bills.length === tips.length){
        for(let i = 0; i < bills.length; i++) {
            total.push(calculateTotal(bills[i], tips[i]));
        }
    } else {
        consoles.log('Bills and tips are mismatched');
    }   
}

function calculateTip(billValue) {
    if(billValue >= 300 || billValue <= 50){
        return billValue * 0.2;
    } else {
        return billValue * 0.15;    
    }
}

function calculateTotal(bill, tip) {
    return bill + tip;
}

console.log(tips);
console.log(total);
*/
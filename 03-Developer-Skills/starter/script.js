// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const x = 23;

const calcAge = (birthYear) => 2037 - birthYear;

console.log(calcAge(1997));
*/

//USING GOOGLE, STACKOVERFLOW AND MDN


//PROBLEM
//We work for a company building a smart home thermometer. Our most
//recent task is this: "Given an array of termperatures of one day,
//calculate the temperature amplitude. Keep in mind that sometimes
//there might be a sensor error.

let temperatures = [47, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
let temperatures2 = [2, 2, 4, -60, 2, 'error'];

// 1) Understanding the problem
// - What is temp amplitude? Difference between highest and lowest temp
// - How to compute max and min temperatures?
// - Whats a sensor error? And What do we do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it
const defaultValue = temperatures[0];

let keyTemperatureValues = {
  maxTemp: defaultValue,
  minTemp: defaultValue,
  tempAmplitude: defaultValue,
};

temperatures = joinTemperatureRecordings(temperatures, temperatures2);
generateKeyTemperatureValues(temperatures);

console.log(
  `Temperature amplitude (difference between highest and lowest temp) recorded: ${keyTemperatureValues.tempAmplitude}`
);
console.log(`Maximum temperature recorded: ${keyTemperatureValues.maxTemp}`);
console.log(`Minimum temperature recorded: ${keyTemperatureValues.minTemp}`);

function joinTemperatureRecordings(recording1, recording2) {
  return recording1.concat(recording2);
}

function generateKeyTemperatureValues(temperatures) {
  cycleThroughTemperatures(temperatures);
  calculateTemperatureAmplitude();
}

function cycleThroughTemperatures(temperatures) {
  for (let i = 0; i < temperatures.length; i++) {
    let currentTemp = temperatures[i];
    if (ignoreErrors(currentTemp)) continue;
    findMaxTemperature(currentTemp);
    findMinTemperature(currentTemp);
  }
}

function findMaxTemperature(currentTemp) {
  if (currentTemp > keyTemperatureValues.maxTemp)
    keyTemperatureValues.maxTemp = currentTemp;
}

function findMinTemperature(currentTemp) {
  if (currentTemp < keyTemperatureValues.minTemp)
    keyTemperatureValues.minTemp = currentTemp;
}

function calculateTemperatureAmplitude() {
  keyTemperatureValues.tempAmplitude =
    keyTemperatureValues.maxTemp - keyTemperatureValues.minTemp;
}

function ignoreErrors(currentTemp) {
  if (typeof currentTemp !== 'number') {
    console.log('Found error!');
    return true;
  }
}


// const calcTempAmplitude = function (temps) {
//   for (let i = 0; i < temps.length; i++) {
//     let currentTemp = temps[i];
//     if (typeof currentTemp !== 'number') continue;
//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// PROBLEM 2
// Function should now receive 2 arrays of temps

// 1) Understand the problem
// - With two arrays, should we implement functionality twice? - NO just merge two arrays

// 2) Break into sub-problems
// - Merge two arrages



//Debugging with the console and breakpoints

/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'clesius',

    // C) FIX
    // value: Number(prompt('Degrees celsius:')),
  };

  // B) FIND
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY
console.log(measureKelvin());
*/

// CODING CHALLENGE #1

// PROBLEM 2
// We have an array provided with the max temperatures and we want them displayed to
// the console with the day that the max will occur

// 1) Understand the problem
// - we need to associate the day with the maximum
// -

// 2) Break into sub-problems
// - loop through array
// - assign a day to array position
// - display the result

/*
const forcastedMaxTemperatures = [17, 21, 23];
const forcastedMaxTemperatures2 = [12, 5, -5, 0, 4];

printForecast(forcastedMaxTemperatures2);

function printForecast(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]}C in ${i + 1} days...`);
  }
}
*/
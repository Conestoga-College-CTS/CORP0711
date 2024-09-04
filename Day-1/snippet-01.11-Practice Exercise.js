// Array of temperatures in Fahrenheit
let temperaturesF = [32, 68, 100, 212];

// Function to convert Fahrenheit to Celsius
function convertFahrenheitToCelsius(fahrenheit) {
  let temperatureC = (fahrenheit - 32) * 5 / 9;
  return temperatureC;
}

// Function to process an array of temperatures
function processTemperatureArray(temperaturesF) {
  // Iterate through each temperature in the array
  for (let i = 0; i < temperaturesF.length; i++) {
      // Convert the current temperature to Celsius
      let temperatureC = convertFahrenheitToCelsius(temperaturesF[i]);
      // Write the result to the console
      console.log(`${temperaturesF[i]}°F is equal to ${temperatureC.toFixed(2)}°C`);
  }
}

// Process the array of temperatures
processTemperatureArray(temperaturesF);

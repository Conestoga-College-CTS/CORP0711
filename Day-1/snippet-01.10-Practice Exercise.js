// Sample temperature in Fahrenheit
let temperatureF = 98.6;

// Function to convert Fahrenheit to Celsius
function convertFahrenheitToCelsius(fahrenheit) {
  let temperatureC = (fahrenheit - 32) * 5 / 9;
  return temperatureC;
}

// Convert the temperature to Celsius
let temperatureC = convertFahrenheitToCelsius(temperatureF);

// Write the result to the console
console.log(`${temperatureF} F is equal to ${temperatureC.toFixed(2)} C`);
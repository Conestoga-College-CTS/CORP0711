// Array of temperature objects
let temperatures = [
  { value: 32, unit: "F" },
  { value: 100, unit: "F" },
  { value: 0, unit: "C" },
  { value: 22, unit: "C" },
  { value: 212, unit: "F" }
];

// Function to convert Fahrenheit to Celsius
function convertFahrenheitToCelsius(fahrenheit) {
  let temperatureC = (fahrenheit - 32) * 5 / 9;
  return temperatureC;
}

// Function to process an array of temperature objects
function processTemperatureArray(temperatureData) {
  // Iterate through each temperature object in the array
  for (let i = 0; i < temperatureData.length; i++) {
      let tempObj = temperatureData[i];
      let temperatureC;

      // Check the unit and convert to Celsius if necessary
      if (tempObj.unit === "F") {
          temperatureC = convertFahrenheitToCelsius(tempObj.value);
      } else if (tempObj.unit === "C") {
          temperatureC = tempObj.value;
      } else {
          console.log(`Unknown temperature unit: ${tempObj.unit}`);
          continue;
      }

      // Write the result to the console
      console.log(`Temperature ${i + 1}: ${tempObj.value}°${tempObj.unit} = ${temperatureC.toFixed(2)} C`);
  }
}
// Process the array of temperatures
processTemperatureArray(temperatures);

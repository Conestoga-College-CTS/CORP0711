// Array of temperature objects
let temperatures = [
  { value: 32, unit: "F" },
  { value: 100, unit: "F" },
  { value: 0, unit: "C" },
  { value: 22, unit: "C" },
  { value: 212, unit: "F" }
];

class Temperature {
  constructor(value, unit) {
    this.value = value;
    this.unit = unit;
  }

  convertFahrenheitToCelsius() {
    if(this.unit === "F") {
      this.value = (this.value - 32) * 5 / 9;
      this.unit = "C";
    }  
  }

  getTemperature() {
    return `${this.value.toFixed(2)} ${this.unit}`;
  }
}

// Function to convert Fahrenheit to Celsius
function convertFahrenheitToCelsius(fahrenheit) {
  let temperatureC = (fahrenheit - 32) * 5 / 9;
  return temperatureC;
}

// Function to process an array of temperature objects
function processTemperatureArray(temperatureData) {
  // Iterate through each temperature object in the array
  for (let i = 0; i < temperatureData.length; i++) {
      let temperature = new Temperature(temperatureData[i].value, temperatureData[i].unit);
      temperature.convertFahrenheitToCelsius();

      // Write the result to the console
      console.log(`Temperature ${i + 1}: ${temperature.getTemperature()}`);
  }
}
// Process the array of temperatures
processTemperatureArray(temperatures);

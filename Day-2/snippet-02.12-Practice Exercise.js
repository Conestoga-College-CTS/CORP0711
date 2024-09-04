/**
 * Add to the program from previous exercise to find the average temperature value using reduce() function.
 * Write a function that converts the temperature readings from Celsius to Fahrenheit and returns an array of readings.
 * Write a function that filters the readings above a certain threshold and returns an array of readings.
  
 */

const iotDevice = {
  id: "device01",
  type: "temperatureSensor",
  status: "active",
  location: "Living Room",
  readings: []
};

function addReading(device, reading) {
  device.readings.push(reading);
}

function updateStatus(device, newStatus) {
  device.status = newStatus;
}

// Adding a reading
addReading(iotDevice, { timestamp: new Date().toISOString(), value: 22.5 });
addReading(iotDevice, { timestamp: new Date().toISOString(), value: 25.2 });

// Updating the status
updateStatus(iotDevice, "inactive");

console.log(iotDevice);

// Enumerate object properties
for (const key in iotDevice) {
  console.log(`${key}: ${iotDevice[key]}`);
}

// Iterate through readings
function logReadings(device) {
  device.readings.forEach(reading => {
    console.log(`Timestamp: ${reading.timestamp}, Value: ${reading.value}`);
  });
}

logReadings(iotDevice);

function calculateAverageReading(device) {
  const total = device.readings.reduce((sum, reading) => sum + reading.value, 0);
  return total / device.readings.length;
}

function convertReadingsToFahrenheit(device) {
  return device.readings.map(reading => ({
    timestamp: reading.timestamp,
    value: (reading.value * 9/5) + 32
  }));
}

function filterReadingsAboveThreshold(device, threshold) {
  return device.readings.filter(reading => reading.value > threshold);
}

const fahrenheitReadings = convertReadingsToFahrenheit(iotDevice);
const highReadings = filterReadingsAboveThreshold(iotDevice, 25);
const averageReading = calculateAverageReading(iotDevice);

console.log(fahrenheitReadings);
console.log(highReadings);
console.log(averageReading);



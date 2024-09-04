/**
 * Enumerate through the properties of the iotDevice object created in Exercise 1 and print each key-value pair. 
 * Write a function that iterates through the readings array of the device and logs each reading.
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

/**
 * Write a program that works with JSON object representing an IoT device with properties like id, type, status, location, and readings (array). 
 * Write a function to add a new reading to the device's readings property as { timestamp: ’ 2024-01-01T13:24:14.250Z’, value: 22.5 }. 
 * Write a function to update the status of the device.
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

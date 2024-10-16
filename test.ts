import * as mqtt from 'mqtt';

// Generate a random string to make the topics unique
function generateRandomString(length: number) {
  return Math.random().toString(36).substring(2, 2 + length);
}

function main() {
  const uniqueId = generateRandomString(5);  // Generate a random 5-character string

  // MQTT broker URL (using the free public Mosquitto broker)
  const brokerUrl = 'mqtt://test.mosquitto.org';  // Public MQTT broker

  // Topics for publishing and subscribing, with the unique ID appended
  const publishTopic = `home/sensors/temperature/${uniqueId}`;
  const subscribeTopic = `home/commands/${uniqueId}`;

  // Connect to the MQTT broker
  const client = mqtt.connect(brokerUrl);

  // Handle the connection event
  client.on('connect', () => {
    console.log('Connected to MQTT broker!');

    // Subscribe to the 'home/commands/uniqueId' topic
    client.subscribe(subscribeTopic, (err) => {
      if (!err) {
        console.log(`Successfully subscribed to ${subscribeTopic}`);
      } else {
        console.error('Failed to subscribe:', err);
      }
    });

    // Publish random temperature every 5 seconds
    setInterval(() => {
      const temperature = (Math.random() * 15 + 15).toFixed(2);  // Generate random temperature between 15°C and 30°C
      const localDate = new Date();
      const offset = localDate.getTimezoneOffset() * 60000; // Offset in milliseconds
      const localISOTime = new Date(localDate.getTime() - offset).toISOString().slice(0, -1);
      const payload = JSON.stringify({
        temperature: `${temperature}°C`,
        timestamp: localISOTime
      });
      client.publish(publishTopic, payload);
      console.log(`Published temperature: ${temperature}°C with timestamp: ${localISOTime} to ${publishTopic}`);
    }, 5000);  // Publish every 5 seconds
  });

  // Handle received messages on the subscribed topic
  client.on('message', (topic, message) => {
    console.log(`Received message on ${topic}: ${message.toString()}`);
  });
}

main();

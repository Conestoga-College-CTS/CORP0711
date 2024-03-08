# Node.js Microservice for Appending Messages to a File

This project is a simple Node.js microservice that appends messages received as URL parameters to a text file. It's built using Express, a fast, unopinionated, minimalist web framework for Node.js. This microservice is ideal for simple logging purposes, such as keeping track of events or messages in a lightweight manner.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine (Download from [Node.js official site](https://nodejs.org/))

## Usage

1. Clone the repository or download the source code to your local machine.

2. Navigate to the project directory:

    ```bash
    cd Project-02.05-Docker_Microservice
    ```
3. To build and run the microservice use docker-compose

```bash
docker-compose up --build -d
```

## Sending Requests

You can append messages to the file either by using a web browser or by using the `curl` command in a terminal. Here's how to do both:

### Using a Web Browser

Simply navigate to the URL `http://localhost:3000/message/{YourMessageHere}` in your web browser. Replace `{YourMessageHere}` with the actual message you want to append. For example:

http://localhost:3000/message/HelloWorld


This will append "HelloWorld" to the `message.txt` file. Note that URL encoding applies, so for messages containing spaces or special characters, you'll need to encode them. For example, "Hello World" should be entered as "Hello%20World".

### Using curl

To send a request via the terminal, you can use the `curl` command. Format your request like this:

```bash
curl http://localhost:3000/message/HelloWorld
```

This command sends a GET request to your microservice, appending "HelloWorld" to the message.txt file.
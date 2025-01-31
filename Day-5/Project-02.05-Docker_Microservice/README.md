# Node.js Microservice for Storing Messages to a Database

This project is a simple Node.js microservice that stores messages received as URL parameters to a PostgreSQL database. It's built using Express, a fast, unopinionated, minimalist web framework for Node.js. When docker-compose is used the database table is created using *init.sql* file.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine (Download from [Node.js official site](https://nodejs.org/))
- Docker installed on your machine (Download from [Docker Desktop](https://www.docker.com/products/docker-desktop/))

## Usage

1. Navigate to the project directory:

    ```bash
    cd Project-02.05-Docker_Microservice
    ```

2. To build and run the microservice use docker-compose

    ```bash
    docker-compose up --build -d
    ```

## Sending Requests

You can append messages to the file either by using a web browser or by using the `curl` command in a terminal. Here's how to do both:

### Using a Web Browser

Simply navigate to the URL `http://localhost:3000/message/{YourMessageHere}` in your web browser. Replace `{YourMessageHere}` with the actual message you want to append. For example:

http://localhost:3000/message/HelloWorld


This will append "HelloWorld" to the `message.txt` file. Note that URL encoding applies, so for messages containing spaces or special characters, you'll need to encode them. For example, "Hello World" should be entered as "Hello%20World".

To check the database table "messages" run this docker command:

```bash
docker exec -it my_ms_db psql -U user -d dbname -c "SELECT * FROM messages;"
```

### Using curl

To send a request via the terminal, you can use the `curl` command. Format your request like this:

```bash
curl http://localhost:3000/message/HelloWorld
```

This command sends a GET request to your microservice, appending "HelloWorld" to the message.txt file.
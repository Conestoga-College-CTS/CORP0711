# Demonstration of Docker Build

This project is a simple Node.js application that is used to build a container image.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine (Download from [Node.js official site](https://nodejs.org/))
- Docker installed on your machine (Download from [Docker Desktop](https://www.docker.com/products/docker-desktop/))

## Usage

### Build Container

1. Navigate to the project directory:

    ```bash
    cd Project-02.02-Docker-Build
    ```

2. Build Docker image from the source code using docker build.

    ```bash
    docker build -t name/tag .
    ```
### Run Container

Run a container from the Docker image

    ```bash
    docker run --name web1 -p 3000:3000 -d name/tag
    ```

### Monitor Logs

View logs using Docker Logs

    ```bash
    docker logs web1 -f
```

### Sending Requests

#### Using a Web Browser

Simply navigate to the URL `http://localhost:3000/` in your web browser. For example:

http://localhost:3000/

This will return "Hello, World!" which will get displayed on the resulting webpage.

#### Using curl

To send a request via the terminal, you can use the `curl` command. Format your request like this:

```bash
curl http://localhost:3000
```
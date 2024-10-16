# Demonstration of Docker Compose

This project is a simple demonstration of using Docker Compose.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Docker installed on your machine (Download from [Docker Desktop](https://www.docker.com/products/docker-desktop/))

## Usage

1. Navigate to the project directory:

    ```bash
    cd Project-02.03-Docker-Compose
    ```

2. Bring up the stack using docker-compose.

    ```bash
    docker-compose up -d
    ```

### Inspect the stack

```bash
docker-compose ps

docker ps

docker volume ls

docker network ls

docker network inspect project-0203-docker-compose_app-network 

docker-compose stop

docker-compose start
	
ocker-compose restart

docker-compose rm
```
# DOCKER SEARCH

docker search linux

# DOCKER PULL

docker pull ubuntu

docker image ls

# DOCKER RUN
	
docker run --name my_alpine -it alpine /bin/sh

docker run --name my_postgres -d -e POSTGRES_PASSWORD=mysecretpassword -p 8432:5432 postgres

docker run --name my_postgres -d -e POSTGRES_PASSWORD=mysecretpassword -p 8432:5432 postgres:12.3

docker run --name my_mqtt -d -p 3883:1883 -p 3001:9001 -v mosquitto_vol:/mosquitto/config eclipse-mosquitto

docker volume ls

docker volume inspect mosquitto_vol

docker exec -it my_mqtt sh

docker ps

docker stop my_mqtt

docker rm my_mqtt

docker ps -a

docker volume ls

docker volume rm mosquitto_vol

touch mosquitto.conf

docker run --name my_mqtt -d -p 3883:1883 -p 3001:9001 -v /Users/shrestha/mosquitto.conf:/mosquitto/config/mosquitto.conf eclipse-mosquitto

less mosquitto.conf

# DOCKER EXEC

docker exec -it my_postgres /bin/bash

docker exec -t my_postgres /bin/bash

docker exec -w /mosquitto/config my_mqtt ls

echo "sample text" | docker exec -w /mosquitto/config my_mqtt cat > mosquitto.conf

echo "sample text" | docker exec -i -w /mosquitto/config my_mqtt cat > mosquitto.conf

# DOCKER LOGS

docker logs my_postgres                                                                     

docker logs my_postgres -f

docker logs my_postgres --tail 100 

docker logs my_postgres -t 

docker logs my_postgres --since 2021-05-01T00:00:00 

docker stop my_postgres

# DOCKER NETWORK

docker network create --driver bridge my-network

docker network ls

docker network inspect my-network

docker run -dit --name c1  alpine

docker inspect c1

docker run -dit --name c2 --network my-network alpine

docker network inspect my-network

docker run -dit --name c3 --network my-network alpine

docker ps

docker network inspect my-network

docker network connect  my-network c1

docker network inspect my-network

docker network disconnect my-network c2

docker network inspect my-network

docker inspect c2

docker inspect c1

# DOCKER VOLUME

docker volume create my-vol

docker volume ls

docker run -d --name my_alpine -v my-vol alpine /bin/sh

docker inspect my_alpine

docker stop my_alpine

docker rm my-vol

# DOCKER BUILD - Project-02.02-Docker-Build

docker build -t ps/web1 .

docker run --name web1 -p 3000:3000 -d ps/web1

docker logs web1 -f

docker image ls

docker image rm prashanta/node-web-app

docker image ls

# DOCKER COMPOSE - Project-02.03-Docker-Compose

docker-compose up -d

docker-compose ps

docker ps

docker volume ls

docker network ls

docker network inspect project-0203-docker-compose_app-network 

docker-compose stop

docker-compose start

docker-compose restart

docker-compose rm

docker exec -it my_db bash
# psql -U admin -d yourdb
# \d

docker exec -it my_db psql -U admin -d db_1

# No tables created yet

docker exec -it my_db psql -U admin -d db_1 -c "CREATE TABLE employees (id SERIAL PRIMARY KEY, name VARCHAR(100) NOT NULL, department VARCHAR(50));"

docker exec -it my_db psql -U admin -d db_1

# Tables have been created

docker-compose kill

# HELP 
docker --help
docker run --help
docker exec --help

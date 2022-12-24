# Tools and technologies
* Postgre https://www.postgresql.org
* Express https://expressjs.com
* TypeORM https://typeorm.io
* Docker https://docs.docker.com/get-docker/
* JWT https://www.npmjs.com/package/jsonwebtoken


# Steps To Run The Project

First of all,  check if Docker is up and write the next command in the terminal 
* docker-compose up -d

Next, its necessary make the migration, write in order the next commands 

* yarn build
* yarn typeorm migration:generate ./src/migrations/added-user-entity -d ./src/utils/data-source.ts 
* yarn build
* yarn typeorm migration:run -d src/utils/data-source.ts

Finally, in other terminal, start the API

* yarn start

In the directory you can find a collection of postman to consume the endpoints

url: http://localhost:8000/


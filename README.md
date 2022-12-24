# Steps To Run The Project

First of all,  check if Docker is up and write the next command in the terminal 
* docker-compose up -d

Next, its necessary make the migration, write in order the next commands 

* yarn build
* yarn typeorm migration:generate ./src/migrations/added-user-entity -d ./src/utils/data-source.ts 
* yarn build
* yarn typeorm migration:run -d src/utils/data-source.ts




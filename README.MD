# Project informations

Name: Cryptocurrency REST API <br />
Start date: 04/01/2022 <br />
Version: 001 <br />
Author's name: Rodrigo Wanderley <br />
E-mail: <boaventurarodrigo@yahoo.com.br> <br />
Git hub profile: <https://github.com/Rodrigowb> <br />
Linkedin profile: <https://www.linkedin.com/in/rodrigowanderleyboaventura> <br />

# About the project

This project aims to create a REST API using backend tools in Node.js. It was used Mondodb for the non-relational database, Mongoose for interaction with the database and Express for interaction with the server.

# Files description

## db/connection.js

Set the connection with Mongodb and event listener for feedback about the connection.

## models/cryptocurrency.js

Create a Mongoose schema, that is sort of a validator about the data that can be contained on the database and a model, which is a schema constructor.

## controllers/cryptocurrencies.js

Create a controller for them database model. It defines the callback functions of the API endpoints.

## routes/cryptocurrency.js

Create the API endpoints, setting the CRUD parameters for the client access the API, by creating, reading, updating and deleting data.

## routes/index.js

Manage all the routers from our API and allows the application to scale, if It needs more database models and routers.

## seed/crypto-data.json

Sample JSON file with the initial information to seed the database.

## seed/seed.js

Create the initial content on the Mongodb, using the predefined structure created on the models and using the crypto-data.json file.<br/>
**BE AWARE: this file must be run only once or if you are in a development environment. It drops all the database and seed it with the seeding json file.**

## server.js

**Main file to run the project.** </br>
Set the connection with the server and setting all the middlewares, and creating event listeners for server connection feedback.

## package.json

Set the dependencies of the project and the commands to run files.

# API documentation

# How to use this API?

# Technologies used

// Import the mongodb connection and models
import db from "../db/connection.js"
import cryptocurrenciesModel from "../models/cryptocurrency.js"

// Importing the json file to seed the database
import fs from "fs"
import cyptocurrencyController from "../controllers/cryptocurrencies.js";
let rawData = fs.readFileSync('./crypto-data.json');
let parsedData = JSON.parse(rawData);

// Seeding the database
const insertData = async () => {
  // Drop db
  await db.dropDatabase();
  // Insert the data
  await cryptocurrenciesModel.insertMany(parsedData);
  // Close connection 
  db.close()
}

// Seed the database
insertData();
// TODO: capitalize symbols
// Import mongoose and create a schema
import mongoose from "mongoose"
const Schema = mongoose.Schema

// Create the schem fot the db model
let Cryptocurrencies = new Schema({
  "token": {
    type: String,
  },
  "symbol": {
    type: String,
  },
  "image": {
    type: String,
  },
  "creationYear": {
    type: Number,
  },
  "creators": {
    type: Array,
    of: String,
  }
})

// Create a model
let cryptocurrenciesModel = mongoose.model("cryptocurrenciesModel", Cryptocurrencies)

// Export model
export default cryptocurrenciesModel;
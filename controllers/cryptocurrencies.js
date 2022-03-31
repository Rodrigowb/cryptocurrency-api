// TODO: set more read properties
// TODO: set more update properties
// TODO: set more delet properties
// TODO: set error handlers

// Import the model
import cryptocurrenciesModel from "../models/cryptocurrency.js";

// Create the CRUD controller
let cyptocurrencyController = {
  // Read (R)
  getAll(request, response) {
    cryptocurrenciesModel
      .find({})
      .then(result => response.json(result))
  },
  getById(request, response) {
    cryptocurrenciesModel
      .findById(request.params.id)
      .then(result => response.json(result))
  },
  getBySymbol(request, response) {
    cryptocurrenciesModel
      .find({ symbol: request.params.symbol })
      .then(result => response.json(result))
  },
  // Update (U)
  updateById(request, response) {
    cryptocurrenciesModel
      .findByIdAndUpdate(request.params.id, request.body, { new: true })
      .then(result => response.json(result))
  },
  // Delete (D)
  deleteById(request, response) {
    cryptocurrenciesModel
      .findByIdAndRemove(request.params.id)
      .then(result => response.json(result))
  }
}

// Export controller
export default cyptocurrencyController
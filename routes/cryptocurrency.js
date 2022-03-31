// Import router and controller
import { Router } from "express";
import cryptocurrencyController from "../controllers/cryptocurrencies.js"

// Create a new router
const router = Router()

// Create the routers (middlewares)
// Create (post)
router.post('/cryptocurrencies', cryptocurrencyController.create)
// Read (get)
router.get('/cryptocurrencies', cryptocurrencyController.getAll);
router.get('/cryptocurrencies/id/:id', cryptocurrencyController.getById);
router.get('/cryptocurrencies/symbol/:symbol', cryptocurrencyController.getBySymbol)
// Update (put)
router.put('/cryptocurrencies/id/:id', cryptocurrencyController.updateById);
// Delete (delete)
router.delete('/cryptocurrencies/id/:id', cryptocurrencyController.deleteById);

// Export router
export default router;

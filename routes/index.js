// Import the routers
import { Router } from "express";
import cryptocurrenciesRoute from "../routes/cryptocurrency.js"

// Create a new router
const router = Router();

// Set the default route
router.get('/', (request, response) => response.send("Cryptocurrencies API root!"))

// Set the routers to be used (middlewares)
router.use("/", cryptocurrenciesRoute)

// Export router
export default router;
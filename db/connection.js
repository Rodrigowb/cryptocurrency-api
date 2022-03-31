// Import mongoose and chalk
import mongoose from "mongoose"
import chalk from "chalk"

// Set the uri (production || development)
const MONGODB_URI = process.env.PROD_MONGODB || "mongodb://127.0.0.1:27017/cryptocurrencies";

// Set to return the updated db when receives a request
mongoose.set("returnOriginal", false);

// Connect to mongoose
mongoose
  .connect(MONGODB_URI)
  .catch((error) => {
    console.log("Error on connectin to the database " + error.message)
  })

// Event listeners for the database connection
mongoose.connection.on("connected", () => {
  console.log(chalk.green("Connected to the database"))
})
mongoose.connection.on("disconnected", () => {
  console.log(chalk.bold("Disconnected to the database"))
})
mongoose.connection.on("error", (error) => {
  console.log(chalk.red(`Mongodb connection error ${error}`))
})

// Expor the connection
export default mongoose.connection;

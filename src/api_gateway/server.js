// require express
import express from "express";
import dotenv from "dotenv";
import registerRoutes from "../api_source/routes/index.js";
import logger from "./middleware/logger.js";
import cors from "cors";
//create an app using express constructor
const app = express();
const corsOptions = {
    origin: `http://${process.env.DOMAIN}:${process.env.PORT || 8080}`,
  };
dotenv.config({ path: "../../.env" });
const server = async () => {
  try {
    app.use(cors(corsOptions));
    // declare your port
    const port = process.env.PORT || 5000;

    app.use(express.json());
    app.use(logger);
    // set the route for our application by passing the app to the routes object
    registerRoutes(app);
    // call the listen method on the app
    app.listen(port, () => {
      console.log("Server is running is port: " + port);
    });
  } catch (e) {
    console.log(e);
  }
};

server();

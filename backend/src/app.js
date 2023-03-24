// Description: This is the main file for the application

// Importing the express module
import express from 'express';

// Importing the cors module
import cors from 'cors';

// Creating an instance of express
const app = express();

// Set the middlewares
app.use(cors());
app.use(express.json());

// Exporting the app
export default app;

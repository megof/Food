// Description: This is the main file for the application

// Importing the express module
import express from 'express';

// Importing the cors module
import cors from 'cors';

// Importing the routes
import userRouter from './routes/userRoute.js'

// Creating an instance of express
const app = express();

// Set the middlewares
app.use(cors());
app.use(express.json());

// Set the routes
app.use('/api/users', userRouter);

// Exporting the app
export default app;

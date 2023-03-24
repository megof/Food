// Description: This is the main file for the application

// Importing the express module
import express from 'express';

// Importing the cors module
import cors from 'cors';

// Importing the middlewares
import verifyTokenMiddleware from './middlewares/verifyToken.middleware.js';

// Importing the routes
import userRouter from './routes/user.routes.js'
import orderRouter from './routes/order.routes.js'

// Creating an instance of express
const app = express();

// Set the middlewares
app.use(cors());
app.use(express.json());

// Set the routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/orders', verifyTokenMiddleware, orderRouter);


// Exporting the app
export default app;

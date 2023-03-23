// Description: This is the main file for the application

// Importing the express module
import express from 'express';
// Importing the routes
import ProductTypeRoutes from './routes/productType.routes.js';
import OrderRoutes from './routes/order.routes.js';

// Importing the cors module
import cors from 'cors';

// Creating an instance of express
const app = express();

// Set the middlewares
app.use(cors());
app.use(express.json());

//routes
app.use('/api/v1/types', ProductTypeRoutes);
app.use('/api/v1/orders', OrderRoutes);

// Exporting the app
export default app;

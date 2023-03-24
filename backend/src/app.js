// Description: This is the main file for the application

// Importing the express module
import express from 'express';
// Imrpoting morgan
import morgan from 'morgan';
// Importing the routes
import ProductTypeRoutes from './routes/productType.routes.js';
import OrderRoutes from './routes/order.routes.js';

// Importing the cors module
import cors from 'cors';

// Importing the swagger UI
import swaggerUi from 'swagger-ui-express';

// Importing the middlewares
import verifyTokenMiddleware from './middlewares/verifyToken.middleware.js';

// Importing the routes
import userRouter from './routes/user.routes.js'
import orderRouter from './routes/order.routes.js'

// Importing the swagger configuration
import swaggerConfiguration from './config/swagger.config.js';

// Creating an instance of express
const app = express();

// Set the middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/types', ProductTypeRoutes);
app.use('/api/v1/orders', OrderRoutes);

// Set the routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/orders', verifyTokenMiddleware, orderRouter);
app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerConfiguration));


// Exporting the app
export default app;

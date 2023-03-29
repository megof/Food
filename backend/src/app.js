// Description: This is the main file for the application
// Authors: Jean Carlos Carrillo, Andersson Rivera, David Ospina y Sebastián Gámez

// Importing the express module
import express from 'express';

// Importing morgan
import morgan from 'morgan';

// Importing the cors module
import cors from 'cors';

// Importing the swagger UI
import swaggerUi from 'swagger-ui-express';

// Importing the swagger configuration
import swaggerConfiguration from './config/swagger.config.js';

// Importing the routes
import userRouter from './routes/user.routes.js'
import orderRouter from './routes/order.routes.js'
import ProductTypeRoutes from './routes/productType.routes.js';
import ProductRoutes from './routes/product.routes.js';
import toppingRoutes from './routes/topping.routes.js'
import toppingProductRoutes from './routes/toppingProduct.routes.js'
import detailOrderRouter from './routes/detailOrder.routes.js';
import detailToppingRoutes from './routes/detailTopping.routes.js';
import couponRoutes from './routes/coupon.routes.js';


// Creating an instance of express
const app = express();

// Set the middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Set the routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/orders', orderRouter);
app.use('/api/v1/topping', toppingRoutes);
app.use('/api/v1/types', ProductTypeRoutes);
app.use('/api/v1/products', ProductRoutes);
app.use('/api/v1/toppingProduct', toppingProductRoutes);
app.use('/api/v1/detailOrders', detailOrderRouter);
app.use('/api/v1/detailTopping', detailToppingRoutes);
app.use('/api/v1/coupon', couponRoutes);
app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerConfiguration));

// Exporting the app
export default app;

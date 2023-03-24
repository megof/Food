// Description: This file contains all the routes for the user
// Author: Sebastián Gámez Ariza

// Importing the express library
import { Router } from 'express';

// Importing the user controller
import {
    loginUserController,
    getAllUsersController,
    createUserController,
    updateUserController,
    deleteUserController,
} from '../controllers/user.controller.js';

// Importing the verify token middleware
import verifyTokenMiddleware from '../middlewares/verifyToken.middleware.js';

// Creating the router
const userRouter = Router();

// Creating the routes
userRouter
    // Login user
    .post('/login', loginUserController)
    // Get all users
    .get('/', verifyTokenMiddleware, getAllUsersController)
    // Create user
    .post('/', verifyTokenMiddleware, createUserController)
    // Update user
    .patch('/:id', verifyTokenMiddleware, updateUserController)
    // Delete user
    .delete('/:id', verifyTokenMiddleware, deleteUserController);

// Exporting the router
export default userRouter;

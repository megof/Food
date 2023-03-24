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

/**
 * @swagger
 * components:
 *  schemas:
 *   User:
 *    type: object
 *    properties:
 *     name:
 *      type: string
 *      description: The name of the user
 *     username:
 *      type: string
 *      description: The username of the user
 *     password:
 *      type: string
 *      description: The password of the user
 *     status:
 *      type: boolean
 *      description: The status of the user
 *    
 *   Response:
 *    type: object
 *    properties:
 *     status:
 *      type: integer
 *      description: The status code
 *     message:
 *      type: string
 *      description: The message
 *     data:
 *      type: 
 *       - object
 *       - array
 *      items:
 *       - $ref: '#/components/schemas/User'
 *       - $ref: '#/components/schemas/User'
 *      description: The data of the user or users
 *    required:
 *     - status
 *     - message 
 * 
 */


/**
 * @swagger
 * /api/v1/users:
 *  get:
 *   summary: Get all users
 *   description: Return a list of users
 *   tags:
 *   - Users
 *   responses:
 *    200:
 *     description: Users found
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 */
userRouter.get('/', verifyTokenMiddleware, getAllUsersController);

/**
 * @swagger
 * /api/v1/users:
 *  post:
 *   summary: Create new user
 *   tags:
 *    - Users
 *   responses:
 *    200:
 *     description: Users found
 *     content:
 *      application/json:
 *       schema: 
 *        $ref: '#/components/schemas/Response'
 */
userRouter.post('/', createUserController);
// Login a user
userRouter.post('/login', loginUserController);
// Update a user
userRouter.put('/:id', verifyTokenMiddleware, updateUserController);
// Delete a user
userRouter.delete('/:id', verifyTokenMiddleware, deleteUserController);


// Exporting the router
export default userRouter;

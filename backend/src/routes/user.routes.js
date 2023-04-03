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
 *    example:
 *     name: Sebastián Gámez
 *     username: sebastian.gamez
 *     status: true
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
 *      description: The data send by the server
 *    required:
 *     - status
 *     - message 
 *    example:
 *     status: 200
 *     message: Users found
 * 
 *  parameters:
 *   token:
 *    in: header
 *    name: x-access-token
 *    description: The token to access the API
 *    schema:
 *     type: string
 *    required: true
 *  
 *   id:
 *    in: path
 *    name: id
 *    description: The id of the user
 *    schema:
 *     type: string
 *    required: true
 * 
 */

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: The users managing API
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
 *   parameters:
 *    - $ref: '#/components/parameters/token'
 *   responses:
 *    200:
 *     description: Users found
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *        example:
 *         status: 200
 *         message: Users found
 *         data: [...Users]
 *    500:
 *     description: Error getting users
 *     content: 
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 500
 *        message: Error getting users
 * 
 */
userRouter.get('/', verifyTokenMiddleware, getAllUsersController);

/**
 * @swagger
 * /api/v1/users:
 *  post:
 *   summary: Create new user
 *   tags:
 *    - Users
 *   parameters:
 *    - $ref: '#/components/parameters/token'
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/User'
 *      example:
 *       name: admin
 *       username: admin
 *       password: "123456"
 *       status: true
 *   responses:
 *    200:
 *     description: Users found
 *     content:
 *      application/json:
 *       schema: 
 *        $ref: '#/components/schemas/Response'
 *      example:
 *       status: 200
 *       message: User created
 *    400:
 *     description: User already exists
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 400
 *        message: User already exists
 *    500:
 *     description: Error creating user
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/User'
 *       example:
 *        status: 500
 *        message: Error creating user
 */
userRouter.post('/', verifyTokenMiddleware, createUserController);

/**
 * @swagger
 * /api/v1/users/login:
 *  post:
 *   summary: Login user
 *   tags:
 *   - Users
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/User'
 *      example:
 *       username: admin
 *       password: "123456"
 *   responses:
 *    200:
 *     description: User logged in
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 200
 *        message: User logged in
 *    400:
 *     description: Username or password incorrect
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 400
 *        message: Username or password incorrect
 *    401:
 *     description: User is not active
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 401
 *        message: User is not active
 *    500:
 *     description: Error logging in
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 500
 *        message: Error logging in
 */
userRouter.post('/login', loginUserController);

/**
 * @swagger
 * /api/v1/users/{id}:
 *  put:
 *   summary: Update user
 *   tags: 
 *    - Users
 *   parameters:
 *    - $ref: '#/components/parameters/token'
 *    - $ref: '#/components/parameters/id'
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/User'
 *      example:
 *       status: true
 *   responses:
 *    200:
 *     description: User updated
 *     content:   
 *      application/json:    
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *      example:
 *       status: 200
 *       message: User updated
 *    404:
 *     description: User not found
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 404
 *        message: User not found
 *    500:
 *     description: Error updating user
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 500
 *        message: Error updating user
 * 
 */ 
userRouter.put('/:id', verifyTokenMiddleware, updateUserController);

/**
 * @swagger
 * /api/v1/users/{id}:
 *  delete:
 *   summary: Delete user
 *   tags: 
 *    - Users
 *   parameters:
 *    - $ref: '#/components/parameters/token'
 *    - $ref: '#/components/parameters/id'
 *   responses:
 *    200:
 *     description: User deleted
 *     content:   
 *      application/json:    
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *      example:
 *       status: 200
 *       message: User deleted
 *    404:
 *     description: User not found
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 404
 *        message: User not found
 *    500:
 *     description: Error deleting user
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 500
 *        message: Error deleting user
 */ 
userRouter.delete('/:id', verifyTokenMiddleware, deleteUserController);


// Exporting the router
export default userRouter;

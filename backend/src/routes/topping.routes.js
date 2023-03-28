import { Router } from "express";
import * as ToppingController from '../controllers/topping.controller.js'

// Importing the middlewares
import verifyTokenMiddleware from '../middlewares/verifyToken.middleware.js';

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Toppings
 *  description: Toppings end points
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    Topping:
 *      type: object
 *      properties: 
 *        name:
 *          type: string
 *          description: the Topping name
 *        price:
 *          type: number
 *          description: the Topping price
 *        edo:
 *          type: boolean
 *          description: the Topping state  
 *      required: 
 *        - name 
 *        - price 
 *      example: 
 *        name: My topping
 *        price: 5000 
 *        edo: false
 *    ToppingNotFound:
 *      type: object
 *      properties: 
 *        msg:
 *          type: string
 *          description: not found topping
 *      example:
 *        msg: not found topping
 *  parameters:
 *      toppingId:
 *          in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: string
 *              description: the topping_id
 *      token:
 *          in: header
 *          name: x-access-token
 *          description: The token to access the API
 *          schema:
 *              type: string
 *          required: true
 *  
*/


/**
 * @swagger
 * /api/v1/topping/:
 *  post:
 *    summary: create a new Topping
 *    tags: [Toppings]
 *    parameters:
 *      - $ref: '#/components/parameters/token'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Topping'   
 *    responses:
 *      200:
 *        description: The toppings succesfully created
 *        content:
 *          application/json:
 *            schema: 
 *              items: 
 *                $ref: '#/components/schemas/Topping'
 * 
 *      400: 
 *        description: There are no registered toppings
 */
router.post('/', verifyTokenMiddleware, ToppingController.save);


/**
 * @swagger
 * /api/v1/topping:
 *  get:
 *      summary: Return a Topping list
 *      tags: [Toppings]
 *      responses:
 *          200:
 *              description: A list of toppings
 *              content:
 *                  application/json:
 *                      schema: 
 *                          items: 
 *                             $ref: '#/components/schemas/Topping'
 * 
 *          404: 
 *              description: There are no registered toppings
 * 
 *          
 */
router.get('/', ToppingController.getAll);

/**
 * @swagger
 * /api/v1/topping/{id}:
 *  get:
 *      summary: Return a Topping by id 
 *      tags: [Toppings]
 *      parameters:
 *          - $ref: '#/components/parameters/toppingId'
 *      responses:
 *          200:
 *              description: A toppings content by id
 *              content:
 *                  application/json:
 *                      schema: 
 *                          items: 
 *                              $ref: '#/components/schemas/Topping'
 *          404:
 *              description: The toppings not found
 *              content:
 *                  application/json:
 *                      schema: 
 *                          $ref: '#/components/schemas/ToppingNotFound'
 *       
 */
router.get('/:id', ToppingController.getOne);


/**
 * @swagger
 * /api/v1/topping/{id}:
 *  put:
 *      summary: Update a Topping by id 
 *      tags: [Toppings]
 *      parameters:
 *          - $ref: '#/components/parameters/token'
 *          - $ref: '#/components/parameters/toppingId'
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Topping'   
 *      responses:
 *          200:
 *              description: updated topping
 *              content:
 *                  application/json:
 *                      schema: 
 *                          $ref: '#/components/schemas/Topping'
 *          404:
 *              description: The toppings was not found
 *              content:
 *                  application/json:
 *                      schema: 
 *                          $ref: '#/components/schemas/ToppingNotFound'
 *       
 */
router.put('/:id', verifyTokenMiddleware, ToppingController.update);

/**
 * @swagger
 * /api/v1/topping/{id}:
 *  delete:
 *      summary: Delete a Topping by id 
 *      tags: [Toppings]
 *      parameters:
 *          - $ref: '#/components/parameters/token'
 *          - $ref: '#/components/parameters/toppingId'
 *      responses:
 *          200:
 *              description: Deleted a toppings  
 *              content:
 *                  application/json:
 *                      schema: 
 *                          items: 
 *                              $ref: '#/components/schemas/Topping'
 *          404:
 *              description: The toppings not found
 *              content:
 *                  application/json:
 *                      schema: 
 *                          $ref: '#/components/schemas/ToppingNotFound'
 *       
 */
router.delete('/:id', verifyTokenMiddleware, ToppingController.deleteOne);

export default router;
import { Router } from "express";
import * as ToppingProductController from '../controllers/toppingProduct.controller.js'

// Importing the middlewares
import verifyTokenMiddleware from '../middlewares/verifyToken.middleware.js';

const router = Router();
/**
 * @swagger
 * tags:
 *  name: ToppingsProduct
 *  description: Toppings end points
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    ToppingsProduct:
 *      type: object
 *      properties: 
 *        idProduct:
 *          type: string
 *          description: the Product id
 *        idTopping:
 *          type: string
 *          description: the Topping id 
 *      example: 
 *        idProduct: 641e1cf0f01c2410861030bb
 *        idTopping: 6421a9c0c5351b507ad9fb9d  
 *    ToppingProductNotFound:
 *      type: object
 *      properties: 
 *        msg:
 *          type: string
 *          description: not found topping product
 *      example:
 *        msg: not found topping product
 *  parameters:
 *      ToppingsProductId:
 *          in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: string
 *              description: the toppingProduct_id
 *      token:
 *          in: header
 *          name: x-access-token
 *          description: The token to access the API
 *          schema:
 *              type: string
 *          required: true
*/


/**
 * @swagger
 * /api/v1/toppingProduct/:
 *  post:
 *      summary: create a new Topping
 *      tags: [ToppingsProduct]
 *      parameters:
 *          - $ref: '#/components/parameters/token'
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/ToppingsProduct'   
 *      responses:
 *          200:
 *              description: The ToppingsProduct succesfully created
 *              content:
 *                  application/json:
 *                      schema: 
 *                          items: 
 *                              $ref: '#/components/schemas/ToppingsProduct'
 * 
 *          400: 
 *              description: There are no registered ToppingsProduct
 */
router.post('/', verifyTokenMiddleware, ToppingProductController.save);


/**
 * @swagger
 * /api/v1/toppingProduct:
 *  get:
 *      summary: Return a Toppings Product list
 *      tags: [ToppingsProduct]
 *      responses:
 *          200:
 *              description: A list of Toppings Product
 *              content:
 *                  application/json:
 *                      schema: 
 *                          items: 
 *                             $ref: '#/components/schemas/ToppingsProduct'
 * 
 *          404: 
 *              description: There are no registered Toppings Product
 * 
 *          
 */
router.get('/', ToppingProductController.getAll);

/**
 * @swagger
 * /api/v1/toppingProduct/{id}:
 *  get:
 *      summary: Return a ToppingsProduct by id 
 *      tags: [ToppingsProduct]
 *      parameters:
 *          - $ref: '#/components/parameters/ToppingsProductId'
 *      responses:
 *          200:
 *              description: A Toppings Product content by id
 *              content:
 *                  application/json:
 *                      schema: 
 *                          items: 
 *                              $ref: '#/components/schemas/ToppingsProduct'
 *          404:
 *              description: The Toppings Product not found
 *              content:
 *                  application/json:
 *                      schema: 
 *                          $ref: '#/components/schemas/ToppingNotFound'
 *       
 */
router.get('/:id', ToppingProductController.getOne);


router.put('/:id', verifyTokenMiddleware, ToppingProductController.update);

/**
 * @swagger
 * /api/v1/toppingProduct/{id}:
 *  delete:
 *      summary: Delete a ToppingsProduct by id 
 *      tags: [ToppingsProduct]
 *      parameters:
 *          - $ref: '#/components/parameters/token'
 *          - $ref: '#/components/parameters/ToppingsProductId'
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
router.delete('/:id', verifyTokenMiddleware, ToppingProductController.deleteOne);

export default router;
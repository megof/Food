// Description: This file contains all the routes for the detail - Topping
// Author: Juan David Ospina Ortega

// Importing the express library
import { Router } from "express";
import * as DetailTopping from '../controllers/detailTopping.controller.js'

const detailToppingRoutes = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *   DetailTopping:
 *    type: object
 *    properties:
 *     id_det_order:
 *      type: Schema.Types.ObjectId
 *      description: The id of the detail - order
 *     id_topping:
 *      type: Schema.Types.ObjectId
 *      description: The id of the topping
 *     cant:
 *      type: integer
 *      description: The amount of the topping 
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
 *       - $ref: '#/components/schemas/DetailTopping'
 *       - $ref: '#/components/schemas/DetailTopping'
 *      description: The data of the detail - Topping or DetailTopping
 *    required:
 *     - status
 *     - message 
 *    example:
 *     status: 200
 *     message: DetailToppings found
 * 
 *  parameters:
 *  
 *   id:
 *    in: path
 *    name: id
 *    description: The id of the detail - Topping
 *    schema:
 *     type: string
 *    required: true
 * 
 */

/**
 * @swagger
 * tags:
 *  name: DetailToppings
 *  description: The DetailTopping managing API
 * 
 */

/**
 * @swagger
 * /api/v1/DetailTopping:
 *  get:
 *   summary: Get all DetailTopping
 *   description: Return a list of DetailTopping
 *   tags:
 *   - DetailToppings
 *   responses:
 *    200:
 *     description: DetailToppings found
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *        example:
 *         status: 200
 *         message: DetailToppings found
 *    500:
 *     description: Error getting DetailTopping
 *     content: 
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 500
 *        message: Error getting DetailTopping
 * 
 */

detailToppingRoutes.get('/', DetailTopping.getAll);

detailToppingRoutes.get('/:id', DetailTopping.getOne);

/**
 * @swagger
 * /api/v1/DetailTopping:
 *  post:
 *   summary: Create new detail - topping
 *   tags:
 *    - DetailToppings
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/DetailTopping'
 *   responses:
 *    200:
 *     description: DetailToppings found
 *     content:
 *      application/json:
 *       schema: 
 *        $ref: '#/components/schemas/Response'
 *      example:
 *       status: 200
 *       message: Detail - Topping created
 *    400:
 *     description: Detail - Topping already exists
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 400
 *        message: Detail - Topping already exists
 *    500:
 *     description: Error creating detail topping
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/DetailTopping'
 *       example:
 *        status: 500
 *        message: Error creating detail - topping
 */

detailToppingRoutes.post('/', DetailTopping.save);

/**
 * @swagger
 * /api/v1/DetailTopping/{id}:
 *  put:
 *   summary: Update Detail - Topping
 *   tags: 
 *    - DetailToppings
 *   parameters:
 *    - $ref: '#/components/parameters/id'
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/DetailTopping'
 *      example:
 *       status: true
 *   responses:
 *    200:
 *     description: DetailTopping updated
 *     content:   
 *      application/json:    
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *      example:
 *       status: 200
 *       message: DetailTopping updated
 *    404:
 *     description: DetailTopping not found
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 404
 *        message: DetailTopping not found
 *    500:
 *     description: Error updating Detail - Topping
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 500
 *        message: Error updating Detail - Topping
 * 
 */ 

detailToppingRoutes.put('/:id', DetailTopping.update);

/**
 * @swagger
 * /api/v1/DetailTopping/{id}:
 *  delete:
 *   summary: Delete Detail - Topping
 *   tags: 
 *    - DetailToppings
 *   parameters:
 *    - $ref: '#/components/parameters/id'
 *   responses:
 *    200:
 *     description: DetailTopping deleted
 *     content:   
 *      application/json:    
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *      example:
 *       status: 200
 *       message: DetailTopping deleted
 *    404:
 *     description: DetailTopping not found
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 404
 *        message: DetailTopping not found
 *    500:
 *     description: Error deleting Detail - Topping
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 500
 *        message: Error deleting Detail - Topping
 */ 

detailToppingRoutes.delete('/:id', DetailTopping.deleteOne);

export default detailToppingRoutes;
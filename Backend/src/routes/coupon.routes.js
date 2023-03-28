// Description: this file contains all the routes for the coupon
// Author: Juan David Ospia Ortega

// Importing the express library
import { Router } from "express";

// Importing the coupon controller
import * as Coupon from '../controllers/coupon.controller.js'

// Importing the verify token middleware
import verifyTokenMiddleware from '../middlewares/verifyToken.middleware.js';

// Creating the router
const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *   Coupon:
 *    type: object
 *    properties:
 *     name:
 *      type: string
 *      description: The name of the coupon
 *     start_date:
 *      type: Date
 *      description: The start date of the coupon
 *     end_date:
 *      type: Date
 *      description: The end date of the coupon
 *     value:
 *      type: Number
 *      description: The value of the coupon
 *     dcto:
 *      type: Number
 *      description: The discount of the coupon
 *     min_purchase:
 *      type: Number
 *      description: The minimum purchase of the coupon
 *     status:
 *      type: Boolean
 *      description: the status of the coupon
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
 *       - $ref: '#/components/schemas/Coupon'
 *       - $ref: '#/components/schemas/Coupon'
 *      description: The data of the coupon or coupons
 *    required:
 *     - status
 *     - message 
 *    example:
 *     status: 200
 *     message: Coupons found
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
 *    description: The id of the coupon
 *    schema:
 *     type: string
 *    required: true
 * 
 */

/**
 * @swagger
 * tags:
 *  name: Coupons
 *  description: The coupons managing API
 * 
 */

/**
 * @swagger
 * /api/v1/coupons:
 *  get:
 *   summary: Get all coupons
 *   description: Return a list of coupons
 *   tags:
 *   - Coupons
 *   parameters:
 *    - $ref: '#/components/parameters/token'
 *   responses:
 *    200:
 *     description: Coupons found
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *        example:
 *         status: 200
 *         message: Coupons found
 *    500:
 *     description: Error getting coupons
 *     content: 
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 500
 *        message: Error getting coupons
 * 
 */

router.get('/', verifyTokenMiddleware, Coupon.getAll);

router.get('/:id', verifyTokenMiddleware, Coupon.getOne);

/**
 * @swagger
 * /api/v1/coupons:
 *  post:
 *   summary: Create new coupon
 *   tags:
 *    - Coupons
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/Coupon'
 *   responses:
 *    200:
 *     description: Coupons found
 *     content:
 *      application/json:
 *       schema: 
 *        $ref: '#/components/schemas/Response'
 *      example:
 *       status: 200
 *       message: Coupon created
 *    400:
 *     description: Coupon already exists
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 400
 *        message: Coupon already exists
 *    500:
 *     description: Error creating coupon
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Coupon'
 *       example:
 *        status: 500
 *        message: Error creating coupon
 */

router.post('/', Coupon.save);

/**
 * @swagger
 * /api/v1/coupons/{id}:
 *  put:
 *   summary: Update coupon
 *   tags: 
 *    - Coupons
 *   parameters:
 *    - $ref: '#/components/parameters/token'
 *    - $ref: '#/components/parameters/id'
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/Coupon'
 *      example:
 *       status: true
 *   responses:
 *    200:
 *     description: Coupon updated
 *     content:   
 *      application/json:    
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *      example:
 *       status: 200
 *       message: Coupon updated
 *    404:
 *     description: Coupon not found
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 404
 *        message: Coupon not found
 *    500:
 *     description: Error updating coupon
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 500
 *        message: Error updating coupon
 * 
 */ 

router.put('/:id', verifyTokenMiddleware, Coupon.update);

/**
 * @swagger
 * /api/v1/coupons/{id}:
 *  delete:
 *   summary: Delete coupon
 *   tags: 
 *    - Coupons
 *   parameters:
 *    - $ref: '#/components/parameters/token'
 *    - $ref: '#/components/parameters/id'
 *   responses:
 *    200:
 *     description: Coupon deleted
 *     content:   
 *      application/json:    
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *      example:
 *       status: 200
 *       message: Coupon deleted
 *    404:
 *     description: Coupon not found
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 404
 *        message: Coupon not found
 *    500:
 *     description: Error deleting coupon
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 500
 *        message: Error deleting coupon
 */ 

router.delete('/:id', verifyTokenMiddleware, Coupon.deleteOne);

export default router;
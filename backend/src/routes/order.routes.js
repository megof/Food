import { Router } from "express";
import * as OrderController from '../controllers/order.controller.js'

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      Order:
 *          type: Object
 *          properties:
 *              id:
 *                  type: string
 *                  description: auto-generated id of order
 *              client:
 *                  type: string
 *                  description: Name or id of the client
 *              address: 
 *                  type: string
 *                  description: address of the client
 *              phone:
 *                  type: string
 *                  description: Phone of the client
 *              obs:
 *                  type: string
 *                  description: More information about the client
 *              total:
 *                  type: number
 *                  description: Total purchase value
 *              status:
 *                  type: string
 *                  description: En preparación, Listo o En entrega
 *          required: 
 *              - client
 *              - address
 *              - phone
 *              - obs
 *              - total
 *          example:
 *              id: 641e1436e5181e37b4d9d326
 *              client: Jean
 *              phone: 312836
 *              obs: Apartamento 801
 *              total: 19900
 *              status: En preparación
 *  parameters:
 *      orderId:
 *          in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: string
 *          description: Id of the order
 */

/**
 * @swagger
 * tags:
 *  name: Orders
 *  description: Endpoints of the order
 */

/**
 * @swagger
 *  /api/v1/orders:
 *      get:
 *          summary: Get a orders list
 *          tags: [Orders]
 *          responses: 
 *              200:
 *                  description: the list of orders
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items: 
 *                                  $ref: '#/components/schemas/Order'
 * */
router.get('/', OrderController.getAll);

/**
 * @swagger
 *  /api/v1/orders/{id}:
 *      get:
 *          summary: Get an order by id
 *          tags: [Orders]
 *          parameters:
 *              - $ref: '#/components/parameters/orderId'
 *          responses: 
 *              200:
 *                  description: Order was found
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Order'
 *              500:
 *                  description: Order wasn't found     
 * */
router.get('/:id', OrderController.getOne);

/**
 * @swagger
 *  /api/v1/orders:
 *      post:
 *          summary: Save a new order
 *          tags: [Orders]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Order'
 *          responses: 
 *              201:
 *                  description: Order succesfully created
 *                  content: 
 *                      application/json:
 *                          schema:
 *                              $ref:  '#/components/schemas/Order'
 *              404:
 *                  description: Order was not found
 * */
router.post('/', OrderController.save);

/**
 * @swagger
 *  /api/v1/orders/{id}:
 *      put:
 *          summary: Update an order by id
 *          tags: [Orders]
 *          parameters:
 *              - $ref: '#/components/parameters/orderId'
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Order'
 *          responses:
 *              200:
 *                  description: Updated order
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Order'
 *              500:
 *                  description: Something wrong with the request.
 */
router.put('/:id', OrderController.update);

/**
 * @swagger
 *  /api/v1/orders/{id}:
 *      delete: 
 *          summary: Delete an order by id
 *          tags: [Orders]
 *          parameters:
 *              - $ref: '#/components/parameters/orderId'
 *          responses:
 *              200: 
 *                  description: the order was deleted
 */
router.delete('/:id', OrderController.deleteOne);

export default router;
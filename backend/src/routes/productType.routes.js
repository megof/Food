import { Router } from "express";
import * as ProductTypeController from '../controllers/productType.controller.js'

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      productType:
 *          type: object
 *          properties:
 *              id:
 *                  type: string
 *                  description: auto-generated id of product type
 *              name:
 *                  type: string
 *                  description: name of the product type
 *          required: 
 *              - name
 *          example:
 *              id: 6410bb953e324fcfd7f51221
 *              name: Hamburguesa
 *  parameters:
 *      productTypeId:
 *          in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: string
 *          description: id of the product type
 */

/**
 * @swagger
 * tags:
 *  name: Product Types
 *  description: Endpoints of the product type
 */

/**
 * @swagger
 *  /api/v1/types:
 *      get:
 *          summary: Get a product types list
 *          tags: [Product Types]
 *          responses: 
 *              200:
 *                  description: the list of product types
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items: 
 *                                  $ref: '#/components/schemas/productType'
 * */

router.get('/', ProductTypeController.getAll);

/**
 * @swagger
 *  /api/v1/types/{id}:
 *      get:
 *          summary: Get a product type by id
 *          tags: [Product Types]
 *          parameters:
 *              - $ref: '#/components/parameters/productTypeId'
 *          responses: 
 *              200:
 *                  description: Product type was found
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/productType'
 *              500:
 *                  description: Product type wasn't found     
 * */
router.get('/:id', ProductTypeController.getOne);

/**
 * @swagger
 *  /api/v1/types:
 *      post:
 *          summary: Save a new product type
 *          tags: [Product Types]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/productType'
 *          responses: 
 *              201:
 *                  description: Product type succesfully created
 *                  content: 
 *                      application/json:
 *                          schema:
 *                              $ref:  '#/components/schemas/productType'
 *              404:
 *                  description: Product type was not found
 * */
router.post('/', ProductTypeController.save);

/**
 * @swagger
 *  /api/v1/types/{id}:
 *      put:
 *          summary: Update a product type by id
 *          tags: [Product Types]
 *          parameters:
 *              - $ref: '#/components/parameters/productTypeId'
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/productType'
 *          responses:
 *              200:
 *                  description: Updated product type
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/productType'
 *              500:
 *                  description: Something wrong with the request.
 */
router.put('/:id', ProductTypeController.update);

/**
 * @swagger
 *  /api/v1/types/{id}:
 *      delete: 
 *          summary: Delete a product type by id
 *          tags: [Product Types]
 *          parameters:
 *              - $ref: '#/components/parameters/productTypeId'
 *          responses:
 *              200: 
 *                  description: the product type was deleted
 */
router.delete('/:id', ProductTypeController.deleteOne);

export default router;
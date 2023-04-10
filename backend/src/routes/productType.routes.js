import { Router } from "express";
import * as ProductTypeController from '../controllers/productType.controller.js'

// Importing the middlewares
import verifyTokenMiddleware from '../middlewares/verifyToken.middleware.js';

// Importing the file upload module
import fileUpload from 'express-fileupload';

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
 *              image:
 *                  type: file
 *                  description: image of the product type
 *          required: 
 *              - name
 *              - image
 *          example:
 *              id: 6410bb953e324fcfd7f51221
 *              name: Hamburguesa
 *              image: /C:/Users/jeanc/OneDrive/Escritorio/Programming/Trabajo/Frontend/restaurante/img/anvorguesa3.jpg
 *  parameters:
 *      productTypeId:
 *          in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: string
 *          description: id of the product type
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
 *          parameters:
 *             - $ref: '#/components/parameters/token'
 *          requestBody:
 *              required: true
 *              content:
 *                  multipart/form-data:
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
router.post('/', fileUpload({
    useTempFiles : true,
    tempFileDir : './uploads'
}), verifyTokenMiddleware, ProductTypeController.save);

/**
 * @swagger
 *  /api/v1/types/{id}:
 *      put:
 *          summary: Update a product type by id
 *          tags: [Product Types]
 *          parameters:
 *              - $ref: '#/components/parameters/token'
 *              - $ref: '#/components/parameters/productTypeId'
 *          requestBody:
 *              required: true
 *              content: 
 *                  multipart/form-data:
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
router.put('/:id', fileUpload({
    useTempFiles : true,
    tempFileDir : './uploads'
}), verifyTokenMiddleware, ProductTypeController.update);

/**
 * @swagger
 *  /api/v1/types/{id}:
 *      delete: 
 *          summary: Delete a product type by id
 *          tags: [Product Types]
 *          parameters:
 *              - $ref: '#/components/parameters/token'
 *              - $ref: '#/components/parameters/productTypeId'
 *          responses:
 *              200: 
 *                  description: the product type was deleted
 */
router.delete('/:id', verifyTokenMiddleware, ProductTypeController.deleteOne);

export default router;
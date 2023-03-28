import { Router } from "express";
import * as ProductController from '../controllers/product.controller.js'

// Importing the middlewares
import verifyTokenMiddleware from '../middlewares/verifyToken.middleware.js';

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      Product:
 *          type: object
 *          properties:
 *              id:
 *                  type: string
 *                  description: auto-generated id of Product
 *              id_tp_product:
 *                  type: string
 *                  description: product type id
 *              name: 
 *                  type: string
 *                  description: product's name
 *              description:
 *                  type: string
 *                  description: A shorter product description
 *              generalDescr:
 *                  type: string
 *                  description: A longer product description
 *              price:
 *                  type: number
 *                  description: Price of the product
 *              image:
 *                  type: file
 *                  description: loaded image
 *              status:
 *                  type: string
 *                  description: Disponible or No disponible
 *              edo:
 *                  type: boolean
 *                  description: true or false
 *          required: 
 *              - id_tp_product
 *              - name
 *              - description
 *              - generalDescr
 *              - price
 *              - edo
 *          example:
 *              id: 641e1436e5181e37b4d9d326
 *              id_tp_product: 641e1436e5181e37b4d9d326
 *              name: Hamburguesa doble carne
 *              description: Hamburguesa con doble carne brangus
 *              generalDescr: Hamburguesa con doble carne brangus, papas fritas, queso, pepinillos y gaseosa a elección.
 *              price: 19900
 *              image: /C:/Users/jeanc/OneDrive/Escritorio/Programming/Trabajo/Frontend/restaurante/img/anvorguesa.jpg
 *              status: Disponible
 *              edo: true
 *  parameters:
 *      productId:
 *          in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: string
 *          description: product's id
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
 *  name: Products
 *  description: Product's endpoints
 */

/**
 * @swagger
 *  /api/v1/products:
 *      get:
 *          summary: Get a products list
 *          tags: [Products]
 *          responses: 
 *              200:
 *                  description: the list of products
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items: 
 *                                  $ref: '#/components/schemas/Product'
 * */
router.get('/', ProductController.getAll);

/**
 * @swagger
 *  /api/v1/products/{id}:
 *      get:
 *          summary: Get a product by id
 *          tags: [Products]
 *          parameters:
 *              - $ref: '#/components/parameters/productId'
 *          responses: 
 *              200:
 *                  description: Product was found
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Product'
 *              500:
 *                  description: Product wasn't found     
 * */
router.get('/:id', ProductController.getOne);

/**
 * @swagger
 *  /api/v1/products:
 *      post:
 *          summary: Save a new product
 *          tags: [Products]
 *          parameters:
 *              - $ref: '#/components/parameters/token'
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Product'
 *          responses: 
 *              201:
 *                  description: Product successfully created
 *                  content: 
 *                      application/json:
 *                          schema:
 *                              $ref:  '#/components/schemas/Product'
 *              404:
 *                  description: Product was not found
 * */
router.post('/', verifyTokenMiddleware, ProductController.save);

/**
 * @swagger
 *  /api/v1/products/{id}:
 *      put:
 *          summary: Update a product by id
 *          tags: [Products]
 *          parameters:
 *              - $ref: '#/components/parameters/token'
 *              - $ref: '#/components/parameters/productId'
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Product'
 *          responses:
 *              200:
 *                  description: Updated product
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Product'
 *              500:
 *                  description: Something wrong with the request.
 */
router.put('/:id', verifyTokenMiddleware, ProductController.update);

/**
 * @swagger
 *  /api/v1/products/{id}:
 *      delete: 
 *          summary: Delete a product by id
 *          tags: [Products]
 *          parameters:
 *              - $ref: '#/components/parameters/token'
 *              - $ref: '#/components/parameters/productId'
 *          responses:
 *              200: 
 *                  description: the product was deleted
 */
router.delete('/:id', verifyTokenMiddleware, ProductController.deleteOne);

export default router;
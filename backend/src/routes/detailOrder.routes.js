// Description: This file contains all the routes for the orderDetail
// Author: Sebastián Gámez Ariza

// Importing the express library
import { Router } from "express";

// Importing the orderDetail controller
import {
    getAllOrderDetailsController,
    getOrderDetailByIdController,
    createOrderDetailController,
    updateOrderDetailController,
    deleteOrderDetailController
} from "../controllers/detailOrder.controller.js";

// Creating the router
const detailOrderRouter = Router();

/**
 * @swagger
 * components:
 *  schemas:
 * 
 *   Product:
 *    type: object
 *    properties:
 *     id:
 *      type: string
 *      description: auto-generated id of Product
 *     id_tp_product:
 *      type: string
 *      description: product type id
 *     name: 
 *      type: string
 *      description: product's name
 *     description:
 *      type: string
 *      description: A shorter product description
 *     generalDescr:
 *      type: string
 *      description: A longer product description
 *     price:
 *      type: number
 *      description: Price of the product
 *     image:
 *      type: file
 *      description: loaded image
 *     status:
 *      type: string
 *      description: Disponible or No disponible
 *     edo:
 *      type: boolean
 *      description: true or false
 *    required: 
 *     - id_tp_product
 *     - name
 *     - description
 *     - generalDescr
 *     - price
 *     - edo
 *    example:
 *     id: 641e1436e5181e37b4d9d326
 *     id_tp_product: 641e1436e5181e37b4d9d326
 *     name: Hamburguesa doble carne
 *     description: Hamburguesa con doble carne brangus
 *     generalDescr: Hamburguesa con doble carne brangus, papas fritas, queso, pepinillos y gaseosa a elección.
 *     price: 19900
 *     image: /C:/Users/jeanc/OneDrive/Escritorio/Programming/Trabajo/Frontend/restaurante/img/anvorguesa.jpg
 *     status: Disponible
 *     edo: true
 *   
 *   Order:
 *    type: object
 *    properties:
 *     id:
 *      type: string
 *      description: auto-generated id of order
 *     client:
 *      type: string
 *      description: Name or id of the client
 *     address: 
 *      type: string
 *      description: address of the client
 *     phone:
 *      type: string
 *      description: Phone of the client
 *     obs:
 *      type: string
 *      description: More information about the client
 *     total:
 *      type: number
 *      description: Total purchase value
 *     status:
 *      type: string
 *      description: En preparación, Listo o En entrega
 *    required: 
 *     - client
 *     - address
 *     - phone
 *     - obs
 *     - total
 *    example:
 *     id: 641e1436e5181e37b4d9d326
 *     client: Jean
 *     phone: 312836
 *     obs: Apartamento 801
 *     total: 19900
 *     status: En preparación
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
 *   DetailOrder:
 *    type: object
 *    properties:
 *     id: 
 *      type: string
 *      description: auto-generated id of order detail
 *     idOrder:
 *      type: object
 *      description: idOrder populated
 *     idProduct:
 *      type: object
 *      description: idProduct populated
 *     cant:
 *      type: number
 *      description: Quantity of the product 
 *    required:
 *     - idOrder 
 *     - idProduct
 *     - cant
 *    example:
 *     id: 641e1436e5181e37b4d9d326
 *     idOrder: 
 *      schema:
 *       $ref: '#/components/schemas/Order'
 *     idProduct:
 *      schema:  
 *       $ref: '#/components/schemas/Product'
 *     cant: 2
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
 *    description: The id of detail order
 *    schema:
 *     type: string
 *    required: true
 * 
 */

/**
 * @swagger
 * tags:
 *  name: Order Details
 *  description: Order details management
 */

/**
 * @swagger
 * /api/v1/detailOrders:
 *  get:
 *   summary: Get all order details
 *   tags:
 *   - Order Details
 *   responses:
 *    200:
 *     description: Order details found
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 200
 *        message: Order details found
 *        data: [...OrdersDetail]
 *    500:
 *     description: Error getting the order details
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 500
 *        message: Error getting the order details
 *        
 *   
*/
detailOrderRouter.get("/", getAllOrderDetailsController);
/**
 * @swagger
 * /api/v1/detailOrders/{id}:
 *  get:
 *   summary: Get detail order by id
 *   tags:
 *    - Order Details
 *   parameters:
 *    - $ref: '#/components/parameters/id'
 *   responses:
 *    200:
 *     description: Order detail found
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 200
 *        message: Order detail found
 *        data: ...OrderDetail
 *    500:
 *     description: Error getting the order detail
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 500
 *        message: Error getting the order detail
 */
detailOrderRouter.get("/:id", getOrderDetailByIdController);
/**
 * @swagger
 * /api/v1/detailOrders:
 *  post:
 *   summary: Create a new order detail
 *   tags:
 *    - Order Details
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/Response'
 *      example:
 *       idOrder: 641e1436e5181e37b4d9d326
 *       idProduct: 641e1436e5181e37b4d9d326
 *       cant: 2
 *   responses:
 *    200:
 *     description: Order detail created
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 200
 *        message: Order detail created
 *    500:
 *     description: Error creating the order detail
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 500
 *        message: Error creating the order detail
 */
detailOrderRouter.post("/", createOrderDetailController);
/**
 * @swagger
 * /api/v1/detailOrders/{id}:
 *  put:
 *   summary: Update detail order
 *   tags:
 *    - Order Details
 *   parameters:
 *    - $ref: '#/components/parameters/id'
 *   responses:
 *    200:
 *     description: Order detail updated
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 200
 *        message: Order detail updated
 *    500:
 *     description: Error updating the order detail
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 500
 *        message: Error updating the order detail
 */
detailOrderRouter.put("/:id", updateOrderDetailController);
/**
 * @swagger
 * /api/v1/detailOrders/{id}:
 *  delete:
 *   summary: Delete detail order
 *   tags:
 *    - Order Details
 *   parameters:
 *    - $ref: '#/components/parameters/id'
 *   responses:
 *    200:
 *     description: Order detail deleted
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 200
 *        message: Detail order deleted
 *    500:
 *     description: Error deleting the order detail
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 500
 *        message: Error deleting the order detail
 */
detailOrderRouter.delete("/:id", deleteOrderDetailController);

// Exporting the router
export default detailOrderRouter;


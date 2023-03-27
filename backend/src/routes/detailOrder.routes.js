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
 *    type: Object
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
 *    type: Object
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
 *      items:
 *       - $ref: '#/components/schemas/User'
 *       - $ref: '#/components/schemas/User'
 *      description: The data of the user or users
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
 *    description: The id of detail order
 *    schema:
 *     type: string
 *    required: true
 * 
 */

// Create the routes
detailOrderRouter
    // Get all order details
    .get("/", getAllOrderDetailsController)
    // Get order detail by id
    .get("/:id", getOrderDetailByIdController)
    // Create order detail
    .post("/", createOrderDetailController)
    // Update order detail
    .put("/:id", updateOrderDetailController)
    // Delete order detail
    .delete("/:id", deleteOrderDetailController);

// Exporting the router
export default detailOrderRouter;


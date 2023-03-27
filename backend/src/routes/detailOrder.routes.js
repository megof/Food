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


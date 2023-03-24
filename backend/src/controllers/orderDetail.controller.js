// Description: Controller for orderDetail
// Author: Sebastián Gámez Ariza

// Importing the OrderDetail service
import {
    getAllOrderDetails,
    getOrderDetailById,
    createOrderDetail,
    updateOrderDetail,
    deleteOrderDetail
} from '../services/orderDetail.service.js';


// Get all order details method
export const getAllOrderDetailsController = async (req, res) => {
    // Get all order details
    const response = await getAllOrderDetails();
    // Send the response
    res.status(response.status).send(response);
}

// Get order detail by id method
export const getOrderDetailByIdController = async (req, res) => {
    // Get the id
    const id = req.params.id;
    // Get the order detail
    const response = await getOrderDetailById(id);
    // Send the response
    res.status(response.status).send(response);
}

// Create order detail method
export const createOrderDetailController = async (req, res) => {
    // Get the body
    const orderDetail = req.body;
    // Create the order detail
    const response = await createOrderDetail(orderDetail);
    // Send the response
    res.status(response.status).send(response);
}

// Update order detail method
export const updateOrderDetailController = async (req, res) => {
    // Get the id
    const id = req.params.id;
    // Get the body
    const orderDetail = req.body;
    // Update the order detail
    const response = await updateOrderDetail(id, orderDetail);
    // Send the response
    res.status(response.status).send(response);
}

// Delete order detail method
export const deleteOrderDetailController = async (req, res) => {
    // Get the id
    const id = req.params.id;
    // Delete the order detail
    const response = await deleteOrderDetail(id);
    // Send the response
    res.status(response.status).send(response);
}

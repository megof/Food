// Description: This file contains the OrderDetail service
// Author: Sebastián Gámez Ariza

// Importing the OrderDetail model
import detailOrderModel from "../models/DetailOrder.js";


// Get all the order details
export const getAllOrderDetails = async () => {
    // Create a response object
    let response;
    // Try to get all the order details
    try {
        // Get all the order details
        const orderDetails = await detailOrderModel.find().populate('idOrder').populate('idProduct');
        // Create the response object
        response = {
            status: 200,
            message: "Order details found",
            data: orderDetails
        };
    }
    // Catch an error
    catch (error) {
        // Log the error
        console.log(error);
        // Create the response object
        response = {
            status: 500,
            message: "Error getting the order details",
            data: error
        };
    }
    // Return the response object
    return response;
};

// Get an order detail by id
export const getOrderDetailById = async (id) => {
    // Create a response object
    let response;
    // Try to get the order detail
    try {
        // Get the order detail
        const orderDetail = await detailOrderModel.findById(id).populate('idOrder').populate('idProduct');
        // Create the response object
        response = {
            status: 200,
            message: "Order detail found",
            data: orderDetail
        };
    }
    // Catch an error
    catch (error) {
        // Log the error
        console.log(error);
        // Create the response object
        response = {
            status: 500,
            message: "Error getting the order detail"
        };
    }
    // Return the response object
    return response;
};

// Create an order detail
export const createOrderDetail = async (orderDetail) => {
    // Create a response object
    let response;
    // Try to create the order detail
    try {
        // Create the order detail
        await detailOrderModel.create(orderDetail);
        // Create the response object
        response = {
            status: 200,
            message: "Order detail created",
        };
    }
    // Catch an error
    catch (error) {
        // Log the error
        console.log(error);
        // Create the response object
        response = {
            status: 500,
            message: "Error creating the order detail"
        };
    }
    // Return the response object
    return response;
};

// Update an order detail
export const updateOrderDetail = async (id, orderDetail) => {
    // Create a response object
    let response;
    // Try to update the order detail
    try {
        await detailOrderModel.findByIdAndUpdate(id, orderDetail);
        // Create the response object
        response = {
            status: 200,
            message: "Order detail updated",
        };
    }
    // Catch an error
    catch (error) {
        // Log the error
        console.log(error);
        // Create the response object
        response = {
            status: 500,
            message: "Error updating the order detail"
        };
    }

    return response;

};

// Delete an order detail
export const deleteOrderDetail = async (id) => {
    // Create a response object
    let response;
    // Try to delete the order detail
    try {
        await detailOrderModel.findByIdAndDelete(id);
        // Create the response object
        response = {
            status: 200,
            message: "Order detail deleted",
        };
    }
    // Catch an error
    catch (error) {
        // Log the error
        console.log(error);
        // Create the response object
        response = {
            status: 500,
            message: "Error deleting the order detail"
        };
    }
    // Return the response object
    return response;
};

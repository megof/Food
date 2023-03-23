// Description: This file contains the user service
// Author: Sebastián Gámez Ariza

// Importing the User model
import UserModel from '../models/UserModel.js';

// Get all users method
export const getAllUsers = async () => {
	// Create the response
	let response;
	// Try to get all users
	try {
		// Get all users
		const users = await UserModel.find().select('-password');
		// Create the response
		response = {
			status: 200,
			message: 'Users found',
			data: users,
		};
	// Catch the error
	} catch (error) {
		// Log the error
		console.log(error);
		// Create the response
		response = {
			status: 500,
			message: 'Error getting users',
		};
	}

	// Return the response
	return response;
};

// Get user by username method
export const getUserByUsername = async (username) => {
    // Create the response
    let response;
    // Try to get the user
    try {
        // Get the user
        const userDb = await UserModel.findOne({username});
        // Set the response
        response = {
            status: 200,
            message: 'User found',
            data: userDb,
        };
    // Catch the error
    } catch (error) {
        // Log the error
        console.log(error);
        // Set the response
        response = {
            status: 500,
            message: 'Error getting user',
        };
    }
    // Return the response
    return response;
}

// Create user method
export const createUser = async (user) => {
	// Create the response
	let response;
	// Try to create the user
	try {
		// Create the user
		await UserModel.create(user);
		// Set the response
		response = {
			status: 200,
			message: 'User created',
		};
	// Catch the error
	} catch (error) {
		// Log the error
		console.log(error);
		// Set the response
		response = {
			status: 500,
			message: 'Error creating user',
		};
	}

	// Return the response
	return response;
};

// Update user method
export const updateUser = async (id, user) => {
	// Create the response
	let response;
	// Try to update the user
	try {
		// Update the user
		await UserModel.findByIdAndUpdate(id, user);
		// Set the response
		response = {
			status: 200,
			message: 'User updated',
		};
	// Catch the error
	} catch (error) {
		// Log the error
		console.log(error);
		// Set the response
		response = {
			status: 500,
			message: 'Error updating user',
		};
	}

	// Return the response
	return response;
};

// Delete user method
export const deleteUser = async (id) => {
	// Create the response
	let response;
	// Try to delete the user
	try {
		// Delete the user
		await UserModel.findByIdAndDelete(id);
		// Set the response
		response = {
			status: 200,
			message: 'User deleted',
		};
	// Catch the error
	} catch (error) {
		// Log the error
		console.log(error);
		// Set the response
		response = {
			status: 500,
			message: 'Error deleting user',
		};
	}

	// Return the response
	return response;
};

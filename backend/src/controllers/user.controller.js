// Description: User controller
// Author: Sebastián Gámez Ariza

// Import the bcrypt library
import bcrypt from 'bcrypt';

// Import the jsonwebtoken library
import jwt from 'jsonwebtoken';

// Import the JWT password
import { JWT_PASSWORD } from '../config/env.config.js';

// Import the sign token helper
import signToken from '../helpers/signToken.helper.js';

// Import the user service
import {
	getAllUsers,
	getUserByUsername,
	createUser,
	updateUser,
	deleteUser,
} from '../services/user.service.js';

// Login user
export const loginUserController = async (req, res) => {
    // Try to login the user
    try {
        // Get the user
        const user = req.body;
        // Get the user from the database
        const userDb = await getUserByUsername(user.username);
        // Check if the user exists
        if (!userDb.data) {
            // Send the response
            return res.status(400).json({
                status: 400,
                message: 'Username or password incorrect',
            });
        }
        // Check if the password is correct
        const passwordCorrect = await bcrypt.compare( user.password, userDb.data.password );
        if (!passwordCorrect) {
            // Send the response
            return res.status(400).json({
                status: 400,
                message: 'Username or password incorrect',
            });
        }
        // Check if the user is active
        if (!userDb.data.status) {
            // Send the response
            return res.status(401).json({
                status: 401,
                message: 'User is not active',
            });
        }

        // Sign the token
        const token = signToken({userId: userDb.data._id});

        // Return the response
        return res.status(200).json({
            status: 200,
            message: 'User logged in',
            data: {
                token,
            },
        });
    } catch (error) {
        // Log the error
        console.log(error);
        // Send the response
        return res.status(500).json({
            status: 500,
            message: 'Error logging in',
        });
    }
};

// Get all users
export const getAllUsersController = async (req, res) => {
	// Get all users
	const response = await getAllUsers();
	// Send the response
	res.status(response.status).json(response);
};

// Create user
export const createUserController = async (req, res) => {
    // Try to create the user
    try {
        // Get the user
        const user = req.body;
        // Check if the user exists
        const userDb = await getUserByUsername(user.username);
        // Check if the user exists
        if (userDb.data) {
            // Send the response
            return res.status(400).json({
                status: 400,
                message: 'User already exists',
            });
        }
        // Encrypt the password
        user.password = await bcrypt.hash(user.password, 10);
        // Create the user
        const response = await createUser(user);
        // Send the response
        res.status(response.status).json(response);
    // Catch the error
    } catch (error) {
        // Log the error
        console.log(error);
        // Send the response
        res.status(500).json({
            status: 500,
            message: 'Error creating user',
        });
    }
};

// Update user
export const updateUserController = async (req, res) => {
	// Get the id
	const {id} = req.params;
	// Get the user
	const user = req.body;
    // Check if the password will be updated
    if (user.password) {
        // Encrypt the password
        user.password = await bcrypt.hash(user.password, 10);
    }
	// Update the user
	const response = await updateUser(id, user);
	// Send the response
	res.status(response.status).json(response);
};

// Delete user
export const deleteUserController = async (req, res) => {
	// Get the id
	const {id} = req.params;
	// Delete the user
	const response = await deleteUser(id);
	// Send the response
	res.status(response.status).json(response);
};

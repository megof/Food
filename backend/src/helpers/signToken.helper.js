// Description: This file contains the sign token helper
// Author: Sebastián Gámez Ariza

// Importing the jsonwebtoken library
import jwt from 'jsonwebtoken';

// Importing the jsonwebtoken password
import JWT_PASSWORD from '../config.js';

// Sign token method
export const signToken = (user) => {
    try {
        // Create the token
        const token = jwt.sign(user, JWT_PASSWORD || 'secretPassword!');
        // Return the token
        return token;
    // Catch the error
    } catch (error) {
        // Throw the error
        throw error;
    }
}
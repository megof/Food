// Description: This file contains the configuration environment variables for the application
// Author: Sebastián Gámez Ariza

// Importing the dotenv module
import {config} from 'dotenv';

// Configuring the environment variables
config();

// Exporting the environment variables
export const PORT = process.env.PORT;
export const URI_MONGO = process.env.URI_MONGO;
export const JWT_PASSWORD = process.env.JWT_PASSWORD;
export const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;

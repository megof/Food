// Description: This file contains the User model
// Author: Sebastián Gámez Ariza


// Importing the mongoose library
import { Schema, model } from "mongoose";

// Creating the User schema
const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            trim: true
        },
        status: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: false,
        versionKey: false
    }
);

// Creating the User model
const UserModel = model('User', userSchema);

// Exporting the User model
export default UserModel;


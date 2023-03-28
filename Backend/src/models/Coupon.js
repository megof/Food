// Description: This file contains the Coupon model
// Author: Juan David Ospina Ortega

// Importing the mongoose library
import { Schema, model } from "mongoose";

// Creating the Coupon schema

const couponSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        start_date: {
            type: Date,
            required: true,
            trim: true,
        },
        end_date: {
            type: Date,
            required: true,
            trim: true,
        },
        value: {
            type: Number,
            required: true,
            trim: true,
        },
        dcto: {
            type: Number,
            required: true,
            trim: true,
        },
        min_purchase: {
            type: Number,
            required: true,
            trim: true,
        },
        status: {
            type: Boolean,
            required: true,
            trim: true,
        }
    },
    {
        versionKey: false,
        timestamps: false,
    }
);

// Exporting the Coupon model
export default model('Coupon', couponSchema)
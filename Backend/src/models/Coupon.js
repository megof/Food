import { Schema, model } from "mongoose";

const couponSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        start_date: {
            type: String,
            required: true,
            trim: true,
        },
        end_date: {
            type: String,
            required: true,
            trim: true,
        },
        value: {
            type: String,
            required: true,
            trim: true,
        },
        dcto: {
            type: String,
            required: true,
            trim: true,
        },
        min_purchase: {
            type: String,
            required: true,
            trim: true,
        },
        status: {
            type: String,
            required: true,
            trim: true,
        }
    },
    {
        versionKey: false,
        timestamps: false,
    }
);

export default model('Coupon', couponSchema)
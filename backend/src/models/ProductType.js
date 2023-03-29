import { Schema, model } from "mongoose";

const productTypeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        image: {
            public_id: String,
            secure_url: String
        }
    },
    {   
        versionKey: false,
        timestamps: false,
    }
);

export default model('ProductType', productTypeSchema)
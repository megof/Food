import ProductType from '../models/ProductType.js'
import {uploadImage, deleteImage} from '../config/cloudinary.config.js'
import fs from 'fs-extra'


export const getAll = async (req, res) =>{
    try {
        const productTypes = await ProductType.find()
        res.status(200).json(productTypes)
    } catch (error) {
        res.status(404).json({
            message: error.message || 'Something goes wrong retrieving the product types.'
        })
    }
}


export const getOne = async (req, res) =>{
    try {
        const productType = await ProductType.findById(req.params.id)
        res.json(productType)
    } catch (error) {
        res.status(404).json({
            message: error.message || 'Something goes wrong retrieving the product types.'
        })
    }
}


export const save = async (req, res) =>{
    if(!req.body.name){
        return res.status(400).send({
            message: 'Content cannot be empty.'
        })
    }
    try {
        const newProductType = new ProductType({
            name: req.body.name,
            image: {}
        })
        if(req.files?.image){
            const result = await uploadImage(req.files.image.tempFilePath);
            newProductType.image = {
                public_id: result.public_id,
                secure_url: result.secure_url
            }
        }
        // await fs.unlink(req.files.image.tempFilePath)
        const productTypeSaved = await newProductType.save()
        res.status(201).json(productTypeSaved)
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong saving the product type.'
        })
    }
}


export const deleteOne = async (req, res) =>{
    try {
        const type = await ProductType.findByIdAndDelete(req.params.id)
        if(type){
            await deleteImage(type.image.public_id)
        }
        res.status(200).json({ 
            message: `The product type with id ${req.params.id} has been successfully removed.`
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong deleting the product type.'
        })
    }
}


export const update = async (req, res) =>{
    try {
        await ProductType.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({ 
            message: `The product type with id ${req.params.id} has been successfully updated.`
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong updating the product type.'
        })
    }
}
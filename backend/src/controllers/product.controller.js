import Product from '../models/Product.js'
import {uploadImage} from '../config/cloudinary.config.js'

export const getAll = async (req, res) =>{
    try {
        const products = await Product.find()
        .populate('id_tp_product')
        res.status(200).json(products)
    } catch (error) {
        res.status(404).json({
            message: error.message || 'Something goes wrong retrieving the products.'
        })
    }
}


export const getOne = async (req, res) =>{
    try {
        const product = await Product.findById(req.params.id)
        .populate('id_tp_product')
        res.json(product)
    } catch (error) {
        res.status(404).json({
            message: error.message || 'Something goes wrong retrieving the product.'
        })
    }
}


export const save = async (req, res) =>{
    if(!req.body.id_tp_product || !req.body.name || !req.body.description || !req.body.generalDescr || !req.body.price || !req.body.status || !req.body.edo){
        return res.status(400).send({
            message: 'Content cannot be empty.'
        })
    }
    try {
        const newProduct = new Product({
            id_tp_product: req.body.id_tp_product,
            name: req.body.name,
            description: req.body.description,
            generalDescr: req.body.generalDescr,
            price: req.body.price,
            image: {
                
            },
            status: req.body.status,
            edo: req.body.edo
        })
        
        if(req.files?.image){
            const result = await uploadImage(req.files.image.tempFilePath);
            newProduct.image = {
                public_id: result.public_id,
                secure_url: result.secure_url
            }
        }
        console.log(newProduct);
        const productSaved = await newProduct.save()
        res.status(201).json(productSaved)
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong saving the product.'
        })
    }
}


export const deleteOne = async (req, res) =>{
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json({ 
            message: `The product with id ${req.params.id} has been successfully removed.`
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong deleting the product.'
        })
    }
}


export const update = async (req, res) =>{
    try {
        await Product.findByIdAndUpdate(req.params.id, req.body)
        .populate('id_tp_product')
        res.status(200).json({ 
            message: `The product with id ${req.params.id} has been successfully updated.`
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong updating the product.'
        })
    }
}
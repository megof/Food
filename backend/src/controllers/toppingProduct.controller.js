import ToppingProduct from '../models/ToppingProduct.js'
import Topping from '../models/Topping.js'
import Product from '../models/Product.js'
//tener todas los toppingsProPro
export const getAll = async (req, res) =>{
    try {
        const toppingsPro = await ToppingProduct.find()
        .populate('idProduct')
        .populate('idTopping')
        //si no existe tareas devuelve 404
        if(!toppingsPro)
            return  res.status(404).json({error: 'Something goes wrong retrieving the ToppingProducts.'})

        res.status(200).json(toppingsPro)
        
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Error server.'
        })
    }
}


//tener un ToppingProduct
export const getOne = async (req, res) =>{
    try {
        const toppingsPro = await ToppingProduct.findById(req.params.id)
        .populate('idProduct')
        .populate('idTopping')
       
        if(!toppingsPro)
        return  res.status(404).json({error: 'Something goes wrong retrieving the ToppingProduct.'})

        res.status(200).json(toppingsPro)

    } catch (error) {
        res.status(500).json({
            message: error.message || 'Error server'
        })
    }
}


//guardar un ToppingProduct
export const save = async (req, res) =>{
    //verificar que el nombre no esté vacío
    const {idProduct, idTopping} = req.body
    if(!idProduct || !idTopping){
        return res.status(400).send({
            message: 'Content cannot be empty.'
        })
    }
    try {
        const toppingProd = req.body
        const newToppingsPro= new ToppingProduct(toppingProd)
        const ToppingProductSaved = await newToppingsPro.save()
        res.status(201).json(ToppingProductSaved)
        /**
        const existTopping = await Topping.findById(req.body.idTopping)
        const existProduct = await Product.findById(req.body.idProduct)
        if(existProduct && existTopping){
            const newToppingsPro= new ToppingProduct({
                idProduct: existProduct._id, 
                idTopping: existTopping._id
            })
            const ToppingProductSaved = await newToppingsPro.save()
            res.status(201).json(ToppingProductSaved)
        }else{
            res.status(400).send({message: 'product or topping not found'})
        }
         */

    } catch (error) {
        res.status(500).json({
            message: error.message || 'Error server'
        })
    }
}

//eliminar un ToppingProduct
export const deleteOne = async (req, res) =>{
    try {
        const toppingsPro = await ToppingProduct.findById(req.params.id)
        //verificar que exista el ToppingProduct que se quiera eliminar
        if(!toppingsPro)
            return res.status(404).json({error:'ToppingProduct not found'})

        await ToppingProduct.findByIdAndDelete(req.params.id)

        res.status(200).json({ 
            message: 'The ToppingProduct has been successfully removed.'
        });

    } catch (error) {
        res.status(500).json({
            message: error.message || 'Error server'
        })
    }
}


//actualizar el ToppingProduct
export const update = async (req, res) =>{
    try {
        const toppingsPro = await ToppingProduct.findById(req.params.id)
        //verificar que exista el ToppingProduct que se quiera editar
        if(!toppingsPro)
            return res.status(404).json({error:'ToppingProduct not found'})

        await ToppingProduct.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({topping});
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Error server'
        })
    }
}
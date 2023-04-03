import Order from '../models/Order.js'

export const getAll = async (req, res) =>{
    try {
        const orders = await Order.find()
        res.status(200).json(orders)
    } catch (error) {
        res.status(404).json({
            message: error.message || 'Something goes wrong retrieving the orders.'
        })
    }
}


export const getOne = async (req, res) =>{
    try {
        const order = await Order.findById(req.params.id)
        res.json(order)
    } catch (error) {
        res.status(404).json({
            message: error.message || 'Something goes wrong retrieving the order.'
        })
    }
}


export const save = async (req, res) =>{
    if(!req.body.client || !req.body.address || !req.body.phone || !req.body.total){
        return res.status(400).send({
            message: 'Content cannot be empty.'
        })
    }
    try {
        const newOrder = new Order({
            client: req.body.client,
            address: req.body.address,
            phone: req.body.phone,
            obs: req.body.obs,
            total: req.body.total,
            status: req.body.status,
        })
        const orderSaved = await newOrder.save()
        res.status(201).json(orderSaved)
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong saving the order.'
        })
    }
}


export const deleteOne = async (req, res) =>{
    try {
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json({ 
            message: `The order with id ${req.params.id} has been successfully removed.`
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong deleting the order.'
        })
    }
}


export const update = async (req, res) =>{
    try {
        await Order.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({ 
            message: `The order with id ${req.params.id} has been successfully updated.`
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong updating the order.'
        })
    }
}
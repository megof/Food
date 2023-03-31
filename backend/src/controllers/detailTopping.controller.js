import DetailTopping from '../models/DetailTopping.js'

export const getAll = async (req, res) => {
    try {
        const details = await DetailTopping.find()
        .populate({
            path: 'id_det_order',
            populate: {
                path: 'idOrder',
                model: 'Order'
            },
            populate: {
                path: 'idProduct',
                model: 'Product'
            }
        }).populate('id_topping')
        res.status(200).json(details)
    } catch (error) {
        res.status(404).json({
            message: error.message || 'Something goes wrong retrieving the topping details.'
        })
    }
}

export const getOne = async (req, res) => {
    try {
        const details = await DetailTopping.findById(req.params.id)
        .populate({
            path: 'id_det_order',
            populate: {
                path: 'idOrder',
                model: 'Order'
            },
            populate: {
                path: 'idProduct',
                model: 'Product'
            }
        }).populate('id_topping')
        res.json(details)
    } catch (error) {
        res.status(404).json({
            message: error.message || 'Something goes wrong retrieving the topping details.'
        })
    }
}

export const save = async (req, res) => {
    if (!req.body.id_det_order || !req.body.id_topping || !req.body.cant) {
        return res.status(400).send({
            message: 'Content cannot be empty.'
        })
    }
    try {
        const newDetailToppings = new DetailTopping({
            id_det_order: req.body.id_det_order,
            id_topping: req.body.id_topping,
            cant: req.body.cant,
        })
        const detailsSaved = await newDetailToppings.save()
        res.status(201).json(detailsSaved)
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong saving the topping detail.'
        })
    }
}

export const deleteOne = async (req, res) => {
    try {
        await DetailTopping.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: `The topping detail with id ${req.params.id} has been successfully removed.`
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong deleting the topping detail.'
        })
    }
}

export const update = async (req, res) => {
    try {
        await DetailTopping.findByIdAndUpdate(req.params.id, req.body)
        .populate('id_det_order')
        .populate('id_topping')
        res.status(200).json({
            message: `The topping detail with id ${req.params.id} has been successfully updated.`
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong updating the topping detail.'
        })
    }
}
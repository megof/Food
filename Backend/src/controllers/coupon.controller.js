import Coupon from '../models/Coupon.js'

export const getAll = async (req, res) => {
    try {
        const coupons = await Coupon.find()
        res.status(200).json(coupons)
    } catch (error) {
        res.status(404).json({
            message: error.message || 'Something goes wrong retrieving the coupons.'
        })
    }
}

export const getOne = async (req, res) => {
    try {
        const coupons = await Coupon.findById(req.params.id)
        res.json(coupons)
    } catch (error) {
        res.status(404).json({
            message: error.message || 'Something goes wrong retrieving the coupons.'
        })
    }
}

export const save = async (req, res) => {
    if (!req.body.name || !req.body.start_date || !req.body.end_date || !req.body.value || !req.body.dcto || !req.body.min_purchase || !req.body.status) {
        return res.status(400).send({
            message: 'Content cannot be empty.'
        })
    }
    try {
        const newCoupons = new Coupon({
            name: req.body.name,
            start_date: req.body.start_date,
            end_date: req.body.end_date,
            value: req.body.value,
            dcto: req.body.dcto,
            min_purchase: req.body.min_purchase,
            status: req.body.status,
        })
        const couponsSaved = await newCoupons.save()
        res.status(201).json(couponsSaved)
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong saving the coupon.'
        })
    }
}

export const deleteOne = async (req, res) => {
    try {
        await Coupon.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: `The coupon with id ${req.params.id} has been successfully removed.`
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong deleting the coupon.'
        })
    }
}

export const update = async (req, res) => {
    try {
        await Coupon.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            message: `The coupon with id ${req.params.id} has been successfully updated.`
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong updating the coupon.'
        })
    }
}
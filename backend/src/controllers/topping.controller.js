import Topping from '../models/Topping.js'

//tener todas los toppings
export const getAll = async (req, res) =>{
    try {
        const toppings = await Topping.find()
        //si no existe tareas devuelve 404
        if(!toppings)
            return  res.status(404).json({error: 'Something goes wrong retrieving the toppings.'})
 
        res.status(200).json(toppings)
        
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Error server.'
        })
    }
}


//tener un topping
export const getOne = async (req, res) =>{
    try {
        const topping = await Topping.findById(req.params.id)
       
        if(!topping)
        return  res.status(404).json({error: 'Something goes wrong retrieving the topping.'})

        res.status(200).json(topping)

    } catch (error) {
        res.status(500).json({
            message: error.message || 'Error server'
        })
    }
}


//guardar un topping
export const save = async (req, res) =>{
    //verificar que el nombre no esté vacío
    const {name, price} = req.body
    console.log("console:",req.body)
    const edo = true
    if(!name || !price ){
        return res.status(400).send({
            message: 'Content cannot be empty.'
        })
    }
    try {
        const newTopping = new Topping({ name, price, edo})
        await newTopping.save()
        res.status(201).json(newTopping)

    } catch (error) {
        res.status(500).json({
            message: error.message || 'Error server'
        })
    }
}

//eliminar un topping
export const deleteOne = async (req, res) =>{
    try {
        const topping = await Topping.findById(req.params.id)
        //verificar que exista el topping que se quiera eliminar
        if(!topping)
            return res.status(404).json({error:'Topping not found'})

        await Topping.findByIdAndDelete(req.params.id)

        res.status(200).json({ 
            message: 'The topping has been successfully removed.'
        });

    } catch (error) {
        res.status(500).json({
            message: error.message || 'Error server'
        })
    }
}


//actualizar el topping
export const update = async (req, res) =>{
    try {
        const topping = await Topping.findById(req.params.id)
        //verificar que exista el topping que se quiera editar
        if(!topping)
            return res.status(404).json({error:'Topping not found'})

        await Topping.findByIdAndUpdate(req.params.id, req.body)
        const toppingUpdate = await Topping.findById(req.params.id)
        console.log(req.body)
        res.status(200).json(toppingUpdate);
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Error server'
        })
    }
}
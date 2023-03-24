import ToppingProduct from '../models/toRefs.js'

//tener todas los toppingsProPro
export const getAll = async (req, res) =>{
    try {
        const toppingsPro = await ToppingProduct.find()
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
    if(!req.body.name){
        return res.status(400).send({
            message: 'Content cannot be empty.'
        })
    }
    try {
        const newToppingsPro= new ToppingProduct({
            name: req.body.name,
        })
        const ToppingProductSaved = await newToppingsPro.save()
        res.status(201).json(ToppingProductSaved)

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
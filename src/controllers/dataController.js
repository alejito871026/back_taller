const product = require('../models/product')
const stock = require('../models/stockProducts')
module.exports = {
    async returnData(req,res){
        let p = await product.find().populate('stock')
        res.json(p)
    },
    async postData(req,res){
        if(!req.body.seccion){
            return res.status(201).json('Falta informacion para registrar el producto, no llego la seccion a la que pertenece')
        }
        if(!req.body.nombre){
            return res.status(201).json('Falta informacion para registrar el producto, no llego el nimbre del producto')
        }
        try {
            const createStock = new stock(
            {
                cantidad : req.body.cantidad
                }
            )
            const create = await createStock.save()
            if(create){
                const newProduct = new product(
                    {
                        nombre : req.body.nombre,
                        seccion : req.body.seccion,
                        // stock : create._id
                    }
                )
                const producto = await newProduct.save()
                console.log(producto)
                res.json('se a creado el producto con exito')
            }            
        } catch (error) {
            // catchErrorMongoose()
            // catchErrorMongoose()
            const err = Object.values(error.errors)
            let variable = ''
            for (let a = 0; a < err.length; a++) {
                const element = err[a];
                variable = element
            }
            return res.status(201).json({msg:'hubo un error al registrar un producto,' + variable})
        }
    },
    async updateData(req,res){
        console.log('se ejecuta updtae')
        res.json('muy bien')
    },
    async deleteData(req,res){
        const deleted = await product.deleteOne({_id : req.body._id})
        res.json('Se a eliminado el producto con exito')
    },
} 

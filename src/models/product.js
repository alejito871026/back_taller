const mongoose = require('mongoose');
const stockProducts = require('./stockProducts');
const Schema = mongoose.Schema;

const productsSquema = new Schema({
    nombre : {type : String,  required : [true,'nombre del producto obligatorio']},
    seccion : { type : Array,  required : [true,'seccion del producto obligatorio']},
    stock : {type : Schema.Types.ObjectId, ref : 'stock', required : [true,'_id del stock obligatorio']}
});
productsSquema.pre('deleteOne', async function(next) {
    const docToDelete = await this.model.findOne(this.getQuery());
    const deleteStock = await stockProducts.deleteOne({_id : docToDelete.stock})
    next()
  });

module.exports = mongoose.model('products', productsSquema);
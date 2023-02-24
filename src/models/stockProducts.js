const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sockSquema = new Schema({
    cantidad : {type : Number,  default : 0},
});

module.exports = mongoose.model('stock', sockSquema);
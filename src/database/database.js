const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const {mongodb} = require('./keys.js');
mongoose.connect(mongodb.uri,mongodb.options).then (
    ()=> {console.log('base de datos conectada');},
    err => {
        console.log(err)
    }
);

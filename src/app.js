const express = require('express');
var cors = require('cors')
 
const app = require('express')();
//midelwares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));

require('./database/database') 

app.use('/',require('./routes/index'));

const host = process.env.HOST || '0.0.0.0';
const port  = process.env.PORT || 3000

//app.set('port', process.env.PORT || 9000);


app.listen(port,host,() => {
    console.log('server on port',port);
});
module.exports = app  
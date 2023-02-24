const express = require('express');
const router = express.Router();

const login = require('./login')
const data = require('./data')

router.use('/login', login)
router.use('/data', data)

module.exports = router;
const express = require('express');
const router = express.Router();

const dataController = require('../controllers/dataController')

router.route('/')
    .get(dataController.returnData)
    .post(dataController.postData)
    .put(dataController.updateData)
    // .delete(dataController.deleteData)

router.route('/delete')
    .post(dataController.deleteData)





module.exports = router;
const express = require('express');
const router = express.Router();

const roleController = require('../controllers/role.controller')

router.post('/create', roleController.create);
router.get('/get', roleController.getAll);
router.get('/get/count/:filter?', roleController.getCount);
router.put('/update', roleController.update);
router.delete('/delete', roleController.delete);
router.get('/get/:id', roleController.getOne);

module.exports = router;
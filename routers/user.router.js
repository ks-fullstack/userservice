const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

router.post('/create', userController.create);
router.get('/get', userController.getAll);
router.get('/get/count/:filter?', userController.getCount);
router.put('/update', userController.update);
router.delete('/delete', userController.delete);
router.get('/get/:id', userController.getOne);

module.exports = router;
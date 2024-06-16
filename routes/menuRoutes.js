const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');


router.get('/', menuController.getAllMenuItems);
router.get('/listCategories', menuController.getAllcategories);
router.get('/:id', menuController.getMenuItemById);

module.exports = router;

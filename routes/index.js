const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log('Router is redering');

router.get('/', homeController.home);
router.post('/create-todo', homeController.createTodo);
router.get('/delete-todo', homeController.deleteTodo);
router.get('/update-todo', homeController.updateTodo);

// for any further routes, access from here
// router.use('/routerName', require('./routerFile'));

module.exports = router;
const express = require('express');
const userController = require('../controller/usercontroller');

const router = express.Router();

router.get('/users', (req, res) => {
    userController.getUsers(req, res);
});

router.get('/users/:id', (req, res) => {
    userController.getUserById(req, res);
})
        

module.exports = router;
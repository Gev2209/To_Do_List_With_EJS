const express = require('express')
const routerUsers = express.Router()
const path = require('path');

routerUsers.get('/users', (req, res) => {
    res.render(path.join(__dirname, '..', 'view', 'edit.ejs'), {title : "Hello Gevorg"});
})


module.exports = {routerUsers}
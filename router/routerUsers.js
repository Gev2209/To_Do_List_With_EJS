const express = require('express')
const routerUsers = express.Router()
const path = require('path')

routerUsers.get('/users/:id', (req, res) => {
    res.render(path.join(__dirname, '..', 'view', 'users.ejs'), {title : "Hello Gevorg"});
    // res.sendFile(path.join(__dirname, '..', 'view', 'users.ejs'))
})

module.exports = {routerUsers}
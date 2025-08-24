const express = require('express')
const routerUser = express.Router()
const path = require('path')

routerUser.get('/user', (req, res) => {
    res.render(path.join(__dirname, '..', 'view', 'user.ejs'), {title : "Hello Gevor"});
})

module.exports = {routerUser}
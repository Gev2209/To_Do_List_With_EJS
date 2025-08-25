const express = require('express')
const routerUsers = express.Router()
const path = require('path');
// const { readFile } = require('../middleware/readFile');
// const fs = require('fs').promises



routerUsers.get('/users', (req, res) => {
    res.render(path.join(__dirname, '..', 'view', 'edit.ejs'), {title : "Hello Gevorg"});
})


// routerUsers.post('/users', readFile,async (req, res) => {
//     const {users} = res.locals
//     users.push(req.body)
//     console.log(req.body)

//     await fs.unlink(path.join(__dirname, 'db', 'users.json'))
//     await fs.appendFile(path.join(__dirname, 'db', 'users.json'), JSON.stringify(users))
//     res.redirect('/users')
//     console.log(users)
//     // res.render(path.join(__dirname, '..', 'view', 'users.ejs'), {title : "Hello Gevorg"});
//     // res.sendFile(path.join(__dirname, '..', 'view', 'users.ejs'))
// })
module.exports = {routerUsers}
const express = require('express')
const routerUser = express.Router()
const path = require('path');
const { readFile } = require('../middleware/readFile');
const fs = require('fs').promises
const bycript = require('bcryptjs')

routerUser.get('/user', readFile, (req, res) => {
    const {users} = res.locals
    res.render(path.join(__dirname, '..', 'view', 'postUsers.ejs'), {title : "Helloo", users: users});
})


routerUser.post('/user', readFile,async (req, res) => {
    const {users} = res.locals
    const body = req.body
    const hashName = await bycript.hash(body.name, 10)
    const user = {
        id: crypto.randomUUID(),
        // name: req.body.name
        name: `${body.name} -> ${hashName}`
    }
    users.push(user)

    await fs.unlink(path.join(__dirname,'..', 'db', 'users.json'))
    await fs.appendFile(path.join(__dirname,'..', 'db', 'users.json'), JSON.stringify(users))
    res.redirect('/user')
})
module.exports = {routerUser}
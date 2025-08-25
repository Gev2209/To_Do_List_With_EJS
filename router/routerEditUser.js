const express = require('express')
const routerEditUsers = express.Router()
const path = require('path');
const { readFile } = require('../middleware/readFile');
const fs = require('fs').promises

routerEditUsers.get('/edit/:id', readFile,(req, res) => {
    const {users} = res.locals
    const user = users.find((e) => e.id === Number(req.params.id))
    console.log(user.id);
    
    res.render(path.join(__dirname, '..', 'view', 'edit.ejs'), {title : "Hello Gevorg", users : user});
})



routerEditUsers.post('/edit/:id', readFile, async(req, res) => {
    const {users} = res.locals
    const user = users.find((e) => e.id === Number(req.params.id))
    if (user) {
        user.name = req.body.name
    }

    await fs.unlink(path.join(__dirname,'..', 'db', 'users.json'))
    await fs.appendFile(path.join(__dirname,'..', 'db', 'users.json'), JSON.stringify(users, null, 2))
    res.redirect('/user')
})

module.exports.routerEditUsers = routerEditUsers
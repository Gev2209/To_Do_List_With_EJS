const express = require('express');
const deleteRout = express.Router();
const path = require('path');
const fs = require('fs').promises;
const { readFile } = require('../middleware/readFile');


deleteRout.post('/delete/:id', readFile ,async (req, res) => {
    let {users} = res.locals
    users = users.filter((e) => e.id != req.params.id)

    await fs.unlink(path.join(__dirname,'..', 'db', 'users.json'))
    await fs.appendFile(path.join(__dirname,'..', 'db', 'users.json'), JSON.stringify(users, null, 2))
    res.redirect('/user')
})

module.exports.deleteRout = deleteRout



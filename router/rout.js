const express = require('express')
const router = express.Router()
const path = require('path')
const { readFile } = require('../middleware/readFile')
const fs = require('fs').promises


router.get('/', readFile, async (req, res) => {
    // const users = await JSON.parse(await fs.readFile(path.join(__dirname, '..', 'db', 'users.json'), 'utf-8'))
    const {users} = res.locals
    res.render(path.join(__dirname, '..', 'view', 'home.ejs'), {title : users})
})

module.exports = {router}
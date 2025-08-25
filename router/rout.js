const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/', async (req, res) => {
    res.render(path.join(__dirname, '..', 'view', 'home.ejs'), {title : 'heloooo'})
})

module.exports = {router}
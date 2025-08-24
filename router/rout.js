const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/', (req, res) => {
    res.render(path.join(__dirname, '..', 'view', 'index.ejs'), {title : "Hello Gev"})
})

module.exports = {router}
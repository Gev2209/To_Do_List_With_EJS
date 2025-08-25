const path = require('path')
const fs = require('fs').promises

const readFile = async (req, res, next) => {
    const users = await JSON.parse(await fs.readFile(path.join(__dirname, '..', 'db', 'users.json'), 'utf-8'))
    res.locals.users = users
    next()
}

module.exports.readFile = readFile
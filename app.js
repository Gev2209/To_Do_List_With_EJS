const express = require('express')
const { router } = require('./router/rout');
const { routerUser } = require('./router/routerUser');
const { routerUsers } = require('./router/routerUsers');
require('dotenv').config()
const port = process.env.PORT;
const app = express()
app.use(express.json())

app.use(express.static('view'))

app.set('view engine', 'ejs')



app.use('', router)

app.use('/', routerUser)

app.use('/', routerUsers)

app.listen(port,() => {
    console.log(`Server Running is port-> ${port}`)
})
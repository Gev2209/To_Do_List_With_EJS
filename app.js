const express = require('express')
const { router } = require('./router/rout');
const { routerUser } = require('./router/routerUser');
const { routerUsers } = require('./router/routerUsers');
const { deleteRout } = require('./router/deleteRout');
require('dotenv').config()
const port = process.env.PORT;
const app = express()
app.use(express.json())

app.use(express.static('view'));
app.use(express.urlencoded());
app.set('view engine', 'ejs')



app.use('', router)

app.use('/', routerUser)

app.use('/', routerUsers)

app.use('/user', deleteRout)

app.listen(port,() => {
    console.log(`Server Running is port-> ${port}`)
})
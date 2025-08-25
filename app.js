const express = require('express');
require('dotenv').config()
const port = process.env.PORT;
const app = express()
const { router, routerUser, deleteRout, routerEditUsers } = require('./router/index');
app.use(express.json())
app.use(express.static('view'));
app.use(express.urlencoded());
app.set('view engine', 'ejs')



app.use('', router)

app.use('/', routerUser)

app.use('/user', deleteRout)

app.use('/users', routerEditUsers)

app.listen(port, () => {
    console.log(`Server Running is port-> ${port}`)
})
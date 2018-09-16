const express = require("express")
const app = express()
const  basicConfig = require('./config/basic.config')
const basicRouter = require('./routers')
const dataRouter = require('./routers/data')


app.use('/', basicRouter)
app.use('/dealdata', dataRouter)

app.listen(basicConfig.port, () => {
    console.log("example app listening on 3000")
})
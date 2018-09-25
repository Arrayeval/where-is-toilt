const express = require("express")
const app = express()
var bodyParser = require('body-parser')
var path = require('path')
const  basicConfig = require('./config/basic.config')
const basicRouter = require('./routers')
const dataRouter = require('./routers/data')
const loginRouter = require('./routers/login')
var session = require('express-session')
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
    secret: '#sddjswdhww22ygfw2233@@@%#$!Q!%*!@',
    resave: false,
    saveUninitialized: true
}))
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use('/', basicRouter)
app.use('/dealdata', dataRouter)
app.use('/user', loginRouter)

app.listen(basicConfig.port, () => {
    console.log("example app listening on 3000")
})
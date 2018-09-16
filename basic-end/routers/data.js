/**
 * 几种去参数的方式：
 * https://blog.csdn.net/hhthwx/article/details/78908034
 * 
 */
var express = require("express")
var router = express.Router()
var DealData = require("../module/DealData")
var commonFun = require('../util/common')
// demo 
router.get("/", (req, res, next) => {
    var type = req.param("type") || ''
    DealData.getData(type, res).then(obj => {
        res.send(obj)
    })
})

router.post('/write', (req, res, next) => {
    console.log(req.body)
    console.log(req.query.title)
    console.log(req.param)
    var dataObj = {
        id:  commonFun.guidGenerate(),
        time: new Date(),
        type: req.query.type || '',
        url: req.query.url || '',
        img: req.query.img || '',
        title: req.query.title || ''
    }
    DealData.writeData(dataObj, res).then(obj => {
        res.send(obj)
    })
}),

router.post('/writeConfig', (req, res, next) => {
    var dataObj = {
        data:  req.body.data
    }
    DealData.writeConfig(dataObj, res)
})
module.exports = router;
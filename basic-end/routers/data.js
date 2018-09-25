/**
 * 几种去参数的方式：
 * https://blog.csdn.net/hhthwx/article/details/78908034
 * 
 */
var express = require("express")
var router = express.Router()
var fs  = require("fs")
var DealData = require("../module/DealData")
var commonFun = require('../util/common')
var PATH = './public/data/'
// demo 
router.get("/", (req, res, next) => {
    var type = req.param("type") || ''
    DealData.getData(type, res).then(obj => {
        res.send(obj)
    })
})

router.get('/read', function(req, res, next) {
  if (!req.session.user) {
    return res.send({
      status: 0,
      info: '未鉴权认证'
    })
  }
    var type = req.param('type') || '';
    fs.readFile(PATH + type + '.json', function(err, data){
      if(err){
        return res.send({
          status:0,
          info:'读取文件出现异常'
        });
      }
      var COUNT = 50;
      //TODO: try
      var obj = [];
      try{
        obj = JSON.parse(data.toString());
      }catch(e){
        obj = [];
      }
      if(obj.length > COUNT){
        obj = obj.slice(0, COUNT);
      }
      return res.send({
        status:1,
        data:obj
      });
    });
  });

router.post('/write', (req, res, next) => {
    // console.log('body', req.body)
    // console.log(req.query.title)
    // console.log('param', req.param)
    var dataObj = {
        id:  commonFun.guidGenerate(),
        time: new Date(),
        type: req.body.type || '',
        url: req.body.url || '',
        img: req.body.img || '',
        title: req.body.title || ''
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
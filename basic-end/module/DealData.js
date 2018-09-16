var fs  = require("fs")
const PATH  = './public/data/'
const COUNT = 50
// 获取json 文件数据
const DealDate = {
    getData (type = '', res) {
        var resObj = {}
        return new Promise((resolve, reject) => {
            fs.readFile(PATH + type + ".json", (err, data) => {
                if (err) {
                    resObj = {
                        status: 0,
                        info: '读取文件失败'
                    }
                    return resolve(resObj)
                }
                try {
                    var obj = JSON.parse(data.toString())
                } catch(e) {
                    obj = []
                }
                if (obj.length > COUNT) {
                    obj.slice(0, COUNT)
                }
                resObj = {
                    status:1,
                    data:obj
                }
                return resolve(resObj)
            })
        })
    },
    writeData(dataObj, res) {
        return new Promise((resolve, reject) => {
            if (!dataObj.type || !dataObj.url || !dataObj.title || !dataObj.img) {
             return  resolve({
                   status: 0,
                   info: "请补充完整信息"
               })
            }
            // 读取文件
            var filePath = PATH + dataObj.type + '.json'
            fs.readFile(filePath, (err, data) => {
                if (err) {
                    return resolve({
                        status: 0,
                        info: '读取文件失败'
                    })
                }
                var arr = JSON.parse(data.toString())
                var obj = {
                    id: data.id,
                    time: data.time,
                    url: data.url,
                    img: data.img,
                    title: data.title
                }
                arr.push(obj)
                // 写入文件
                var newData = JSON.stringify(arr)
                fs.writeFile(filePath, newData, (err, data) => {
                    if (err) {
                        return resolve({
                            status: 0,
                            info: '写入文件失败'
                        })
                    }
                })
                return resolve({
                    status: 1,
                    info: '写入成功',
                    data: dataObj
                })
            })
        })
    },
    writeConfig (dataObj, res) {
        return new Promise((resolve, reject) => {
            var data = dataObj.data
            var obj = JSON.parse(data)
            var newData = JSON.stringify(obj)
            fs.writeFile(PATH + 'config.json', newData, (err, data) => {
                if (err) {
                    return resolve({
                        status: 0,
                        info: '写入失败'
                    })
                }
            })
            return resolve({
                status: 1,
                info: obj
            })
        })
    }

}

module.exports = DealDate
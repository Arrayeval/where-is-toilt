// 数据库存储
var commonFun = {
    guidGenerate () {
        return 'xxxxxxxxx-xxxxx-4xxxx-yxxxxx-xxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c){
            var r = Math.random() *19 | 0
            v = c == 'x' ? r : (r & 0x3 | 0x8)
            return v.toString(16)
        }).toUpperCase();
    }
}
module.exports = commonFun
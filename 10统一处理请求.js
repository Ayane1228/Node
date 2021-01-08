// 通过路由能够访问test中的文件，默认打开index.html
// 请求 index/html时候，访问的就是 wwwDIR + '/index.html’
// 请求的是url，访问wwwDir + ‘/url’
var http = require('http')
var fs = require('fs')
var server = http.createServer()
// 文件路径
var wwwDir = 'F:/File/study/node/text' 
server.on('request',function(req,res){
    // 定义请求的url
    var url = req.url
    // 默认访问的url地址
    var fileUrl = '/index.html'
    if (url !== '/') {
        // 如果不是默认路径，重新赋值，响应对应的文件
        var fileUrl = url
        fs.readFile(wwwDir + fileUrl,function (err,data) {
            if (err) {
                res.end('404 Not found')
            } else {
                res.end(data)
            }
        })
    } else {
        fs.readFile(wwwDir + fileUrl,function (err,data) {
            if (err) {
                res.end('404 Not found')
            } else {
                res.end(data)
            }
        })        
    }
}).listen(3000,function () {
    console.log('server start');
})
// 服务器发送html格式的字符串，浏览器通过解析这个字符串变为页面
var http = require('http')
var fs = require('fs')
var server = http.createServer()
server.on('request',function(req,res){
    var url = req.url
    if (url === '/html') {
        fs.readFile('./test.html',function(err,data){
            if (err) {
                console.log('fs出错了')
            } else {
                res.setHeader('Content-Type','text/html;charset=utf-8')
                res.end(data)
            }
        })
    } else if (url === '/img') {
        fs.readFile('./test.jpg',function(err,data){
            if (err) {
                console.log('err')
            } else {
                res.setHeader('Content-Type','image/jpeg')
                res.end(data)  
            }
        })
    }
}).listen(3000,function(){
    console.log('server start')
})
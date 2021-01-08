// 通过路由能够访问test中的文件，默认打开index.html
// 请求 index/html时候，访问的就是 wwwDIR + '/index.html’
// 请求的是url，访问wwwDir + ‘/url’
var http = require('http')
var fs = require('fs')
var server = http.createServer()
server.on('request',function(req,res){
    var url = req.url
    // 请求文件路径抽离
    var wwwDir = 'F:/File/study/node/text'
    if (url === '/') {
        fs.readFile(wwwDir + '/index.html',function(err,data){
            if (err) {
                return res.end('404 Not found')
            } else {
                res.end(data)
            }
        }) 
    } else if (url === '/a.txt') {
        fs.readFile(wwwDir + '/a.txt',function(err,data){
            if (err) {
                return res.end('404 Not found')
            } else {
                res.end(data)
            }
        })
    } else if (url === '/index.html') {
        fs.readFile(wwwDir + '/index.html',function(err,data){
            if (err) {
                return res.end('404 Not found')
            } else {
                res.end(data)
            }
        })
    }
})
.listen(3000,function(){
    console.log('server start');
})
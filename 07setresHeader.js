// 设置服务器响应头的Content-Type,设置发送的数据类型和数据编码格式
// res.setHeader('Content-Type','text/plain;charset=utf-8'); text/plain:普通文本
var http = require('http');
var server = http.createServer();
server.on('request',function(req,res){
    var url = req.url;
    if(url === '/text'){
        res.setHeader('Content-Type','text/plain;charset=utf-8');
        res.end('hello 世界')
    }else if(url === '/html'){
        // text/html：html格式的文本
        res.setHeader('Content-Type','text/html;charset=utf-8');
        res.end('<h1>这里是html</h1>')        
    }
}).listen(3000,function(){
    console.log('server start');
})

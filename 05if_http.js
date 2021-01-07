// 引入http模块
var http = require('http');
// 创建实例
var server = http.createServer();
// 接受请求，设置回调函数
server.on('request',function(req,res){
    var url = req.url;
    // res.end:响应内容只能是二进制数据或者字符串 
    // 通过JSON.stringify()转换：JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串。
    if(url == '/login'){
        res.end('login')
    }else if(url == '/student'){
        res.end('student')
    }else{
        res.end('404');
    }
})
    // JSON.parse()	用于将一个 JSON 字符串转换为 JavaScript 对象。
// 绑定端口号
.listen(4000,function(){
    console.log('服务器启动，通过http://127.0.0.1:4000访问');
})
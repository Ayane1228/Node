// 引入http模块，内置模块，可以处理http请求
var http = require('http')
//创建服务
// req：请求对象
// res：响应对象，将要相应给客户端的对象
var server = http.createServer( (req,res) => {
    // 设置响应头(响应的数据类型及编码)
    res.setHeader('Content-Type','text/html;charset=utf-8')
    //发送响应状态：res.statusCode = 200
    res.statusCode = 200
    //响应结束，发送消息
    res.end('你好 Node')
})
//服务监听 server.listen
server.listen(3000, () => {
    console.log('server start');
})
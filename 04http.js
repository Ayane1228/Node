// 你可以使用node非常轻松的创建一个服务器
// Node.js中提供了一个核心模块http创建服务器

// 引入http模块
var http = require('http');
// 使用http.createServer()来创建一个web服务器
var server = http.createServer();

// 返回的是一个服务器实例，
// 服务器提供对数据的服务：接受请求，处理请求，发响应

// server.on('请求名',回调函数)：
// request的回调函数有两个参数 request请求对象 response响应对象
// request请求对象：请求对象可以用来获取客户端的一些请求信息，例如请求路径
// responce响应对象：响应对象可以用来给客户端发送响应信息

server.on('request',function(req,res){
   console.log('收到请求了，请求路径' + req.url);
    // responce对象用write方法，可以用来给客户端发送数据
    // write可以使用多次，但最后一定要使用end来结束响应
    res.write('request123');
    if(req.url == '/login'){
        res.write('login')
    }
    res.end()  
})

//这个服务器会将不容url的请求都使用request会进行响应，那么如何对不同url的请求，进行不同的响应呢，可以使用if语句进行判断 



// 绑定端口号，启动服务器
server.listen(3000,function(){
    // 启动服务器的回调函数
    console.log('服务器启动，通过http://127.0.0.1:3000访问');
})
// 浏览器输入：http://localhost:3000/ 访问服务器，cmd中打印接收到request请求了
// 关闭浏览器ctrl+c
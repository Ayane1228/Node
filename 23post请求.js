var http = require('http')
var url = require('url')
var server = http.createServer( (req,res) => {
    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.statusCode = 200
    var postString = ''
    req.on('data',(postData) => {
        console.log(postData);
        // 转为字符串
        postString = postData.toString()
    })
    req.on('end',() => {
        // 转为对象
        let parm = new url.URLSearchParams(postString)
        console.log(parm.get('name'));
        console.log(parm.get('age'));
    })
    res.end('end')
})

//服务监听 server.listen
server.listen(3000, () => {
    console.log('server start');    
})
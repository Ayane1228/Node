var http = require('http')
var url = require('url')
// var server = http.createServer( (req,res) => {
//     res.setHeader('Content-Type','text/html;charset=utf-8')
//     res.statusCode = 200
//     console.log(req.url)
//     var myUrl = url.parse(req.url,true)
//     console.log(myUrl.query)
//     console.log(myUrl.query.id)
//     res.end('end')
// })
var server = http.createServer( (req,res) => {
    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.statusCode = 200
    var myUrl = url.parse(req.url)
    // 使用URLSearchParams
    var params = new url.URLSearchParams(myUrl.query)
    console.log(params)
    if ( params.has('id') ) 
    {
        console.log( params.get('id') )
    } else 
    {
        console.log('NOT FOUND ID')
    }
    res.end('end')
})


//服务监听 server.listen
server.listen(3000, () => {
    console.log('server start');
})
var http = require('http')
var fs = require('fs')
var template = require('art-template')
var url = require('url')
// http://127.0.0.1:3000/pinglun?name=123&message=123123312
// 对于这种表单提交的url，其中有用户评论的内容，所以我们只要判断url的请求路径是否是/pinglun即可
// 导入url模块
var url = require('url')
var comments = [
  {
    name:'Ayane',
    message:'今天天气不错',
    datatime:'2021年1月9日'
  },
  {
    name:'Ayane',
    message:'今天天气不错',
    datatime:'2021年1月9日'
  },
  {
    name:'Ayane',
    message:'今天天气不错',
    datatime:'2021年1月9日'
  },  
  {
    name:'Ayane',
    message:'今天天气不错',
    datatime:'2021年1月9日'
  },
  {
    name:'Ayane',
    message:'今天天气不错',
    datatime:'2021年1月9日'
  },
  {
    name:'Ayane',
    message:'今天天气不错',
    datatime:'2021年1月9日'
  }
]
http.createServer(function(req,res){
  // 将url转换为对象类型，参见13url.pares的使用
var obj = url.parse(req.url,true) 
var pathname = obj.pathname
  if (pathname === '/') {
    fs.readFile('./views/index.html',function (err,data) {
      if (err) {
        return console.log('404')
      } else {
        // 模板字符串渲染首页
        var httptStr = template.render(data.toString(),{
          comments:comments
        })
        res.end(httptStr)
      }
    })
  } else if (pathname === '/pinglun') {
    // JSON.stringify:将javaScript对象转换为JSON数据 
    // 获取表单提交的数据
    // 生成日期到数据对象中，然后将对象转为JSON数据并存储到数组中
    // 让用户重定向到首页
    var comment = obj.query
    comment.dataTime = '2021年1月9日'
    comments.unshift(comment) 
    // 请求首页(服务器重定向：通过服务器设置客户端重定向，设置状态码302，在响应头通过Location往哪重定向)
    // 如果客户端发现服务器的状态码是302就会去响应头中的Location并跳转  
    res.statusCode = 302
    res.setHeader('Location','/')
    res.end()
  } else if (pathname === '/post') {
    fs.readFile('./views/post.html',function (err,data) {
      if (err) {
        return console.log('404err post')
      }else {
        res.end(data)
      }
    })
  } else if (pathname.indexOf('/public/') === 0) {
      fs.readFile('.' + pathname, function (err,data) {
        if (err) {
          return console.log('404 public')
        } else {
          res.end(data)
        }
      })
  } else {
    fs.readFile('./views/404.html',function (err,data) {
      if (err) {
        return console.log('404 error')
      } else {
        res.end(data)
      }
    })
  }
}).listen(3000,function(){
  console.log('sever start');
})

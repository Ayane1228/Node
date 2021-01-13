var express =require('express')
var app = express()
var bodyParser = require('body-parser') 
// 公开资源
app.use('/public/',express.static('./public/'))
// 使用art-template 模板引擎
//第一个参数指定渲染文件的结尾，使用art-template模板引擎
app.engine('html',require('express-art-template'))
var comments = [
    {
        name:'张三',
        message:'saddddd',
        dateTime:'2021年1月11日'
    }, 
    {
        name:'张三',
        message:'saddddd',
        dateTime:'2021年1月11日'
    },
    {
        name:'张三',
        message:'saddddd',
        dateTime:'2021年1月11日'
    },
    {
        name:'张三',
        message:'saddddd',
        dateTime:'2021年1月11日'
    }
]

// Express为响应对象提供了一个render方法，这个方法只有在使用模板引擎时才能使用 

// 第一个参数不能写路径，默认会去view文件夹中查找模板html
// 修改默认的views路径 app.set('views',路径)
app.get('/',function (req,res) {
    // res.render('html模板名'，{模板路径})
    res.render('index.html',{
        comments    
    })
})
app.get('/post',function (req,res) {
    res.render('post.html')
})
    /*  处理表单的 post 请求需要结合第三方插件：middleware(中间件) 安装 npm install --save body-parser
        然后配置body-parser 中间件(插件，专门用来解析表单)：

        var bodyParser = require('body-parser') 
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());

        只要添加了这个配置，则可以通过req.body获得请求体数据
    */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.post('/post',function (req,res) {
    var comment = req.body
    comment.dataTime = '2021年1月12日'
    comments.unshift(comment)
    res.redirect('/')
})
// get请求方式处理评论内容：req.query 只能获取get请求参数
// post req.body 要使用body-parse
// app.get('/pinglun',function (req,res) {
//     var comment = req.query
//     comment.dateTime = '2021年1月11日'
//     comments.unshift(comment)
//     res.redirect('/')
// })
app.listen(3000,function () {
    console.log('server start')
})
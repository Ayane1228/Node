// art-template使用
// 安装npm install art-template --save
// 引入
// var tplStr = `
// <html dir="ltr" lang="zh" i18n-processed="">

// <head>
//   <meta charset="utf-8">
//   <meta name="google" value="notranslate">
//   <body>
//         <p>我叫{{name}}</p>
//         <p>年龄{{age}}</p>
//   </body>
// `
// var template = require('art-template')
// // 使用 template.render('模板字符串'，替换对象)
// var tem = template.render(tplStr,
// {
//     name: 'jack',
//     age:18
// })
// console.log(tem);
// 在外部定义模板字符串，通过fs模块引入

var fs = require('fs')
var template = require('art-template')
fs.readFile('./tpl.html',function (err,data) {
    if ( err ) {
        return console.log('err');
    } else {
        // 默认fs.readfile的data是二进制，要转为字符串
        var tem = template.render(data.toString(),{
            name: 'jack',
            age:18            
        })
    console.log(tem);
    }
})
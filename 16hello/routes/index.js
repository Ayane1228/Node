var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
// router.get('/world',function (req,res,next) {
//   res.render('index',{ title:'Hello world'})
//   // 渲染index页面，title为Hello world
// })
// next为下一个中间件 函数 ，中间件就是指处理方法的集合（function的集合）
// router.get('/new',function (req,res,next) {
//   // res.render('index',{ title:'new'})
//   console.log('这里是中间件');
//   next(); //执行下一个中间件（函数）
// },function (req,res,next) {
//   res.send('这里是return')
// })

// router.get('/',function (req,res,next) {
//   res.render('index',{
//     title:'art-template',
//     name:'asdas',
//     age:18,
//     happy:true,
//     list:[
//       {
//         id:1,
//         content:'循环'
//       },
//       {
//         id:2,
//         content:'遍历'
//       }
//     ]
//   })
// })
// 浏览器地址栏输入http://127.0.0.1:2999/book?id=15，
router.get('/book',function (req,res,next) {
  // 获取get请求的请求地址：req.url,打印结果：/book?id=15
  console.log(req.url);
  // 获取get请求的请求参数：req.query,打印结果：{ id: '15' }
  console.log(req.query);
  res.render('index',{    
  title:'get请求'
})
})  

// post请求要使用postman测试
router.post('/number',function (req,res,next) {
// 在postman的body中写入请求参数
  //  获取post请求的请求参数：req.body:{"name":"jim","age":"36"}
  console.log(req.body);
  // res.send(req.body)
  res.send(req.cookies)
})
module.exports = router;

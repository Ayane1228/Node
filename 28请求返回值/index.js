const express = require('express')
const app = express()
// get请求
app.get('/user',(req,res) => {
    console.log(req.query.id);
    res.end()
})
app.get('/user/:id',(req,res) => {
    console.log(req.params.id)
    res.end()
})
// post请求
// express.urlencoded 中间件:是用来处理 Content-Type 为 x-www-form-urlencoded 的数据
// extended:返回的对象是一个键值对，当extended为false的时候，键值对中的值就为'String'或'Array'形式，为true的时候，则可为任何数据类型。
app.use(express.urlencoded({extended:true}))
app.post('/login', (req,res) => {
    console.log(req.body);
    console.log(req.body.username);
    console.log(req.body.password);
    res.end()
})
app.listen(3000,()=>{
    console.log('server start');
})
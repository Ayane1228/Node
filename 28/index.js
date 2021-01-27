const express = require('express')
const app = express()
// get请求
// app.get('/user',(req,res) => {
//     console.log(req.query.id);
//     res.end()
// })
app.get('user/:id',(req,res) => {
    console.log(req.params.id)
    res.end()
})
app.listen(3000,()=>{
    console.log('server start');
})
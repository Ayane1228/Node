const express = require('express')
const app = express()

// 字符串匹配模式
// 固定字符串模式匹配
app.get('/index',(req,res) => {
    res.send('首页');
})
// 通配模式 * => 表示任意个字符
app.get('/*',(req,res) => {
    res.send('*模式');
})
// ?模式 => 前一个字符或组可以出现0~1次，这里指b可以出现0或1次
app.get('/ab?c',(req,res) => {
    res.send('？模式');
})
// +模式 => 前一个字符或组至少出现一次，这里指b至少出现一次
app.get('/ab+c',(req,res) => {
    res.send('+模式');
})
// 组：()
// 例子，表示bc至少出现一次
app.get('/a(bc)+',(req,res) => {
    res.send('组');
})

// 正则表达式匹配：将路由直接修改为正则表达式 
// 例子：匹配以html结尾的url,
// 正则表达式必须包含在//之间, . 在正则中表示任意字符，所以这里第一个.表示任意字符出现任意次，第二个.加上了转义字符表示单纯的一个.
//正则表达式:/.*\.html$/
app.get(/.*\.html$/,(req,res) => {
    res.send('正则匹配');
})

app.listen(3000,() => {
    console.log('server start');
})
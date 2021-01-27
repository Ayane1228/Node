const express = require('express')
const app = express()
let hander = (req,res) => {
    console.log(__dirname);
    res.sendFile(`${__dirname}/html/index.html`)
}
let hander1 = (req,res) => {
    res.json({
        name:'张三'
    })
}
let hander2 = (req,res) => {
    res.sendFile(`${__dirname}/html/date.json`)
}
app.get('/index',hander)
app.get('/zhijieJSON',hander1)
app.get('/json',hander2)

app.listen(3000, () => {
    console.log('server start');
})
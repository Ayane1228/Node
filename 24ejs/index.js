const http = require('http')
const ejs = require('ejs')
const server = http.createServer( (req,res) => {
    res.setHeader('Content-Type','text/html;charset=utf-8')
    if (req.url == '/main') {
        ejs.renderFile('./views/main.ejs',(err,str) => {
            if (err) {
                return console.log(err);
            } else 
            {
                res.end(str)
            }
        }) 
    }
    else 
    {
        ejs.renderFile('./views/index.ejs',{msg:'hello ejs',list:['你好','好卡','操']},(err,str) => {
            if (err) {
                return console.log(err);
            } else 
            {
                res.end(str)
            }
        })
   } 
})
.listen(3000, () => {
    console.log('server start');
})
// 引入mysql模块
const mysql = require('mysql')
// 创建数据库连接对象并配置
const connection = mysql.createConnection({
    // 地址
    host:'127.0.0.1',
    // 用户名
    user:'root',
    // 密码
    password:'stw551669',
    // 数据库
    database:'blog'
})
// 连接数据库
connection.connect()
console.log('数据库连接成功')

// 创建sql语句 
let sql = 'SELECT id,username,password FROM user'

// 执行sql语句
connection.query(sql, (err,result) => {
    if (err) 
    {
        return console.log(err);
    }
    console.log(result);
    result.forEach(item => {
        console.log(item.id,item.username,item.password);
    })
})

// 关闭数据库连接
connection.end()
console.log('数据库断开成功')
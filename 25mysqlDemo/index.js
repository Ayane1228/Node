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
// 查询语句:'SELECT 查询值 FROM 表名'
let connectionsql = 'SELECT id,username,password FROM user'
// 插入语句,'INSERT INTO 表名 插入值 占位符:(?,?)'; 执行的时候赋值
let insertsql = 'INSERT INTO user (username,password) VALUES (?,?)'
// 删除语句:'DELETE FROM 表名 WHERE 主键 = ? 占位符'
let deleatesql = 'DELETE FROM user WHERE id = ?'
// 更新语句：'UPDATE 表名 SET 要修改的值 = ? WHERE 主键 = ?'
let updatesql = 'UPDATE user SET password = ? WHERE id = ?'

// 执行sql语句
// 查询语句
connection.query(connectionsql, (err,result) => {
    if (err) 
    {
        return console.log(err);
    }
    console.log(result);
    result.forEach(item => {
        console.log(item.id,item.username,item.password);
    })
})
// 删除语句：connection.query(执行语句名,删除行的id,回调函数)
connection.query(deleatesql,3,(err,result) => {
    // 语句执行错误
    if (err) 
    {
        console.log(err);
    }
    // 如果结果的属性(affectedRows:影响的行数)!=0，则删除成功，反之则失败
    if (result.affectedRows != 0) 
    {
        // 删除没有insertId属性
        console.log('删除成功');
    } else 
    {
        console.log('删除失败');
    }
})
// 插入语句:connection.query(执行语句名,插入值,回调函数)
connection.query(insertsql,['张三','974561356'],(err,result) => {
    // 语句执行错误
    if (err) 
    {
        console.log(err);
    }
    // 如果结果的属性(affectedRows:影响的行数)!=0，则插入成功，反之则失败
    if (result.affectedRows != 0) 
    {
        // 这张表的ID是自动生成的，因此不能手动插入
        console.log('插入成功,插入的ID是' + result.insertId);
    } else 
    {
        console.log('插入失败');
    }
})

// 更新语句
connection.query(updatesql,['000',2], (err,result) => {
    if (err) 
    {
        console.log(err);
    }
    // 如果结果的属性(affectedRows:影响的行数)!=0，则更新成功，反之则失败
    if (result.affectedRows != 0) 
    {
        console.log('更新成功');
    } else 
    {
        console.log('更新失败');
    }
})

// 关闭数据库连接
connection.end()
console.log('数据库断开成功')
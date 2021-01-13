//加载npm包
var mysql = require('mysql');
//创建连接
var connection = mysql.createConnection({
  //本机
  host: 'localhost',
  //用户名，密码
  user: 'root',
  password:'stw551669',
  //数据库名
  database:'studnet'
});
 //连接数据库
connection.connect();
//执行数据操作 
connection.query('INSERT INTO student VALUES(NULL,"admin","123456")', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});
 //关闭数据库
connection.end();
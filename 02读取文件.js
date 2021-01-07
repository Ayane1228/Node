//node中的js具有读取文件的能力

// fs 是file-system的简写
// 引入fs核心模块，在fs中提供了所有读写文件的api

// 使用require加载fs模块
var fs = require('fs')

// 读取文件，第一个参数：读取的文件路径，第二个参数：回调函数（error，data）,接受2个参数
// 成功error：null，data：读取数据
// 失败error：失败对象，data：数据

// 默认文件存储的是2进制数据，在这里将2进制转为16进制数据，要通过toString方法转为字符串
fs.readFile('./text.txt',function(error,data){
    console.log(data);
    console.log(data.toString());
})
var fs = require('fs')
// 写文件：fs.writeFile('path','content',function(error){})
// 第一个参数：文件路径，
// 第二参数：文件内容，
// 第三个参数：回调函数，function(error){},直接接受error参数（形参），如果写入成功error为null，失败，error：失败对象
fs.writeFile('./你好.md','你好，我在用node.js写文件',function(error){
    if(error){
        console.log(error);
    }
})
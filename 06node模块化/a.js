// require是一个方法，可以用来加载模块
// 模块有三种
// 具名的核心模块，例如：fs，http
// 用户自定义的模块
// 碰到require就执行对应模块
// node中没有全局作用域，只有模块作用域（文件作用域，在a模块中定义的数据不能在其他模块中使用）
// 加载核心模块
var fs = require('fs')
console.log("a start");
// 获取自定义模块
require('./b')
console.log("a end");

//有时候需要模块和模块之间通信 
// require有两个作用
// 加载文件模块并执行   和  取到文件模块中的接口对象exports 
// 在每个文件模块中都有一个对象exports，默认是一个空对象,可以通过exports对象导出，将需要被外部访问的成员挂载到exports上
// 被调用的成员只能被调用的时候才会执行
var c = require('./c')
// 执行c中的exports对象上的成员
console.log(c.foo);
console.log(c.add(1,2));
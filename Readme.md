# 模块

在Node.js中，每个文件都是一个独立的 模块。每个模块都有自己的模块作用域，定义的变量和方法只能当前模块中使用。

# 使用

直接新建一个js文件，使用js语法。进入当前目录，使用

```shell
node '文件名'
```

# 导出、导入

在别的模块中调用其他模块的值或方法要使用导出、导入：

为什么要导出、导入？

Node.js 提供了 `exports` 和 `require` 两个对象，其中 `exports` 是模块公开的接口，require 用于从外部获取一个模块的接口，即所获取模块的 `exports` 对象。而Node.js中有模块作用域，单个模块中定义的值和方法只能在当前模块中使用,所以要使用这2个接口进行模块间传递。

- ## 导出：

  `exports`,`module.`可以省略

  ```javascript
  module.exports.需导出的值名 = 导出后的名字	
  ```

- ## 导入：

  ```javascript
  const 模块名 = require('文件路径')
  ```

  # 类

- ## 类的创建，实例化对象

  ```javascript
  class 类名{
  //定义实例化对象中的字段和方法
  	//定义类的实例化对象的字段，前面不要加var let const关键字
  	属性名 = '值'
  	//定义类的方法，不需要加function关键字
  	方法名(){
          //使用this调用字段，这里的this指的是后面实例化创建出来的那个对象
  		console.log(this.属性名)
  	}
  }
  //实例化类
  let 实例化名称  = new 类名()
  //使用成员方法
  实例化对象.成员方法
  
  //例
  // 定义一个类
  class Person {
      // 定义是实例化对象的字段
      name = '人类'
      show() {
          console.log(`名字是${this.name}`)
      }
  }
  // 实例化对象
  const person = new Person()
  person.show()
  ```

  - ## 静态成员的构建`static`


  静态成员，是类直接可以调用的成员，不需要实例化对象。

  ```javascript
  class 类的名称 {
  	//定义类的静态字段，前面不要加var let const关键字
  	static 属性名 = '值'
  	//定义类的静态方法，不需要加function关键字
  	static 方法名(){
          //使用类名调用类的静态字段
  		console.log(类的名称.属性名)
  	}
  }
  //不需要实例化
  类名.静态成员方法
  
  //例
  // 定义一个类
  class Person {
      // 定义实例化对象的字段
      static name = '人类'
      static show() {
          console.log('名字是' + this.name)
      }
  }
  //调用
  Person.show()
  ```

  ​	每一个类都会有一个构造方法`constructor`，如果没有手动添加构造方法，那么系统会自动提供一个无参的构造方法。

  ​	实例化对象就相当于调用这个构造方法。通过构造方法可以定义实例化字段（实例化对象的字段），可以在实例化的时候进行赋值。

  构造方法在javascript中不可以重载，只能有一个构造方法。

```javascript
class Person {
	//构造方法，可以是无参或有参的
	constructor (name,sex) {
		//定义实例化字段
		// 需要实例化对象的时候进行传值
		this.name = name
		this.sex = sex
		// 所有实例化对象的age都 =  18 
		this.age = 18
	}
	say () {
        console.log(`大家好我是${this.name},性别${this.sex},今年${this.age}`)
    }
}
//实例化对象并通过实例化对象传值
new Person('张三','女').say()
```

- ## 类的继承：extends

    ​	当子类的方法和父类的方法名相同时，子类的方法会覆盖父类的方法。
    ​	用super关键字可以调用父类的方法。
    ​	子类在新建方法的时候如果要使用父类的值，必须先使用super关键字在子类的构造函数中使用。
  
  ```javascript
  class 父类 {
  	...
  }
  class 子类 extends 父类 {
  	// 子类构造方法 
      constructor (...){
          // 子类构造方法必须先调用父类的构造方法
          super ()
          ...
      }
  	子类方法(){
          //调用父类的方法
          super.父类方法()
  	}
  }
  //实例化子类并传值
  new 子类(值).子类方法() 
      
  //例子
  class Father {
  	//父类的构造方法
  	constructor (name,sex) {
  		this.name = name
  		this.sex = sex
      }
      // 父类的方法
  	say () {
          console.log(`父类：大家好我是${this.name},性别${this.sex}`)
      }
  }
  // 继承
  class Son extends Father {
      // 子类的构造方法
      constructor(name,sex,age) {
          // 子类的构造方法必须先使用super
          super(name,sex)
          // 子类的独有实例化字段
          this.age = age
      }
      // 子类的方法
      say () {
          //调用父类的方法
          super.say()
          console.log(`子类：大家好我是${this.name},性别${this.sex},年龄${this.age}`)
      }
  }
  // 实例化对象并传递参数
  new Son('李四','男',18).say()
  ```
  
  # 创建服务器
  
    - 创建服务器
```javascript
    // 引入http模块，这是一个内置模块，用来处理http请求
    var http = require('http')
    //创建服务
    // req：客户端发送过来的消息对象
    // res：响应对象，将要响应给客户端的对象
    var server = http.createServer( (req,res) => {
        // 设置响应头(响应的数据类型及编码)
        res.setHeader('Content-Type','text/html;charset=utf-8')
        //发送响应状态
        res.statusCode = 200
        //响应结束，并发送消息
        res.end('你好 Node')
    })
    //监听服务
    server.listen(3000, () => {
        console.log('server start');
    })
```

- 获取客户端的请求方式`req.method`，获取客户端的请求地址`req.url`

  使用postman测试发送不同的请求方式的请求。

  `req.url`只是一个字符串，想要将url转换对象，要先引入url模块，再进行转换：`url.parser(req.url)`		

  ```javascript
  // 引入http模块，内置模块，可以处理http请求
  var http = require('http')
  var url = require('url')
  //创建服务
  // req：请求对象
  // res：响应对象，将要相应给客户端的对象
  var server = http.createServer( (req,res) => {
      // 设置响应头(响应的数据类型及编码)
      res.setHeader('Content-Type','text/html;charset=utf-8')
      //发送响应状态：res.statusCode = 200
      res.statusCode = 200
      // 获取客户端的请求方式`req.method`
      console.log(req.method)
      // 获取客户端的请求地址`req.url`
      console.log(req.url)
      var myUrl = url.parse(req.url)
      console.log(myUrl)
      //响应结束，发送消息
      res.end('你好 Node')
  })
  //服务监听 server.listen
  server.listen(3000, () => {
      console.log('server start');
  })
  ```

  获取的结果：

  ```shell
  PS F:\File\study\node> node .\21.请求方式和url.js
  server start
  POST  //请求类型：console.log(req.method)
  /?asdasd=123  //console.log(req.url)：字符串
  //console.log(myUrl) 是个对象
  Url {
  	// 这里转换的字符串：req.url自动去掉了前面的内容
  	//协议
    protocol: null,
    	//slashes是一个布尔值，如果存在//（双斜线）跟在protocol后面的话,布尔值为真
    slashes: null,
    //auth这个属性是URL中用户名和密码部分，也可以解析成为用户信息。
    auth: null,
    // ost是主机，主机是包含两部分：主机名和端口号。
    host: null,
    // 端口号
    port: null,
    // 主机名
    hostname: null,
    //hash是以#标志符开始的一段字符串，也就是说相关的锚点。
    hash: null,
    //search是以？开始到#（不包含#）的一段字符串。
    search: '?asdasd=123',
    //query是search 的子集，没有问号。
    query: 'asdasd=123',
    //pathname字段是路径的名字，是从端口号开始到?的一段字符串。
    pathname: '/',
    //path是路径，包含了第search，query，pathname,也就是从端口号开始（不含port）到锚点#（不含#）之间的一段字符串。
    path: '/?asdasd=123',
    //href可以理解为整个url。
    href: '/?asdasd=123'
  }
  ```

  - ## get请求

    1. 将url转成对象，再将查询字符串`query`转换为对象:`var myUrl = url.parse(req.url,true)`

       请求地址：http://127.0.0.1:3000?id=10

       ```javascript
       var http = require('http')
       var url = require('url')
       var server = http.createServer( (req,res) => {
           res.setHeader('Content-Type','text/html;charset=utf-8')
           res.statusCode = 200
           console.log(req.url)
           var myUrl = url.parse(req.url,true)
           console.log(myUrl.query)
           console.log(myUrl.query.id)
           res.end('end')
       })
       //服务监听 server.listen
       server.listen(3000, () => {
           console.log('server start');
       })
       ```

       结果：

       ```shell
       PS F:\File\study\node> node .\22get请求.js
       server start
       /?id=10
       //console.log(req.url)
       
       [Object: null prototype] { id: '10' }
       //console.log(myUrl.query)
       
       10	
       //console.log(myUrl.query.id)
       ```

    2. 不使用true，使用`new URLSearchParams()`方法将`url.query`查询字符串修改对象，使用`get`参数名称也可以查看get请求参数，可以用`has`进行判断。

       ```javascript
       var http = require('http')
       var url = require('url')
       var server = http.createServer( (req,res) => {
           res.setHeader('Content-Type','text/html;charset=utf-8')
           res.statusCode = 200
           var myUrl = url.parse(req.url)
           // 使用URLSearchParams
           var params = new URLSearchParams(myUrl.query)
           console.log(params)
           if ( params.has('id') ) 
           {
               console.log( params.get('id') )
           } else 
           {
               console.log('NOT FOUND ID')
           }
           res.end('end')
       })
       //服务监听 server.listen
       server.listen(3000, () => {
           console.log('server start');
       })
       ```

       请求地址：http://127.0.0.1:3000?id=10

       ```shell
       PS F:\File\study\node> node .\22get请求.js
       server start
       URLSearchParams { 'id' => '10' }
       10
       ```

  - ## post请求

    对请求对象绑定事件`data`,`end`。

    ​	data：`req.on('data',()=>{})`,接受请求。

    这表示有数据通过post请求传递到服务器端，执行回调函数，回调函数接受的是post请求的参数，可以使用toString方法将请求参数变为字符串形式。

    ​	end：`req.on('end',()=>{})`，post请求全部结束，执行回调函数。

    ```javascript
    var http = require('http')
    var url = require('url')
    var server = http.createServer( (req,res) => {
        res.setHeader('Content-Type','text/html;charset=utf-8')
        res.statusCode = 200
        var postString = ''
        req.on('data',(postData) => {
            console.log(postData);
            // 转为字符串
            postString = postData.toString()
        })
        req.on('end',() => {
            // 转为对象
            let parm = new url.URLSearchParams(postString)
            console.log(parm.get('name'));
            console.log(parm.get('age'));
        })
        res.end('end')
    })
    
    //服务监听 server.listen
    server.listen(3000, () => {
        console.log('server start');    
    })
    ```

    请求地址：http://127.0.0.1:3000/ ,body中写入数据

    ```shell
    PS F:\File\study\node> node .\23post请求.js
    server start
    <Buffer 6e 61 6d 65 3d 6a 69 6d 26 61 67 65 3d 33 36>
    jim
    36
    ```


# 路由

路由就是通过客户端访问的不同的URL，服务器端解析URL并提供不同的服务。

## 静态路由、页面加载

```javascript
...
let Url = url.parse(req.url)
let pathName = Url.pathname
if (pathName == '/' || pathName == '/index.html')
{
	console.log('首页')
} else 
{
	console.log(404)
}
...
```

fs模块：文件模块

```javascript
fs.readFile ('相对路径',(err,data) => {
    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.statusCode = 200
	//设置网页文件的读取的编码格式，状态码
    //err 错误信息
	if (err) {
		return console.log (err)
	}
	//data 获取到的信息
	res.end(data)
})
```

当html文件要访问一些静态资源比如css，js，图片的时候也会发送一次请求需要设置请求头。

https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types:

可以查询常用MIME类型，设置`Content-Type`。

```javascript
if（pathname == '/style.css'）{
	fs.writeHead(200,{'Content-Type':'text/css'})
	fs.readFile('./style.css', (err,data)=>{
	if (err) {
		return console.log (err)
	}
		res.end(data)
	})
} else if (pathname == '/public.js') {
	fs.writeHead(200,{'Content-Type':'text/javascript'})
	fs.readFile('./public.js', (err,data)=>{
	if (err) {
		return console.log (err)
	}
		res.end(data)
	})    
}
```

## 动态路由

当有许多文件需要加载时，不可能每一个都设置Content-Type，这里就可以使用动态路由。

```javascript
...
let Url = url.parse(req.url)
let pathName = Url.pathname
// 引入path模块
const path = require ('path')
...
// 获取资源的后缀名
let extname = path.extname(pathname)
// 定义默认Content-Type
let mine = 'text/html;charset = utf-8'
// 判断
if (extname == '.png') {
	mime = 'image/png'
}
...
```

# NPM

1. 世界上最大的JavaScript软件注册表

2. 网站依赖项目的统一管理工具

3. 通过package.json管理依赖项目

   ## 常见指令

   查看版本

   ```shell
   npm --version		
   ```

   自定义包，会新建一个package.json文件。

   ```shell
   npm init		
   ```

   安装第三方模块

   ```shell
   npm i bootstrap --save
   ```

   `--save`：将保存配置信息到pacjage.json。默认为dependencies节点中。

   `-g`:保存到全局

   更新模块

   ```shell
   npm update 模块名
   ```

   卸载

   ```shell
   npm uninstall 模块名
   ```

   清除缓存

   ```shell
   npm cache clear
   ```

   ## 自定义启动指令

   修改`package.json`中的`“scripts”`中的`“start”`

   ```json
   "scripts":{
   	"start":"node index.js"
   }
   ```

   修改之后`npm start`就相当于`node index.js`命令。

   ## 迁移后重新安装依赖

   进入`package.json`使用`npm i --save`

# EJS嵌入式模板

## 安装

```shell
npm i EJS --save 
```

## 使用

新建一个`index.js`，创建服务

创建views目录，新建`index.ejs`文件。

语法：`<%=msg%>`,引入EJS模块，渲染模板`ejs.renderFile('相对路径',{赋值（采取键值对）,(err,data) => {回调函数}})`

```javascript
const http = require('http')
const ejs = require('ejs')
const server = http.createServer( (req,res) => {
    res.setHeader('Content-Type','text/html;charset=utf-8')
    ejs.renderFile('./views/index.ejs',{msg:'hello ejs'},(err,str) => {
        if (err) {
            return console.log(err);
        } else 
        {
            res.end(str)
        }
    })
})
.listen(3000, () => {
    console.log('server start');
})
```

```html
<body>
    <h1>测试ejs模板</h1>
    <h2><%=msg%></h2>
</body>
```

## 模板语法

- 脚本标签

  ```
  <%Javascript脚本%>
  ```

  将list的内容循环输出list,可以将所有的<%%>去掉看成为JavaScript语言。将list数据写到`index.js`中去。

  ```ejs
  <ul>
      <% list.forEach(item=>{%>
      <li><%=item%></li>
      <% })%>
  </ul>
  ```

  ```javascript
      ejs.renderFile('./views/index.ejs',{msg:'hello ejs',list:['你好','好卡','操']},(err,str) => {
          if (err) {
              return console.log(err);
          } else 
          {
              res.end(str)
          }
      })
  ```

- 导入标签

  用来导入其他ejs模板 

  ```
    <%- include('header') -%>
      <p>文章主题</p>
  ```
```javascript
if (req.url == '/main') {
  	ejs.renderFile('./views/main.ejs',(err,str) => {
      	if (err) {
          	return console.log(err);
              } else {
                  res.end(str)
  		}
  	}) 
  }
```

# 数据库

## 安装

```shell
npm i mysql --save	
```

## 使用

新建index.js,引入mysql模块，创建数据库连接对象并配置，连接数据库，关闭数据库连接。

```javascript
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
// 关闭数据库连接
connection.end()
console.log('数据库断开成功')
```

## 增删改查

- 查询

  ```javascript
  // 查询语句，创建SQL语句，必须放在连接数据库之后
  //// 查询语句:'SELECT 查询值 FROM 表名'
  let sql = 'SELECT id,username,password FROM user'
  
  // 执行sql语句
  connection.query(sql, (err,result) => {
      if (err) 
      {
          return console.log(err);
      }
      //结果result会是一个对象
      console.log(result);
      result.forEach(item => {
          console.log(item.id,item.username,item.password);
      })
  })
  ```

- 增加

  ```javascript
  // 插入语句,'INSERT INTO 表名 插入值 占位符:(?,?)'; 执行的时候赋值
  let insertsql = 'INSERT INTO user (username,password) VALUES (?,?)'
  
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
          // 这张表的ID是自动生成的，因此不能手动插入，注意是insertId 不是insertID/insertid等
          console.log('插入成功,插入的ID是' + result.insertId);
      } else 
      {
          console.log('插入失败');
      }
  })
  ```

- 删除

  ```javascript
  // 删除语句
  let deleatesql = 'DELETE FROM user WHERE id = ?'
  // 删除语句:'DELETE FROM 表名 WHERE 主键 = ? 占位符'
  connection.query(deleatesql,8,(err,result) => {
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
  ```

- 更新

  ```javascript
  // 更新语句：'UPDATE 表名 SET 要修改的值 = ? WHERE 主键 = ?'
  let updatesql = 'UPDATE user SET password = ? WHERE id = ?'
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
  ```

  ```shell
  PS F:\File\study\node\25mysqlDemo> node .\index.js
  数据库连接成功
  数据库断开成功
  [
    RowDataPacket { id: 1, username: 'admin', password: '123456' },
    RowDataPacket { id: 2, username: 'asd', password: '000' },
    RowDataPacket { id: 3, username: 'fsd', password: '789' }
  ]
  1 admin 123456
  2 asd 000
  3 fsd 789
  插入成功,插入的ID是9
  删除成功
  更新成功
  ```

# Express

Express是Node.js的一个框架，对Node.js进行了封装，简化了操作。

## 安装

```shell
npm i express --save
```

## 使用

新建一个入口文件index.js。

```javascript
// 引入express模块
const express = require('express')
// 创建服务
const app = express()

// 路由
app.get('/', (req,res) => {
    res.send('Hello Express')
})

// 监听
app.listen(3000,() => {
    console.log('server start');
})
```

## 路由

对同一个地址发送不同类型的请求，会进行不同的响应.

```javascript
// 引入express模块
const express = require('express')
// 创建服务
const app = express()

// 路由
// 处理get请求
app.get('/', (req,res) => {
    res.send('Hello get')
})
// 处理post请求
app.post('/', (req,res) => {
    res.send('Hello post')
})
// 所有的请求类型都会响应
app.all('/all', (req,res) => {
    res.send('Hello')
})

// 监听
app.listen(3000,() => {
    console.log('server start');
})
```

### 路由路径匹配

分为2种，字符串模式和正则表达式模式

- 字符串匹配模式

  ```javascript
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
  ```

- 正则表达式匹配：将路由直接修改为正则表达式 （不要加‘’）

  ```javascript
  // 例子：匹配以html结尾的url,
  // 正则表达式必须包含在//之间, . 在正则中表示任意字符，所以这里第一个.表示任意字符出现任意次，第二个.加上了转义字符表示单纯的一个.
  //正则表达式:/.*\.html$/
  app.get(/.*\.html$/,(req,res) => {
      res.send('正则匹配');
  })
  ```

  ## 路由处理程序  

  将路由处理程序提取单独处理

  - 单路由处理程序

  ```javascript
  let hander = (req,res) => {
      res.send('<h1>单路由处理程序</h1>')
  }
  app.get('/dan',hander)
  ```

  - 多路由处理程序，加上next（），表示继续执行

  ```javascript
  let hander1 = (req,res,next) => {
      console.log('开始')
      next()
  }
  let hander2 = (req,res) => {
      res.send('<h1>多路由处理程序</h1>')
  }
  app.get('/duo',[hander1,hander2])
  ```

  ## 响应数据

  向客户端响应不同类型的数据

  ```javascript
  res.send(...)
  // 基本上这种方式响应的是字符串类型的数据
  ```

  - 响应文件

  使用`res.sendFile('绝对路径',回调函数)`，我们可以使用`_dirname`这个这个常量表示当前入口文件所在的路径。

  ```javascript
  let hander = (req,res) => {
      console.log(__dirname);
      //F:\File\study\node\26
      res.sendFile(`${__dirname}/html/index.html`)
  }
  app.get('/index',hander)
  ```

- 响应JSON数据


  2种方式，直接响应JSON数据或是响应JSON文件

  ```javascript
  // 直接响应JSON数据，res.json()：将对象转换为JSON数据
  let hander1 = (req,res) => {
      res.json({
          name:'张三'
      })
  }
  app.get('/zhijieJSON',hander1)
  // 响应JSON文件
  let hander2 = (req,res) => {
      res.sendFile(`${__dirname}/html/date.json`)
  }
  app.get('/json',hander2)
  ```

  - 响应静态资源

    当响应的文件选哟访问静态资源，比如CSS，图片时。

    ```
    <script src="/js/index.js"></script>
    ```
    
      使用中间件：应用程序.use（express.static.(路径)）
    
    ```javascript
    app.use(express.static.('statice'))
    ```
    
    最终访问静态资源会去访问static/js/index.js文件.
  ## 重定向

  url跳转时跳转去重定向的页面。

  ```javascript
  res.redirect()
  ```

  ## 结束相应

  不发送任何数据

  ```javascript
  res.end()
  ```

  ## 获取请求参数

  - get请求

    `req.query`获取query:查询字符串(?拼接)参数

    请求地址：htttp://127.0.0.1:3000/user?id=10

    `req.params`获取params(:拼接)传递参数 

    请求地址:htttp://127.0.0.1:3000/user/10

    ```javascript
    // get请求
    app.get('/user',(req,res) => {
        console.log(req.query.id);
        res.end()
    })
    app.get('/user/:id',(req,res) => {
        console.log(req.params.id)
        res.end()
    })
    ```


  - post请求

    ```javascript
    app.use(express.urlencoded({extended:true}))
    app.post('/login', (req,res) => {
        console.log(req.body);
        console.log(req.body.username);
        console.log(req.body.password);
        res.end()
    })
    ```

    `express.urlencoded`中间件:是用来处理 Content-Type 为 x-www-form-urlencoded 的数据

    `extended`:返回的对象是一个键值对，

    当extended为false的时候，键值对中的值就为`String`或`Array`形式；

    为true的时候，则可为任何数据类型。

#  es6新增语法之 ` ${} `

这是es6中新增的字符串方法

可以配合反单引号完成拼接字符串的功能

1、反单引号怎么打出来？
将输入法调整为英文输入法，单击键盘上数字键1左边的按键。

2、用法
step1： 定义需要拼接进去的字符串变量
step2： 将字符串变量用${}包起来，再写到需要拼接的地方

3、示例代码：

```javascript
let a='Karry Wang';
let str=`I love ${a}, because he is handsome.`;
//注意：这行代码是用返单引号引起来的
alert(str);
```

# MySql删除数据之后ID自增不连续问题

找到的办法都不行，不过有人说表可能和别的表有联系的话随便修改主键可能会出现问题，所以先不修改了。
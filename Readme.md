# 模块

在Node.js中，每个 文件 都是一个独立的 模块。

# 使用

直接新建一个js文件，使用js语法，进入当前目录，使用

```shell
node '文件名'
```

# 调用

在别的模块中调用其他模块值或方法：

- 导出模块`exports`,`module.`可以省略

  ```javascript
  module.exports.需导出的值名 = 导出后的名字	
  ```

- 导入自定义模块：require

  ```javascript
  const 模块名 = require('文件路径')
  ```

  为什么要导出再导入？

  Node.js 提供了 `exports` 和 `require` 两个对象，其中 `exports` 是模块公开的接口，require 用于从外部获取一个模块的接口，即所获取模块的 `exports` 对象。

  而因为Node.js中有模块作用域，单个模块中定义的值和方法只能在当前模块中使用所以要使用这2个接口进行模块间传递。

# 类

- 类的创建，实例化对象

  ```javascript
  class 类的名称{
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
  //实例化类使用成员
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

  - 静态成员的构建，调用静态方法

    静态成员，是类直接可以调用的成员，不需要实例化对象之后调用。

    ```javascript
    class 类的名称 {
    //定义静态成员：static
    	//定义类的静态字段，前面不要加var let const关键字
    	static 属性名 = '值'
    	//定义类的静态方法，不需要加function关键字
    	方法名(){
            //使用类名调用类的静态字段
    		console.log(类的名称.属性名)
    	}
    }
    //不需要实例化
    类名.静态成员方法
    
    //例
    // 定义一个类
    class Person {
        // 定义是实例化对象的字段
        static name = '人类'
        static show() {
            console.log('名字是' + this.name)
        }
    }
    Person.show()
    ```

    每一个类都会有一个构造方法`constructor`，如果没有手动添加构造方法，那么系统会自动提供一个无参的构造方法。实例化对象就相当与调用这个构造方法。通过构造方法可以定义实例化字段（实例化对象的字段），可以在实例化的时候进行赋值。

    在javascript中不可以重载，只有一个构造方法。

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
    //实例化对象并通过实例化对象传值，只使用一次可以不再定义一个实例化对象
    new Person('张三','女').say()
    ```

- 类的继承：extends

  ​	当子类的方法和父类的方法名相同时，会覆盖，用super关键字可以调用父类的方法。子类的构造方法中使用super()调用父类的构造方法时，可以使用子类实例化对象传递的值。

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

```
// 引入http模块，这是一个内置模块，可以处理http请求
var http = require('http')
//创建服务
// req：客户端发送过来的消息对象
// res：响应对象，将要相应给客户端的对象
var server = http.createServer( (req,res) => {
    // 设置响应头(响应的数据类型及编码)
    res.setHeader('Content-Type','text/html;charset=utf-8')
    //发送响应状态：res.statusCode = 200
    res.statusCode = 200
    //响应结束，发送消息
    res.end('你好 Node')
})
//服务监听 server.listen
server.listen(3000, () => {
    console.log('server start');
})
```

- 获取客户端的请求方式`req.method`，获取客户端的请求地址`req.url`

  使用postman发送不同的请求方式的请求。

  `req.url`只是一个字符串且去掉了前面的协议、地址值、端口号、，要获取url对象，要先引入url模块，再进行转换`url.parser(req.url)`		

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
  POST  //请求类型
  /?asdasd=123  //req.url：字符串
  //url 对象
  Url {
    protocol: null,
    slashes: null,
    auth: null,
    host: null,
    port: null,
    hostname: null,
    hash: null,
    search: '?asdasd=123',
    query: 'asdasd=123',
    pathname: '/',
    path: '/?asdasd=123',
    href: '/?asdasd=123'
  }
  ```

  

# es6新增语法之 ` ${} `

这是es6中新增的字符串方法

可以配合反单引号完成拼接字符串的功能

1、反单引号怎么打出来？
将输入法调整为英文输入法，单击键盘上数字键1左边的按键。

2、用法
step1： 定义需要拼接进去的字符串变量
step2： 将字符串变量用${}包起来，再写到需要拼接的地方

3、示例代码：

```
let a='Karry Wang';

let str=`I love ${a}, because he is handsome.`;
//注意：这行代码是用返单号引起来的

alert(str);
```

一定是用反单引号啊！不要写成单引号了！！


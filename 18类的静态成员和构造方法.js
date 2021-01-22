// 定义一个类
// class Person {
//     // 定义是实例化对象的字段
//     static name = '人类'
//     static show() {
//         console.log('名字是' + this.name)
//     }
// }
// Person.show()

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
//实例化对象，只使用一次可以不再定义一个实例化对象
new Person('张三','女').say()
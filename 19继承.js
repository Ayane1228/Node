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
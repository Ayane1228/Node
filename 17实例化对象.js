// 定义一个类
class Person {
    // 定义是实例化对象的字段
    name = '人类'
    show() {
        console.log('名字是' + this.name)
    }
}
// 实例化对象
const person = new Person()
person.show()
console.log("c start");
// 将成员挂载到exports对象上  
exports.foo = 'hello,i\'m exports'
console.log("c end");
// 将成员挂载到exports对象上
exports.add = function(x,y){
    return x+y
}
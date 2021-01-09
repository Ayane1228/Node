var url = require('url')
// 第二个参数为true表示将query字符串转为对象
console.log(url.parse('http://127.0.0.1:3000/pinglun?name=123&message=123123312',true));
// 结果
Url {
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: '127.0.0.1:3000',
    port: '3000',
    hostname: '127.0.0.1',
    hash: null,
    search: '?name=123&message=123123312',
    query: [Object: null prototype] { name: '123', message: '123123312' }, //请求内容
    pathname: '/pinglun', //请求路径名
    path: '/pinglun?name=123&message=123123312',
    href: 'http://127.0.0.1:3000/pinglun?name=123&message=123123312'
  }
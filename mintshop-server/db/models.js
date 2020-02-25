/*
包含n个能操作mongodb数据库集合的model的模块
1. 连接数据库
  1.1. 引入mongoose
  1.2. 连接指定数据库(URL只有数据库是变化的)
  1.3. 获取连接对象
  1.4. 绑定连接完成的监听(用来提示连接成功)
2. 定义对应特定集合的Model
  2.1. 字义Schema(描述文档结构)
  2.2. 定义Model(与集合对应, 可以操作集合)
3. 向外暴露获取Model的方法
 */
// 1. 连接数据库
// const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost:27017/guigu_zhipin')
// const conn = mongoose.connection
// conn.on('connected', function () {
//   console.log('数据库连接成功!')
// })
//引入模块
var mongoose = require('mongoose');
//连接数据库
mongoose.connect('mongodb://localhost:27017/runoob');
//得到数据库连接句柄
var db = mongoose.connection;
//通过数据库连接句柄，监听mongoose数据库成功的事件
db.on('open', function (err) {
  if (err) {
    console.log('数据库连接失败');
    throw err;
  }
  console.log('数据库连接成功')
})
// const mssql = require('mssql')
// //连接方式："mssql://用户名:密码@ip地址:1433(默认端口号)/数据库名称"
// mssql.connect('mssql://sa:123456@localhost/LAPTOP-5RAHKVS5/SQLEXPRESS/test')
// const conn = mssql.connection
// conn.on('connected', function () {
//   console.log('数据库连接成功!')
// })
// sql.connect("mssql://sa:123456@localhost/LAPTOP-5RAHKVS5/SQLEXPRESS/test").then(function () {
//   // Query
//   new sql.Request().query('select * from PW_User').then(function (recordset) {
//     console.log(recordset);
//   }).catch(function (err) {
//     console.log(err);
//   });
//   // Stored Procedure
// }).catch(function (err) {
//   console.log(err);
// })
// 2. 得到对应特定集合的Model: UserModel
const userSchema = mongoose.Schema({
  // 用户名{type: String}
  'name': { type: String },
  // 密码 {type: String}
  'pwd': { type: String },
  // 类型
  'phone': { 'type': String }
})
UserModel = mongoose.model('user', userSchema)

// 3. 向外暴露
module.exports = {
  getModel(name) {
    return mongoose.model(name)
  }
}


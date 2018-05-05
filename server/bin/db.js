//导入mongoose模块
const mongoose = require('mongoose')

//设置数据库连接地址
mongoose.connect('mongodb://localhost:27017/decoration')

//连接数据库
var db = mongoose.connection;

// 数据库连接失败的提示
db.on('error', err => console.error('数据库连接错误：', err));
// 数据库连接成功的提示
db.once('open', () => console.log('数据库连接成功'));

var Schema = mongoose.Schema;

// 用户
var UserSchema = new Schema({
	username: { type: String, unique: true },
	isAdmin: Boolean,
    password: String,
	age: Number,
	address: String,
	email: String,
	mobile: String,
	sex: String,
	photo: String
});
var User = mongoose.model('user', UserSchema);

// 导出模块
module.exports = { User };
var app = require('./server/bin/app')

// 用户路由
app.use('/', require('./server/router/user'))

// 问题路由
app.use('/question', require('./server/router/question'))

// api
app.use('/api', require('./server/router/api'))

// 监听端口
app.listen(3500, () => console.log('启动成功，端口3500.'))
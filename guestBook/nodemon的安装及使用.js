
// npm install --global nodemon
// --global选项是用于将包安装到全局
// 凡是安装全局包,在任意位置执行都可以
// 在node中,有一种特殊的包,这种包不是用于让你在代码中require来使用的
// 而是一个独立的命令行工具软件
// 例如:git,npm 
// 安装完nodemon之后就会在命令行中国多出一个命令:nodemon
// nodemon使用:
    // node app.js
    // nodemon app.js
// nodemon在外部包了一个壳子
// 它会监视文件的变动,当文件发生改变,它会帮你去自动去重新加载 node app.js
// 其实命令行工具也可以安装到项目中使用

var express = require('express') //模板

var app = express() //创建服务

app.get('/',function(req,res){
    res.send('hello word')
})


app.listen(3000,function(){
    console.log('running....')
})


















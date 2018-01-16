
var express = require('express') //模板
var fs = require('fs')

var app = express() //创建服务

app.use('/node_modules/',express.static('./node_modules/'))

// 在Express中配置使用art-template 模板引擎
app.engine('html',require('express-art-template'))

app.get('/',function(req,res){
    // 1.读取数据文件
        // 如果读取文件失败则发送500错误
    // 2.将数据文件内容转换为JSON对象
        // 如果读取文件失败则发送500错误
    // 3.数据转换成功,将数据和页面中的模板字符串解析替换发送给客户端
    fs.readFile('./db.json',function(err,data){
        if(err){
            console.log(err.message)
            return res.render('500.html',{
                errMessage:err.message
            })
        }
        // console.log(typeof data.toString()) 这只是字符串
        // data = JSON.parse(data.toString()) 把字符串转换为对象
        // console.log(data)
        try{
            data = JSON.parse(data.toString())
           res.render('index.html',{
               posts:data.posts
           })

        }catch(err){
            return res.render('500.html',{
                errMessage:err.message
            })
        }
    })
    // res.render('index.html',{
    //     posts:
    // })
})

app.get('/publish',function(req,res){
    res.render('publish.html')
})


app.listen(3000,function(){
    console.log('running....')
})

















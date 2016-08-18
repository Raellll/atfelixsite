var express = require('express');
var http=require("http");
var app = express();
var bodyParser = require('body-parser');
var fs = require("fs");

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//app.use(express.static('public'));

app.post('/process_post', urlencodedParser, function (req, res) {

    // 输出 JSON 格式
    var currentTime=new Date();
    var currentMonth=currentTime.getMonth()+1;
    var currentDate=currentTime.getDate();
    var currentHour=currentTime.getHours();
    var currentMinute=currentTime.getMinutes();
    var currentSeconds=currentTime.getSeconds();
    var filename=currentTime.getTime();

    response = {
        firstName:req.body.name,
        email:req.body.email,
        messageBoard:req.body.content,
        messageTime:currentHour+"点"+currentMinute+"分"+currentSeconds+"秒"
    };
    if(fs.existsSync(__dirname+'/'+currentMonth+'月'+currentDate+'日')){}
    else{
        fs.mkdir(__dirname+'/'+currentMonth+'月'+currentDate+'日',function(err){

            if (err) {
                return console.error(err);
            }
        });
    }
    fs.writeFile(__dirname+'/'+currentMonth+'月'+currentDate+'日/'+filename+'.txt',JSON.stringify(response),  function(err) {
        if (err) {
            return console.error(err);
        }

    });

    console.log(response);
    res.end(JSON.stringify(response));

})

var server = app.listen(8081, function () {
    console.log("成功开启服务")
})
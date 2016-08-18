/**
 * Created by felix on 2016/8/2.
 */
$(document).ready(function(){
    $("#messageBoardSubmit").on('click',function(){
        var date=new Date();
       var name= $("#firstname").val();
        var email=$("#email").val();

        var messageBoard=$("#messageBoard").val();
        var MBdata={
            "time": date,
            "name": name ,
            "email": email,
            "content":messageBoard
        };

        $.ajax({
            url:'http://127.0.0.1:8081/process_post',
            type:'POST',
            dataType:'json',
            data:MBdata,
            //success:function(data, status){
            //    alert("成功");
            //
            //},
            //error:function(data, status){
            //    alert("失败");
            //
            //},
            complete:function(){
            alert("111111111111");
        }

        });
    })
});
/**
 * Created by felix on 2016/8/3.
 */
$(document).ready(function(){
    $(".containCard").click(function(){
        $("#containBoxDiv").hide();
        $("#sideBoxDiv").show("slow");

        var strTitle=$(this).find("span").html();
        var titlediv=$("#titleId");

        titlediv.html(strTitle);
        var strNumber=$(this).attr("number");
        titlediv.removeClass();
        titlediv.addClass("FontColor-"+strNumber);
        titlediv.addClass("text-center");

        if(strNumber=="01"){

            $("#myWorksDiv").css("display","none");
            $("#myLifeDiv").css("display","none");
            $("#messageBoardDiv").css("display","none");
            $("#aboutMySiteDiv").css("display","none");
            $("#aboutMeDiv").css("display","none");
            $("#learnSomeThingDiv").show("slow");

        }else if(strNumber=="02"){
            $("#learnSomeThingDiv").css("display","none");
            $("#myLifeDiv").css("display","none");
            $("#messageBoardDiv").css("display","none");
            $("#aboutMySiteDiv").css("display","none");
            $("#aboutMeDiv").css("display","none");
            $("#myWorksDiv").show("slow");
        }
        else if(strNumber=="03"){
            $("#learnSomeThingDiv").css("display","none");
            $("#myWorksDiv").css("display","none");
            $("#messageBoardDiv").css("display","none");
            $("#aboutMySiteDiv").css("display","none");
            $("#aboutMeDiv").css("display","none");
            $("#myLifeDiv").show("slow");
        }
        else if(strNumber=="04"){
            $("#myWorksDiv").css("display","none");
            $("#myLifeDiv").css("display","none");
            $("#learnSomeThingDiv").css("display","none");
            $("#aboutMySiteDiv").css("display","none");
            $("#aboutMeDiv").css("display","none");
            $("#messageBoardDiv").show("slow");
        }else if(strNumber=="05"){
            $("#myWorksDiv").css("display","none");
            $("#myLifeDiv").css("display","none");
            $("#learnSomeThingDiv").css("display","none");
            $("#messageBoardDiv").css("display","none");
            $("#aboutMeDiv").css("display","none");
            $("#aboutMySiteDiv").show();
        }else if(strNumber=="06"){
            $("#myWorksDiv").css("display","none");
            $("#myLifeDiv").css("display","none");
            $("#learnSomeThingDiv").css("display","none");
            $("#messageBoardDiv").css("display","none");
            $("#aboutMySiteDiv").css("display","none");
            $("#aboutMeDiv").show("slow");

            //自我介绍的动画
            $('#aboutMeTextArea').delay(2000).focus()
                .typetype("There is no doubt that the author of this website is")
                .delay(1500)
                .typetype("\npeople see people love,flower see flower bloom,")
                .fadeTo(400,1.0).delay(1000)
                .typetype("\nhandsome-handsomely-handsomer-handsomest ",{
                    t:60,
                    e:0.05,
                })
                .typetype("\nromantic&wind current,yu shu lin fen,one and only", {
                    t:80,
                    e:0.1, // the default error rate is 0.04
                })
                .typetype("\nyoung&beautiful,clever&smart,cute&lovely,cool&cold......")
                .fadeTo(400,0.3).delay(4000,function(){
                $('#aboutMeTextAreaTran').typetype("翻译一下上面的话，大概的意思是，本站的作者是一个特别低调的人！作者邮箱：mrzhangfelix@gmail.com....欢迎来信",{
                    t:300,
                })

            });

        }
    });
});
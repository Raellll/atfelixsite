/**
 * Created by felix on 2016/7/24.
 */
//此js文件用于图片的展开和收缩
jQuery(document).ready(function ($) {
    $('li.title').on('click', function () {
        if($(this).parent().hasClass('transition')){
            $(this).find("h2").html("To Unfold");
            $(this).parent().removeClass('transition');


            $("ul.cards li.card").unbind('mouseenter');
            $("ul.cards li.card").unbind('mouseleave');
        }
        else{
            $(this).find("h2").html("To Fold");
            $(this).parent().addClass('transition');

            $("ul.cards.transition li.card").bind('mouseenter',function(){
                $(this).find("img").slideUp();
            });
            $("ul.cards.transition li.card").bind('mouseleave',function(){
                $(this).find("img").slideDown();
            });
        }
    });


});
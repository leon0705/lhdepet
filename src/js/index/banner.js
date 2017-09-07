/* 
* @Author: Marte
* @Date:   2017-09-06 09:08:03
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-06 11:14:55
*/
$(function(){
                //第一张显示
    $(".pic li").eq(0).show();
                //鼠标滑过手动切换，淡入淡出
    $(".playpic a").mouseover(function() {
        clearInterval(timer);
        $(this).addClass('hov').siblings().removeClass("hov");
        var index = $(this).index();
        i = index;//不加这句有个bug，鼠标移出小圆点后，自动轮播不是小圆点的后一个
        // $(".pic li").eq(index).show().siblings().hide();
        $(".pic li").eq(index).fadeIn(3000).siblings().fadeOut(3000);
    });
    //自动轮播
    var i=0;
    var playpic = document.querySelector('.playpic')
    var len = playpic.children.length;
    var timer=setInterval(play,3000);

    // setTimeout(function(){
    //     for(var j=0;j<len-1;j++){
    //         playpic.children[i].className = '';
    //         if(j===i){
    //             playpic.children[i].className = 'hov';
    //         }
    //     } 
    // },3000)
    //向右切换
    var play=function(){
        i++;
        i = i > 4 ? 0 : i ;
        $(".playpic a").eq(i).addClass('hov').siblings().removeClass("hov");
        $(".pic li").eq(i).fadeIn(3000).siblings().fadeOut(3000);
    }
    //向左切换
    var playLeft=function(){
        i--;
        i = i < 0 ? 4 : i ;
        $(".playpic a").eq(i).addClass('hov').siblings().removeClass("hov");
        $(".pic li").eq(i).fadeIn(3000).siblings().fadeOut(3000);
    }
    //鼠标移入移出效果
    $(".lh_carousel").hover(function() {
        clearInterval(timer);
        }, function() {
            timer=setInterval(play,3000);
        });
                //左右点击切换
                // $("#prev").click(function(){
                //     playLeft();
                // })
                // $("#next").click(function(){
                //     play();
                // })
                // 
    // 生成分页
    // 
})
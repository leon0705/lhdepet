/* 
* @Author: Marte
* @Date:   2017-09-08 09:42:15
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-08 10:48:58
*/

//设置菜单定位
function menu_scroll(obj, callback, rollback) {
    ofc = obj.offset().top;
    $(window).bind("scroll", function () {
        var t = $(window).scrollTop();
        if (t >= ofc) {
            obj.addClass('fixed');
            callback();
        } else {
            obj.removeClass('fixed');
            rollback();
        }
    });

}
//设置滚动条
function set_multi_menu(obj) {
    var ofc = obj.offset().top;
    var sh = $(window).scrollTop();
    if (sh > 0 && sh > ofc) {
        $(window).scrollTop(ofc);
    }
}
//返回顶部
var btdiv = $(".rt-top");
if (isie6()) {
    btdiv.css({position: 'absolute', top: "expression(documentElement.scrollTop + documentElement.clientHeight-this.offsetHeight)"});
}
$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        btdiv.css({'visibility': 'visible'});
    } else {
        btdiv.css({'visibility': 'hidden'});
    }
    if (cartbox != null && cartbox.is(":visible")) {
        posdiv($(".rtcont li.scart"), cartbox, 0, 0);
    }
});

//right bar
function rtchange() {
    var rth = $(window).height() - 450;
    var toph = 130, rtup = 330;
    if (rth < rtup) {
        toph = 130 - (rtup - rth);
        if (toph < 30) {
            toph = 30;
        }
        rth = rtup;
    }
    $(".rtcont-up").height(472);
    $("#rtbar").stop(true, true).animate({right: 0, top: 0, opacity: 1}, 'slow');
    $(".rtcont-up").animate({top: toph}, 'slow');

    if($(window).height()<=580){
        $(".rtcont-dn").hide();
    }else{
        $(".rtcont-dn").show();
    }
}
$(function () {
    rtchange();
});
$(window).resize(function () {
    rtchange();
});
if (app == 'goodslist' || app == 'goods/list') {
    $('.headerTop').removeClass('fixed');
    $(".fix_height").remove();
    $('.header').css({'padding-top': '10px'});
    fixbar('#gdmenu', 'fixed shadow',function(){},function(){});
    $(".seemo").click(function () {
        $(this).toggleClass('seemo-hov').parent().toggleClass('fil-ht');
    });
}

//购买数量控制
if ($(".chgnum").length > 0) {
    $(".chgnum").click(function () {
        var binput = $(this).parent().find(".buynum");
        var bnum = parseInt(binput.val());
        if (this.className.indexOf("add-buynum") != -1) {
            bnum++;
        } else {
            bnum--;
        }
        buynum_chk(binput.get(0), bnum);
    });
    $(".buynum").keyup(function () {
        this.value = this.value.match(/^[\d]+$/) == null ? 1 : this.value;
        var bnum = parseInt(this.value);
        buynum_chk(this, bnum);
    })
}
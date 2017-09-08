/* 
* @Author: Marte
* @Date:   2017-09-08 11:29:30
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-08 17:38:38
*/
$(function(){
    //获取url中的参数
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]); return null; //返回参数值
    }
    var id = getUrlParam('gid');
    console.log('gid:'+id);

    // var wrap = document.querySelector('#wrap');

    // var xhr = new XMLHttpRequest();

    // xhr.onreadystatechange = function(){
    //     console.log(xhr.readyState);
    //     if(xhr.readyState === 4){

    //         var res = JSON.parse(xhr.responseText);
    //         console.log(res);

    //         wrap.innerHTML = res.map(gid=>{
    //             return `
    //                 <a herf="${gid.img}" id="zoom1" class="cloud-zoom" style="z-index: 0; position: relative; display: block;" rel="showTitle:false,zoomWidth:500,zoomHeight:380,minWidth:400,minHeight:300,adjustX:-10">
    //                     <img alt="gid" src="${gid.img}" style="display:block;">
    //                 </a>
    //             `        
    //         }).join('');


    //     }
    // }

    // // xhr.open('get','http://localhost:1212/api/goodslist.php',true);
    // xhr.open('get','http://localhost/gz1704/src/mysql/goods.php',true);
    // // xhr.open('get','http://localhost:1704/api/goodslist.php',true);//readyState:1
    // xhr.send(); 
    // 
    $.ajax({
     type:'get',
     url:'http://localhost/gz1704/src/mysql/details.php',
     dataType:'json',
     success:function(res,status){
         console.log(status)
         $.each(res, function(idx,val) {
             //根据id获取详情数据
             //
             //左侧商品图片
             if(id == val.gid){
                var wrap_img='';
                wrap_img+=[
                '<a id="zoom1" class="cloud-zoom" style="z-index:0;position:relative;display:block; ">',
                    '<img alt="'+val.gid+'" src="'+val.img+'"/>',
                '</a>',
                '<div class="mousetrap" style="width: 300px; height: 300px; cursor: move;">',
                '</div>',
                '<div class="mousetrap" style="width: 300px; height: 300px; cursor: move;">',
                '</div>'
                ].join('');

                var oborder_img='';
                oborder_img+=[
                '<li class>',
                    '<a class="cloud-zoom-gallery gimg" >',
                        '<img alt="'+val.subject+' 缩略图1"/>',
                    '</a>',
                '</li>',
                '<li class>',
                    '<a class="cloud-zoom-gallery gimg" >',
                        '<img alt="'+val.subject+' 缩略图2"/>',
                    '</a>',
                '</li>',
                '<li class>',
                    '<a class="cloud-zoom-gallery gimg" >',
                        '<img alt="'+val.subject+' 缩略图3"/>',
                    '</a>',
                '</li>'
                ].join('');
                 console.log(wrap_img);

                 var xq_num='';
                 xq_num+=[
                    '<span class="c999">编号：',
                    '<span/>',
                    val.gid
                 ].join('');

                 // 右侧内容
                 var gddes='';
                 gddes+=[
                    '<h1 class="gdtitle c333 ft18 bold" id="abcde">',
                        val.subject,
                    '</h1>',
                    '<div class="ft14 mt c93c">',
                        val.title,
                    '</div>',
                    '<div class="epet-pprice pad20 mt15 ft14">',
                        '<div class="mt5 clearfix">',
                            '<span class="c999 fl">',
                                '市场价',
                            '</span>',
                            '<del class="c333 fl">',
                                '￥'+val.market,
                            '</del>',
                        '</div>',
                        '<div class="mt5 clearfix">',
                            '<span class="c999 fl mt20">',
                                'E宠价：',
                            '</span>',
                            '<span class="ft20 c93c">￥',
                            '</span>',
                            '<span class="c93c goods-font bold" id="goods-sale-price" data-name="sale_price">',
                                val.price,
                            '</span>',
                        '</div>',
                    '</div>',
                    '<div class="gdtable gdattr gadttrnoBorder ft14 overflow pt10 pb10">',
                        '<div class="clearfix">',
                            '<div class="ats-style mt5">',
                                '<span class="c999">剩余：',   
                                '</span>',
                                '<span class="ce54649">',
                                    val.stock,
                                '</span>',
                                '袋',
                            '</div>',
                            '<div class="ats-style mt5 ml20">',
                            '</div>',
                            '<div class="ats-style mt5 ml20">',
                                '<span class="c999">赠送：',
                                '</span>',
                                '最多',
                                '<span class="c78b300">',
                                    val.price/10,
                                '</span>',
                                '宠币',
                            '</div>',
                        '</div>',
                        '<div class="gdicos mt pb10 pointer">',
                            '<span class="cfff ft12 ftc" );">正品溯源</span>',
                            '<span class="cfff ft12 ftc" );">全球精选</span>',
                            '<span class="cfff ft12 ftc" );">自营快递</span>',
                            '<span class="cfff ft12 ftc" );">自营大仓</span>',
                        '</div>',
                    '</div>',
                    '<div class="norms clearfix mt15">',
                        '<span class="fl ft14 db c999">重量：',
                        '</span>',
                        '<div class="norms-con fl">',
                            '<a herf="./details.html?gid=${item.gid}" title="'+val.formats+'" class="norms-a">',
                                val.formats,
                            '</a>',
                            '<a herf="./details.html?gid=${item.gid}" title="'+val.formats+'" class="norms-a">',
                                val.formats,
                            '</a>',
                        '</div>',
                    '</div>',
                    '<div class="norms clearfix mt15 pb10">',
                        '<span class="fl ft14 db c999 mt5">我要买：',
                        '</span>',
                        '<div class="norms-con fl">',
                            '<span class="cgnum fl mr">',
                                '<span class="chgnum lim-buynum ft14">-',
                                '</span>',
                                '<input type="text" onchange="Epet.Goods.changeNum(this.value)" onblur="Epet.Goods.changeNum(this.value)" id="cart_buynum" class="text buynum" value="1" size="2">',
                                '<span class="chgnum add-buynum ft14">+',
                                '</span>',
                            '</span>',
                            '<span class="fl mt">袋</span>',
                        '</div>',
                    '</div>',
                    '<div class="gdtable sent-city">',
                    '</div>',
                    '<div class="norms clearfix mt15">',
                        '<div class="norms-con fl">',
                            '<div class="c999 ft13">E宠快递15点前下单，其他快递16点前下单，当天发货。',
                                '<a href="" target="_blank">运费详情&gt;&gt;',
                                '</a>',
                            '</div>',
                        '</div>',
                    '</div>',
                    '<div class="clearfix mt20 pt10">',
                        '<div class="fl addcart-div" id="addcart-div">',
                            '<div class="add-buycart ft20 cfff ftc pointer" data-name="addcart-botton">',
                                '<input id="cart_gid" type="hidden" value="127618">',
                                '<input id="cart_buymode" type="hidden" value="">',
                                '<input id="cart_pam" type="hidden" value="">',
                                '<input id="cart_pam1" type="hidden" value="">',
                                '<a class="db epet_sensor_add_cart" onclick="Epet.Goods.addToCart()">',
                                    '<span class="cfff">加入购物车',
                                    '</span>',
                                '</a>',
                            '</div>',
                        '</div>',           
                        '<div class="advice ml20 fl">',
                            '<a href="" class="db ft14 c333 mt5">',
                                '<i class="db xqico">',
                                '</i>咨询',
                            '</a>',
                        '</div>',
                    '</div>',
                 ].join('');

             }

             $('#wrap').append(wrap_img);
             $('.oborder').append(oborder_img);
             $('.xq-num').append(xq_num);
             $('.gddes').append(gddes);
         });
     }
    })
})

//普通商品图片放大镜
;(function($) {
    $(document).ready(function() {
        $('.cloud-zoom, .cloud-zoom-gallery').CloudZoom();
        $('.cloud-zoom').click(function() {
            return false
        })
    });
    function format(str) {
        for (var i = 1; i < arguments.length; i++) {
            str = str.replace('%' + (i - 1), arguments[i])
        }
        return str
    }
    function CloudZoom(jWin, opts) {
        var sImg = $('img', jWin);
        var img1;
        var img2;
        var zoomDiv = null;
        var $mouseTrap = null;
        var lens = null;
        var $tint = null;
        var softFocus = null;
        var $ie6Fix = null;
        var zoomImage;
        var controlTimer = 0;
        var cw, ch;
        var destU = 0;
        var destV = 0;
        var currV = 0;
        var currU = 0;
        var filesLoaded = 0;
        var mx, my;
        var ctx = this, zw;
        setTimeout(function() {
            if ($mouseTrap === null) {
                var w = jWin.width();
                jWin.parent().append(format('<div style="width:%0px;position:absolute;top:75%;left:%1px;text-align:center" class="cloud-zoom-loading" >Loading...</div>', w / 3, (w / 2) - (w / 6))).find(':last').css('opacity', 0.5)
            }
        }, 200);
        var ie6FixRemove = function() {
            if ($ie6Fix !== null) {
                $ie6Fix.remove();
                $ie6Fix = null
            }
        };
        this.removeBits = function() {
            if (lens) {
                lens.remove();
                lens = null
            }
            if ($tint) {
                $tint.remove();
                $tint = null
            }
            if (softFocus) {
                softFocus.remove();
                softFocus = null
            }
            ie6FixRemove();
            $('.cloud-zoom-loading', jWin.parent()).remove()
        }
        ;
        this.destroy = function() {
            jWin.data('zoom', null);
            if ($mouseTrap) {
                $mouseTrap.unbind();
                $mouseTrap.remove();
                $mouseTrap = null
            }
            if (zoomDiv) {
                zoomDiv.remove();
                zoomDiv = null
            }
            this.removeBits()
        }
        ;
        this.fadedOut = function() {
            if (zoomDiv) {
                zoomDiv.remove();
                zoomDiv = null
            }
            this.removeBits()
        }
        ;
        this.controlLoop = function() {
            if (lens) {
                var l = $('.mousetrap').position().left;
                var t = $('.mousetrap').position().top;
                var x = (mx - sImg.offset().left + l - (cw * 0.5)) >> 0;
                var y = (my - sImg.offset().top + t - (ch * 0.5)) >> 0;
                if (x < l) {
                    x = l
                } else if (x > (sImg.outerWidth() + l - cw)) {
                    x = (sImg.outerWidth() + l - cw)
                }
                if (y < t) {
                    y = t
                } else if (y > (sImg.outerHeight() + t - ch)) {
                    y = (sImg.outerHeight() + t - ch)
                }
                lens.css({
                    left: x,
                    top: y
                });
                lens.css('background-position', (-x) + 'px ' + (-y) + 'px');
                destU = (((x) / sImg.outerWidth()) * zoomImage.width) >> 0;
                destV = (((y) / sImg.outerHeight()) * zoomImage.height) >> 0;
                currU += (destU - currU) / opts.smoothMove;
                currV += (destV - currV) / opts.smoothMove;
                zoomDiv.css('background-position', (-(currU >> 0) + 'px ') + (-(currV >> 0) + 'px'))
            }
            controlTimer = setTimeout(function() {
                ctx.controlLoop()
            }, 30)
        }
        ;
        this.init2 = function(img, id) {
            filesLoaded++;
            if (id === 1) {
                zoomImage = img
            }
            if (filesLoaded === 2) {
                this.init()
            }
        }
        ;
        this.init = function() {
            $('.cloud-zoom-loading', jWin.parent()).remove();
            $mouseTrap = jWin.parent().append(format("<div class='mousetrap' style='width:%0px;height:%1px;\'></div>", sImg.outerWidth(), sImg.outerHeight())).find(':last');
            $mouseTrap.bind('mousemove', this, function(event) {
                mx = event.pageX;
                my = event.pageY
            });
            $mouseTrap.bind('mouseleave', this, function(event) {
                clearTimeout(controlTimer);
                if (lens) {
                    lens.fadeOut(299)
                }
                if ($tint) {
                    $tint.fadeOut(299)
                }
                if (softFocus) {
                    softFocus.fadeOut(299)
                }
                zoomDiv.fadeOut(300, function() {
                    ctx.fadedOut()
                });
                return false
            });
            $mouseTrap.bind('mouseenter', this, function(event) {
                if (img2.width < opts.minWidth) {
                    return
                }
                if (img2.height < opts.minHeight) {
                    return
                }
                mx = event.pageX;
                my = event.pageY;
                zw = event.data;
                if (zoomDiv) {
                    zoomDiv.stop(true, false);
                    zoomDiv.remove()
                }
                var dWidth = document.documentElement.clientWidth
                  , dHeight = document.documentElement.clientHeight;
                var xPos = opts.adjustX
                  , yPos = opts.adjustY;
                var siw = 393;
                var sih = sImg.outerHeight();
                var w = opts.zoomWidth;
                var h = opts.zoomHeight;
                if (opts.zoomWidth == 'auto') {
                    w = siw
                }
                if (opts.zoomHeight == 'auto') {
                    h = sih
                }
                var appendTo = jWin.parent();
                var aLeft = appendTo.offset().left
                  , aTop = appendTo.offset().top;
                var dLeft = $(document).scrollLeft()
                  , dTop = $(document).scrollTop();
                var l = $('.mousetrap').position().left;
                var t = $('.mousetrap').position().top;
                switch (opts.position) {
                case 'top':
                    if (((h + yPos) > (aTop - dTop)) && ((aTop - dTop + sih / 2) < dHeight / 2))
                        opts.position = 'bottom';
                    break;
                case 'right':
                    if (((dWidth - (aLeft - dLeft + siw)) < (w + xPos)) && ((aLeft - dLeft + siw / 2) > (dWidth / 2)))
                        opts.position = 'left';
                    break;
                case 'bottom':
                    if (((h + yPos) > (dHeight - (aTop - dTop + sih))) && ((aTop - dTop + sih / 2) > dHeight / 2))
                        opts.position = 'top';
                    break;
                case 'left':
                    if (((aLeft - dLeft) < (w + xPos)) && ((aLeft - dLeft + siw / 2) < (dWidth / 2)))
                        opts.position = 'right';
                    break
                }
                switch (opts.position) {
                case 'top':
                    yPos = -yPos - h;
                    break;
                case 'right':
                    xPos += siw;
                    yPos = -(383 - sImg.outerHeight()) / 2;
                    break;
                case 'bottom':
                    yPos += sih;
                    break;
                case 'left':
                    xPos = -xPos - w;
                    break;
                case 'inside':
                    w = siw;
                    h = sih;
                    xPos = xPos + l;
                    yPos = yPos + t;
                    break;
                default:
                    appendTo = $('#' + opts.position);
                    if (!appendTo.length) {
                        appendTo = jWin;
                        xPos += siw;
                        yPos += sih
                    } else {
                        w = appendTo.innerWidth();
                        h = appendTo.innerHeight()
                    }
                }
                zoomDiv = appendTo.append(format('<div id="cloud-zoom-big" class="cloud-zoom-big" style="display:none;position:absolute;left:%0px;top:%1px;width:%2px;height:%3px;background-image:url(\'%4\');z-index:99;"></div>', xPos, yPos, w, h, zoomImage.src)).find(':last');
                if (sImg.attr('title') && opts.showTitle) {
                    zoomDiv.append(format('<div class="cloud-zoom-title">%0</div>', sImg.attr('title'))).find(':last').css('opacity', opts.titleOpacity)
                }
                if ($.browser.msie && $.browser.version < 7) {
                    $ie6Fix = $('<iframe frameborder="0" src="#"></iframe>').css({
                        position: "absolute",
                        left: xPos,
                        top: yPos,
                        zIndex: 99,
                        width: w,
                        height: h
                    }).insertBefore(zoomDiv)
                }
                zoomDiv.fadeIn(500);
                if (lens) {
                    lens.remove();
                    lens = null
                }
                cw = (sImg.outerWidth() / zoomImage.width) * zoomDiv.width();
                ch = (sImg.outerHeight() / zoomImage.height) * zoomDiv.height();
                lens = jWin.append(format("<div class = 'cloud-zoom-lens' style='display:none;z-index:98;position:absolute;width:%0px;height:%1px;'></div>", cw, ch)).find(':last');
                $mouseTrap.css('cursor', lens.css('cursor'));
                var noTrans = false;
                if (opts.tint) {
                    lens.css('background', 'url("' + sImg.attr('src') + '")');
                    $tint = jWin.append(format('<div style="display:none;position:absolute; left:0px; top:0px; width:%0px; height:%1px; background-color:%2;" />', sImg.outerWidth(), sImg.outerHeight(), opts.tint)).find(':last');
                    $tint.css('opacity', opts.tintOpacity);
                    noTrans = true;
                    $tint.fadeIn(500)
                }
                if (opts.softFocus) {
                    lens.css('background', 'url("' + sImg.attr('src') + '")');
                    softFocus = jWin.append(format('<div style="position:absolute;display:none;top:2px; left:2px; width:%0px; height:%1px;" />', sImg.outerWidth() - 2, sImg.outerHeight() - 2, opts.tint)).find(':last');
                    softFocus.css('background', 'url("' + sImg.attr('src') + '")');
                    softFocus.css('opacity', 0.5);
                    noTrans = true;
                    softFocus.fadeIn(500)
                }
                if (!noTrans) {
                    lens.css('opacity', opts.lensOpacity)
                }
                if (opts.position !== 'inside') {
                    lens.fadeIn(500)
                }
                zw.controlLoop();
                return
            })
        }
        ;
        img1 = new Image();
        $(img1).load(function() {
            ctx.init2(this, 0)
        });
        img1.src = sImg.attr('src');
        img2 = new Image();
        $(img2).load(function() {
            ctx.init2(this, 1)
        });
        img2.src = jWin.attr('href')
    }
    $.fn.CloudZoom = function(options) {
        try {
            document.execCommand("BackgroundImageCache", false, true)
        } catch (e) {}
        this.each(function() {
            var relOpts, opts;
            eval('var   a = {' + $(this).attr('rel') + '}');
            relOpts = a;
            if ($(this).is('.cloud-zoom')) {
                $(this).css({
                    'position': 'relative',
                    'display': 'block'
                });
                $('img', $(this)).css({
                    'display': 'block'
                });
                if ($(this).parent().attr('id') != 'wrap') {
                    $(this).wrap('<div id="wrap"  class="cloud-zoom-wrap"></div>')
                }
                opts = $.extend({}, $.fn.CloudZoom.defaults, options);
                opts = $.extend({}, opts, relOpts);
                $(this).data('zoom', new CloudZoom($(this),opts))
            } else if ($(this).is('.cloud-zoom-gallery')) {
                opts = $.extend({}, relOpts, options);
                $(this).data('relOpts', opts);
                $(this).bind('click', $(this), function(event) {
                    var data = event.data.data('relOpts');
                    $('#' + data.useZoom).data('zoom').destroy();
                    $('#' + data.useZoom).css({
                        'marginTop': event.data.data('relOpts').marginTop,
                        'marginLeft': event.data.data('relOpts').marginLeft
                    });
                    $('#' + data.useZoom).attr('href', event.data.attr('href'));
                    $('#' + data.useZoom + ' img').attr('src', event.data.data('relOpts').smallImage);
                    $('#' + event.data.data('relOpts').useZoom).CloudZoom();
                    return false
                })
            }
        });
        return this
    }
    ;
    $.fn.CloudZoom.defaults = {
        zoomWidth: 'auto',
        zoomHeight: 'auto',
        position: 'right',
        tint: false,
        tintOpacity: 0.5,
        lensOpacity: 0.5,
        softFocus: false,
        smoothMove: 3,
        showTitle: true,
        titleOpacity: 0.5,
        adjustX: 0,
        adjustY: 0,
        minWidth: 1200,
        minHeight: 1200
    }
})(jQuery);